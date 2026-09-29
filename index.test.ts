import {
  assertEquals,
  assertGreaterOrEqual,
  assertLess,
  assertLessOrEqual,
} from "@std/assert";
import {
  // SEARCH VALUE
  includes,
  hasValue,
  indexOf,
  lastIndexOf,
  searchValue,
  searchValueRight,
  searchValueAny,
  searchClosestValue,
  // MERGE
  merge,
  rangedMerge,
  mergeAll,
  // SET OPERATIONS
  isUnique,
  isDisjoint,
  unique,
  union,
  intersection,
  difference,
  symmetricDifference,
} from "./index.ts";




// #region SEARCH VALUE
// --------------------

Deno.test("includes", () => {
  let a;
  const x = [10, 20, 20, 40, 40, 80];
  a = includes(x, 30);
  assertEquals(a, false);
  a = includes(x, 40);
  assertEquals(a, true);
});


Deno.test("hasValue", () => {
  let a;
  const x = [10, 20, 20, 40, 40, 80];
  a = hasValue(x, 30);
  assertEquals(a, false);
  a = hasValue(x, 40);
  assertEquals(a, true);
});


Deno.test("indexOf", () => {
  let a;
  const x = [10, 20, 20, 40, 40, 80];
  a = indexOf(x, 30);
  assertEquals(a, -1);
  a = indexOf(x, 40);
  assertEquals(a, 3);
});


Deno.test("lastIndexOf", () => {
  let a;
  const x = [10, 20, 20, 40, 40, 80];
  a = lastIndexOf(x, 30);
  assertEquals(a, -1);
  a = lastIndexOf(x, 40);
  assertEquals(a, 4);
});


Deno.test("searchValue", () => {
  let a;
  const x = [10, 20, 20, 40, 40, 80];
  a = searchValue(x, 30);
  assertLess(a, 0);
  a = searchValue(x, 40);
  assertEquals(a, 3);
});


Deno.test("searchValueRight", () => {
  let a;
  const x = [10, 20, 20, 40, 40, 80];
  a = searchValueRight(x, 30);
  assertLess(a, 0);
  a = searchValueRight(x, 40);
  assertEquals(a, 4);
});


Deno.test("searchValueAny", () => {
  let a;
  const x = [10, 20, 20, 40, 40, 80];
  a = searchValueAny(x, 30);
  assertLess(a, 0);
  a = searchValueAny(x, 40);
  assertGreaterOrEqual(a, 3);
  assertLessOrEqual(a, 4);
});


Deno.test("searchClosestValue", () => {
  let a;
  const x = [10, 20, 20, 40, 40, 80];
  a = searchClosestValue(x, 30);
  assertEquals(a, 3);
  a = searchClosestValue(x, 40);
  assertEquals(a, 3);
  a = searchClosestValue(x, 50);
  assertEquals(a, 5);
});
// #endregion




// #region MERGE
// -------------

Deno.test("merge", () => {
  const x = [10, 20, 20, 40, 40, 80];
  const y = [20, 50, 70];
  const a = merge(x, y);
  assertEquals(a, [10, 20, 20, 20, 40, 40, 50, 70, 80]);
});


Deno.test("rangedMerge", () => {
  let a;
  const x = [10, 20, 20, 40, 40, 80];
  const y = [20, 50, 70];
  a = rangedMerge(x, 0, 3, y, 0, 3);
  assertEquals(a, [10, 20, 20, 20, 50, 70]);
  a = rangedMerge(x, 0, 2, x, 4, 6);
  assertEquals(a, [10, 20, 40, 80]);
});


Deno.test("mergeAll", () => {
  const x = [10, 20, 20, 40, 40, 80];
  const y = [20, 50, 70];
  const z = [30, 60, 90];
  const a = mergeAll([x, y, z]);
  assertEquals(a, [10, 20, 20, 20, 30, 40, 40, 50, 60, 70, 80, 90]);
});
// #endregion




// #region SET OPERATIONS
// ----------------------

Deno.test("isUnique", () => {
  let a;
  const x = [10, 20, 20, 40, 40, 80];
  a = isUnique(x);
  assertEquals(a, false);
  const y = [10, 20, 30, 40, 80]
  a = isUnique(y);
  assertEquals(a, true);
});


Deno.test("isDisjoint", () => {
  let a;
  const x = [10, 20, 20, 40, 40, 80];
  const y = [20, 50, 70];
  a = isDisjoint(x, y);
  assertEquals(a, false);
  const z = [30, 60, 90];
  a = isDisjoint(x, z);
  assertEquals(a, true);
});


Deno.test("unique", () => {
  const x = [10, 20, 20, 40, 40, 80];
  const a = unique(x);
  assertEquals(a, [10, 20, 40, 80]);
});


Deno.test("union", () => {
  const x = [10, 20, 20, 40, 40, 80];
  const y = [20, 50, 70];
  const a = union(x, y);
  assertEquals(a, [10, 20, 20, 40, 40, 50, 70, 80]);
});


Deno.test("intersection", () => {
  const x = [10, 20, 20, 40, 40, 80];
  const y = [20, 50, 80];
  const a = intersection(x, y);
  assertEquals(a, [20, 80]);
});


Deno.test("difference", () => {
  const x = [10, 20, 20, 40, 40, 80];
  const y = [20, 50, 80];
  const a = difference(x, y);
  assertEquals(a, [10, 20, 40, 40]);
});


Deno.test("symmetricDifference", () => {
  const x = [10, 20, 20, 40, 40, 80];
  const y = [20, 50, 80];
  const a = symmetricDifference(x, y);
  assertEquals(a, [10, 20, 40, 40, 50]);
});
// #endregion
