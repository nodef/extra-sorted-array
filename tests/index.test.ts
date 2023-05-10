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
} from "../src";




// #region SEARCH VALUE
// --------------------

test("includes", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var a = includes(x, 30);
  expect(a).toBe(false);
  var a = includes(x, 40);
  expect(a).toBe(true);
});


test("hasValue", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var a = hasValue(x, 30);
  expect(a).toBe(false);
  var a = hasValue(x, 40);
  expect(a).toBe(true);
});


test("indexOf", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var a = indexOf(x, 30);
  expect(a).toBe(-1);
  var a = indexOf(x, 40);
  expect(a).toBe(3);
});


test("lastIndexOf", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var a = lastIndexOf(x, 30);
  expect(a).toBe(-1);
  var a = lastIndexOf(x, 40);
  expect(a).toBe(4);
});


test("searchValue", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var a = searchValue(x, 30);
  expect(a).toBeLessThan(0);
  var a = searchValue(x, 40);
  expect(a).toBe(3);
});


test("searchValueRight", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var a = searchValueRight(x, 30);
  expect(a).toBeLessThan(0);
  var a = searchValueRight(x, 40);
  expect(a).toBe(4);
});


test("searchValueAny", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var a = searchValueAny(x, 30);
  expect(a).toBeLessThan(0);
  var a = searchValueAny(x, 40);
  expect(a).toBeGreaterThanOrEqual(3);
  expect(a).toBeLessThanOrEqual(4);
});


test("searchClosestValue", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var a = searchClosestValue(x, 30);
  expect(a).toBe(3);
  var a = searchClosestValue(x, 40);
  expect(a).toBe(3);
  var a = searchClosestValue(x, 50);
  expect(a).toBe(5);
});
// #endregion




// #region MERGE
// -------------

test("merge", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var y = [20, 50, 70];
  var a = merge(x, y);
  expect(a).toEqual([10, 20, 20, 20, 40, 40, 50, 70, 80]);
});


test("rangedMerge", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var y = [20, 50, 70];
  var a = rangedMerge(x, 0, 3, y, 0, 3);
  expect(a).toEqual([10, 20, 20, 20, 50, 70]);
  var a = rangedMerge(x, 0, 2, x, 4, 6);
  expect(a).toEqual([10, 20, 40, 80]);
});


test("mergeAll", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var y = [20, 50, 70];
  var z = [30, 60, 90];
  var a = mergeAll([x, y, z]);
  expect(a).toEqual([10, 20, 20, 20, 30, 40, 40, 50, 60, 70, 80, 90]);
});
// #endregion




// #region SET OPERATIONS
// ----------------------

test("isUnique", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var a = isUnique(x);
  expect(a).toBe(false);
  var y = [10, 20, 30, 40, 80]
  var a = isUnique(y);
  expect(a).toBe(true);
});


test("isDisjoint", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var y = [20, 50, 70];
  var a = isDisjoint(x, y);
  expect(a).toBe(false);
  var z = [30, 60, 90];
  var a = isDisjoint(x, z);
  expect(a).toBe(true);
});


test("unique", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var a = unique(x);
  expect(a).toEqual([10, 20, 40, 80]);
});


test("union", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var y = [20, 50, 70];
  var a = union(x, y);
  expect(a).toEqual([10, 20, 20, 40, 40, 50, 70, 80]);
});


test("intersection", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var y = [20, 50, 80];
  var a = intersection(x, y);
  expect(a).toEqual([20, 80]);
});


test("difference", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var y = [20, 50, 80];
  var a = difference(x, y);
  expect(a).toEqual([10, 20, 40, 40]);
});


test("symmetricDifference", () => {
  var x = [10, 20, 20, 40, 40, 80];
  var y = [20, 50, 80];
  var a = symmetricDifference(x, y);
  expect(a).toEqual([10, 20, 40, 40, 50]);
});
// #endregion
