export {};

type A = "a";
type B = "b";
type Base = "base";

type VariantA = {
  a: A;
  base: Base;
};

type VariantB = {
  b: B;
  base: Base;
};

const fn = (arg: VariantA | VariantB) => {};

const b: B = "b";
const a: A = "a";
const base: Base = "base";

fn({ a, base }); // ok
fn({ b, base }); // ok

fn({ b, a, base }); // no error, but we might expect
