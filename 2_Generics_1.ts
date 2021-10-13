type Json =
  | null
  | string
  | number
  | boolean
  | Array<JSON>
  | {
      [prop: string]: Json;
    };

// Few words about contextual typing

const foo = <T>(a: T) => a;

// const foo: <42>(a: 42) => 42
foo(42);
