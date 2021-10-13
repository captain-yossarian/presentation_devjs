/**
 *
 *
 * FIRST EXAMPLE
 *
 *
 */
export const tuple = <Elem extends string | number, Tuple extends Elem[]>(
  ...tpl: [...Tuple]
) => tpl;

tuple(1, 2, "3"); // [1, 2, "3"]

/**
 *
 *
 * SECOND EXAMPLE
 *
 *
 */

const merge = <Tuple1 extends unknown[], Tuple2 extends unknown[]>(
  tuple1: [...Tuple1],
  tuple2: [...Tuple2]
): [...Tuple1, ...Tuple2] => [...tuple1, ...tuple2];

merge(tuple(1, 2), tuple(3, 4)); // [1, 2, 3, 4]
