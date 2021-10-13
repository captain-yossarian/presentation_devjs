/**
 *
 *
 * FIRST EXAMPLE
 *
 *
 */

const tuple = <Fst extends number, Scd extends number>(
  fst: Fst,
  scd: Scd
): [Fst, Scd] => [fst, scd];

tuple(4, 2);

/**
 *
 *
 * SECOND EXAMPLE
 *
 *
 */
const fst = <Fst extends number, Scd extends number, Tuple extends [Fst, Scd]>([
  fst,
  _,
]: Tuple): Tuple[0] => fst;

fst(tuple(4, 2)); // 4
