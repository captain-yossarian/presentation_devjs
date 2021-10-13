// Why do we even need to infer literal types ?
{
  type IsForbidden<
    List extends any[],
    Cache extends any[] = []
  > = List extends []
    ? Cache
    : List extends [infer X, ...infer XS]
    ? X extends 42
      ? IsForbidden<XS, [...Cache, "FORBIDDEN"]>
      : IsForbidden<XS, [...Cache, X]>
    : List;

  const foo = <
    Value extends number,
    Tuple extends Value[],
    Result extends IsForbidden<[...Tuple]>
  >(
    ...a: [...Tuple] & Result
  ) => a;

  foo(1, 2, 3, 42);
}

/**
 * SHow contextual typing in F#
 */

// Let's try our validation trick with function types
{
  // Warning
  type Fn = (...args: any[]) => any;
  // TO be fixed
  type Composable<Fns extends [Fn, Fn]> = ReturnType<Fns[0]> extends Parameters<
    Fns[1]
  >[0]
    ? Fns
    : never;

  type Test = Composable<[(a: number) => number, (arg: number) => string]>; // ok

  const foo = <Fst extends Fn, Scd extends Fn>(
    ...fns: Composable<[Fst, Scd]>
  ) => {};

  const add = (a: number) => a + 1;
  const mul = (a: number) => a * 2;

  const result = foo(add, mul); // [1, 42]
}

declare function foo(a: number): number[];
declare function bar(a: string): number;
declare function baz(a: number[]): string;

// Let's try to write our own compose function
{
  /**
   * Utils
   */
  type Fn = (a: any) => any;

  type Last<T extends any[]> = T extends [...infer _, infer LastElement]
    ? LastElement
    : never;

  type CustomParameters<T> = T extends (...args: infer P) => any ? P : never;
  type CustomReturnType<T> = T extends (...args: any) => infer R ? R : any;

  type Compose<T, U, R> = CustomParameters<T>[0] extends CustomReturnType<U>
    ? R
    : never;

  /**
   * Main type
   */
  type Composition<T extends any[], Cache extends any[] = []> = T extends []
    ? Cache
    : T extends [infer Lst]
    ? Composition<[], [...Cache, Lst]>
    : T extends [infer Fst, ...infer Lst]
    ? Compose<Fst, Lst[0], Composition<Lst, [...Cache, Fst]>>
    : never;

  type ComposeArgument<Fns extends any[]> = Composition<Fns> extends never
    ? never
    : CustomParameters<Last<Fns>>[0];

  const UNIMPLEMENTED = null as any;

  const compose =
    <T extends Fn, Fns extends T[]>(...args: [...Fns]) =>
    (...data: [ComposeArgument<Fns>]): CustomReturnType<Fns[0]> =>
      UNIMPLEMENTED;

  const check = compose(foo, bar, baz, baz)([1, 2, 3]); // [number]
  const check2 = compose(bar, foo)(1); // expected error
}
