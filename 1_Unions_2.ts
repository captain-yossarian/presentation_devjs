export {};

type A = "a";
type B = "b";
type Base = "base";

type VariantA = {
  tag: "a";
  a: A;
  base: Base;
};
type VariantB = {
  tag: "b";
  b: B;
  base: Base;
};

const b: B = "b";
const a: A = "a";

const fn = <T extends VariantA | VariantB>(arg: T) => {};

const base: Base = "base";

fn({ a, base, tag: "a" }); // ok
fn({ b, base, tag: "b" }); // ok

fn({ a, b, base }); // expected error, no tag
