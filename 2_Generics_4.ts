export {};
/**
 *
 *
 * FIRST EXAMPLE
 * WRONG WAY
 *
 */

/**
 *
 * Generic should always be binded with argument
 */
function fn<Char extends string>(): Char {
  return "a";
}

const result = fn<"a" & { extraProp: "hello" }>().extraProp; // "hello"
