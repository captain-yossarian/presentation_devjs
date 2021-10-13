export {};
/**
 * Show contextual typing in F#
 */

type Fn = (...args: any[]) => any;

type Tuple<T> = [T, T];

type IsComposable<Fns extends Tuple<Fn>> = ReturnType<
  Fns[1]
> extends Parameters<Fns[0]>[0]
  ? Fns
  : never;

type Test = IsComposable<[(a: string) => number[], (arg: number) => string]>; // ok

const compose = <Fst extends Fn, Scd extends Fn>(
  ...fns: IsComposable<[Fst, Scd]>
) => {};

declare function toInt(arg: string): number;
declare function add(a: number): number;

compose(add, toInt); // ok
compose(toInt, add); // error
