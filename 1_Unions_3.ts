export { };

// credits goes to https://stackoverflow.com/questions/65805600/type-union-not-checking-for-excess-properties#answer-65805753
type UnionKeys<T> = T extends T ? keyof T : never;

type StrictUnionHelper<T, TAll> = T extends any
  ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>>
  : never;

type StrictUnion<T> = StrictUnionHelper<T, T>;

type A = "a";
type B = "b";

type VariantA = {
  a: A;
};

type VariantB = {
  b: B;
};

// Equal to Result type
type Debug =
  | (VariantA & Partial<Record<"b", never>>)
  | (VariantB & Partial<Record<"a", never>>);

type Result = StrictUnion<VariantA | VariantB>;

const fn = <T extends StrictUnion<VariantA | VariantB>>(arg: T) => { };

const b: B = "b";
const a: A = "a";

fn({ a }); // ok
fn({ b }); // ok

fn({ a, b }); // error without any changes in the union
