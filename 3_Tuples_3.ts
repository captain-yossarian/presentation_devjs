import { useState } from "react";
import { tuple } from "./3_Tuples_2";

/**
 *
 *
 * FIRST EXAMPLE
 *
 *
 */
const zip = <
  Tuple1 extends unknown[],
  Tuple2 extends unknown[] & { length: Tuple1["length"] }
>(
  tuple1: [...Tuple1],
  tuple2: Tuple2
) => "NOT IMPLEMENTED";

zip(tuple(1, 2), tuple(3, 4)); // ok
zip(tuple(1), tuple(3)); // ok

zip(tuple(1, 2), tuple(3)); // expected error
zip(tuple(1, 2), tuple(3, 4, 5)); // expected error

{
  const App = () => {
    // [number, React.Dispatch<React.SetStateAction<number>>]
    const state = useState(0);

    return null;
  };
}
