/**
 *
 *
 * FIRST EXAMPLE
 *
 *
 */
{
  // infer argument

  const foo = <T>(a: T) => a;

  // const foo: <{ a: number; }> (a: { a: number; }) => { a: number; }
  foo({ a: 42 });

  foo({ a: 42 } as const);
}

/**
 *
 *
 * SECOND EXAMPLE
 *
 *
 */

{
  const foo = <Value, T extends { a: Value }>(a: T) => a;

  // const foo: <{ a: number; }> (a: { a: number; }) => { a: number; }
  foo({ a: 42 });
}
