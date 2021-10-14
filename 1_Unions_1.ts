export { };

type A = "a";
type B = "b";

type VariantA = {
  a: A;
};

type VariantB = {
  b: B;
};

const fn = (arg: VariantA | VariantB) => { };

const b: B = "b";
const a: A = "a";

fn({ a }); // ok
fn({ b }); // ok

fn({ b, a }); // no error, but we might expect
