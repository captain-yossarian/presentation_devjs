export {};

declare function foo(a: number): number[];
declare function bar(a: string): number;
declare function baz(a: number[]): string;

type Fn = (a: any) => any;

type Last<T extends any[]> = T extends [...infer _, infer LastElement]
  ? LastElement
  : never;

// Built in Parameters utility type
type CustomParameters<T> = T extends (...args: infer P) => any ? P : never;

// Built in ReturnType utility type
type CustomReturnType<T> = T extends (...args: any) => infer R ? R : any;

type Compose<Fst, Scd, Return> =
  CustomParameters<Fst>[0] extends CustomReturnType<Scd> ? Return : never;

/**
 * Main logic
 */
type Iterate<T extends any[], Cache extends any[] = []> = T extends []
  ? Cache
  : T extends [infer Lst]
  ? Iterate<[], [...Cache, Lst]>
  : T extends [infer Fst, ...infer Lst]
  ? Compose<Fst, Lst[0], Iterate<Lst, [...Cache, Fst]>>
  : never;

type ComposeArgument<Fns extends any[]> = Iterate<Fns> extends never
  ? never
  : CustomParameters<Last<Fns>>[0];

const compose =
  <T extends Fn, Fns extends T[]>(...args: [...Fns]) =>
  (...data: [ComposeArgument<Fns>]): CustomReturnType<Fns[0]> =>
    "UNIMPLEMENTED" as any;

const check = compose(foo, bar, baz)([1, 2, 3]); // [number]
const check2 = compose(bar, foo)(1); // expected error
