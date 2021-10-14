/**
 *
 *
 * FIRST EXAMPLE
 *
 *
 */
{
  const foo = <Value extends number, T extends { a: Value }>(a: T) => a;

  // const foo: <{ a: 42; }> (a: { a: 42; }) => { a:42; }
  foo({ a: 42 });
}

/**
 *
 *
 * SECOND EXAMPLE
 *
 *
 */
{
  const foo = <
    Key extends PropertyKey,
    Value extends Json,
    T extends Record<Key, Value>
  >(
    a: T
  ) => a;

  // const foo: <PropertyKey, Json, { a: 42; b: "hello"; }
  foo({ a: 42, b: "hello" });
}
