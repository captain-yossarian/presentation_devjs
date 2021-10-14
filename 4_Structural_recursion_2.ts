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
