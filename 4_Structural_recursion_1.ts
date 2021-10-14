/**
 * Structural recursion
 *
 * Functional programming favors recursion over looping
 */

{
  function length_(list: []): 0;
  function length_(list: [number]): number;
  function length_([x, ...xs]: number[]) {
    return 1 + length_(xs); //
  }

  type Length<List extends any[], Cache extends any[] = []> = List extends []
    ? Cache["length"]
    : List extends [infer X, ...infer XS]
    ? Length<XS, [...Cache, 1]>
    : never;

  type Test = Length<["a", "b", "c"]>;
}
