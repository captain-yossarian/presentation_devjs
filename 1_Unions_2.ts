export {};

type A = "a";
type B = "b";

type VariantA = {
  tag: "a";
  a: A;
};
type VariantB = {
  tag: "b";
  b: B;
};

const b: B = "b";
const a: A = "a";

const fn = <T extends VariantA | VariantB>(arg: T) => {};


fn({ a,  tag: "a" }); // ok
fn({ b,  tag: "b" }); // ok

fn({ a, b, }); // expected error, no tag

fn({ a, b,  tag:'a'}); // ok
