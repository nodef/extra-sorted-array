import {
  IDENTITY,
  COMPARE,
} from "extra-function";
import {
  CompareFunction,
  MapFunction,
} from "extra-array";




// #region RE-EXPORTS
// ==================

export {
  // TYPES
  Entries,
  IEntries,
  Lists,
  ILists,
  ReadFunction,
  CombineFunction,
  CompareFunction,
  ProcessFunction,
  TestFunction,
  MapFunction,
  ReduceFunction,
  EndFunction,
  // METHODS
  // GENERATE
  fromRange,
  sort as fromArray,
  sort as from,
  // CLONE
  shallowClone,
  shallowClone as clone,
  deepClone,
  // ABOUT
  isSorted as is,
  keys,
  ikeys,
  values,
  ivalues,
  entries,
  ientries,
  // INDEX
  index,
  indexRange,
  // LENGTH
  isEmpty,
  length,
  length as size,
  clear$,
  // GET/SET
  get,
  get as at,
  getAll,
  getPath,
  hasPath,
  remove,
  remove$,
  removePath$,
  // COMPARE
  isEqual,
  compare,
  // PART
  head,
  head as front,
  head as first,
  tail,
  init,
  last,
  last as back,
  middle,
  slice,
  slice$,
  // SEARCH VALUE
  searchAdjacentDuplicateValue,
  searchAdjacentDuplicateValue as searchAdjacentDuplicate,
  searchMismatchedValue,
  searchMismatchedValue as searchMismatch,
  // ARRANGEMENTS
  hasPrefix,
  hasSuffix,
  hasInfix,
  hasSubsequence,
  hasPermutation,  // PERF: Can be optimized
  prefixes,
  iprefixes,
  suffixes,
  isuffixes,
  infixes,
  iinfixes,
  subsequences,
  isubsequences,
  searchInfix,
  searchInfixRight,
  searchInfixAll,
  searchSubsequence,
  // RANDOM ARRANGEMENTS
  randomValue,
  randomPrefix,
  randomSuffix,
  randomInfix,
  randomSubsequence,
  // FIND
  find,
  findRight,
  // TAKE/DROP
  take,
  take as left,
  takeRight,
  takeRight as right,
  takeWhile,
  takeWhileRight,
  drop,
  dropRight,
  dropWhile,
  dropWhileRight,
  // SCAN
  scanWhile,
  scanWhileRight,
  scanUntil,
  scanUntilRight,
  // SEARCH
  search,
  search as findIndex,
  searchRight,
  searchRight as findLastIndex,
  searchAll,
  // FUNCTIONAL
  forEach,
  some,
  every,
  reduce,
  reduceRight,
  filter,
  filter$,
  filterAt,
  reject,
  reject$,
  rejectAt,
  // COUNT/PARTITION
  count,
  countEach,
  partition,
  partitionEach,
  partitionEach as groupToMap,
  // SPLITS
  split,
  splitAt,
  cut,
  cutRight,
  cutAt,
  cutAtRight,
  group,
  chunk,
  // CONCAT/JOIN
  join,
  // Set operations
} from "extra-array";
// #endregion




// #region METHODS
// ===============

// #region SEARCH VALUE
// --------------------

/**
 * Check if sorted array has a value using binary search.
 * @param x a sorted array
 * @param v search value
 * @param i begin index [0]
 * @returns true if value is found
 */
export function includes<T>(x: T[], v: T, i: number=0): boolean {
  return searchValueAny(x.slice(i), v)>=0;
}


/**
 * Check if sorted array has a value using binary search.
 * @param x a sorted array
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns true if value is found
 */
export function hasValue<T, U=T>(x: T[], v: T, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  return searchValueAny(x, v, fc, fm)>=0;
}


/**
 * Find first index of value using binary search.
 * @param x a sorted array
 * @param v search value
 * @param i begin index [0]
 * @returns index of value, or -1
 */
export function indexOf<T>(x: T[], v: T, i: number): number {
  return Math.max(searchValue(x.slice(i), v), -1);
}


/**
 * Find last index of value using binary search.
 * @param x a sorted array
 * @param v search value
 * @param i begin index [|x|-1]
 * @returns last index of value, or -1
 */
export function lastIndexOf<T>(x: T[], v: T, i: number): number {
  return Math.max(searchValueRight(x.slice(i), v), -1);
}


/**
 * Find first index of value using binary search.
 * @param x a sorted array
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns first index of value, or ~(index of closest value)
 */
export function searchValue<T, U=T>(x: T[], v: T, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): number {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var w = fm(v, 0, null);
  for (var i=0, I=x.length; i<I;) {
    var m  = i+I >>> 1;
    var wx = fm(x[m], m, x);
    var c  = fc(wx, w);
    if (c<0) i = m+1;
    else     I = m;
  }
  return i>=x.length || fc(fm(x[i], i, x), w)!==0? ~i : i;
}


/**
 * Find last index of a value using binary search.
 * @param x a sorted array
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns last index of value, or ~(index of closest value)
 */
export function searchValueRight<T, U=T>(x: T[], v: T, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): number {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var w  = fm(v, 0, null);
  for (var i=0, I=x.length; i<I;) {
    var m  = i+I >>> 1;
    var wx = fm(x[m], m, x);
    var c  = fc(wx, w);
    if (c<=0) i = m+1;
    else      I = m;
  }
  return i<=0 || fc(fm(x[i-1], i-1, x), w)!==0? ~i : i-1;
}


/**
 * Find any index of a value using binary search.
 * @param x a sorted array
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns index of value, or ~(index of closest value)
 */
export function searchValueAny<T, U=T>(x: T[], v: T, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): number {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var w  = fm(v, 0, null);
  for (var i=0, I=x.length; i<I;) {
    var m  = i+I >>> 1;
    var wx = fm(x[m], m, x);
    var c  = fc(wx, w);
    if (c<0)      i = m+1;
    else if (c>0) I = m;
    else return m;
  }
  return ~i;
}


/**
 * Find index of closest value using binary search.
 * @param x a sorted array
 * @param v search value
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns index of closest value
 */
export function searchClosestValue<T, U=T>(x: T[], v: T, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): number {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var w  = fm(v, 0, null);
  for (var i=0, I=x.length; i<I;) {
    var m  = i+I >>> 1;
    var wx = fm(x[m], m ,x);
    var c  = fc(wx, w);
    if (c<0)      i = m+1;
    else if (c>0) I = m;
    else return m;
  }
  return i;
}


// TODO: searchValueAll()
// #endregion




// #region MANIPULATION
// --------------------

// TODO: push()?
// TODO: push$()?
// TODO: pop()?
// TODO: pop$()?
// TODO: shift()?
// TODO: shift$()?
// TODO: unshift()?
// TODO: unshift$()?
// #endregion




// #region MERGE
// -------------

/**
 * Merge values from two sorted arrays.
 * @param x an array
 * @param y another array
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x & y | vᵢ ≤ vᵢ₊₁ ∀ i ∈ x & y
 */
export function merge<T, U=T>(x: T[], y: T[], fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): T[] {
  return rangedMerge(x, 0, x.length, y, 0, y.length, fc, fm);
}


/**
 * Merge ranges of values from two sorted arrays.
 * @param x an array
 * @param i begin index in x
 * @param I end index in x (exclusive)
 * @param y another array
 * @param j begin index in y
 * @param J end index in y (exclusive)
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x[i:I] & y[j:J] | vᵢ ≤ vᵢ₊₁ ∀ i ∈ x[i:I] & y[j:J]
 */
export function rangedMerge<T, U=T>(x: T[], i: number, I: number, y: T[], j: number, J: number, fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): T[] {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var a  = [];
  while (i<I && j<J) {
    var wx = fm(x[i], i, x);
    var wy = fm(y[j], j, y);
    var c  = fc(wx, wy);
    if (c<=0) a.push(x[i++]);
    else      a.push(y[j++]);
  }
  while (i<I) a.push(x[i++]);
  while (j<J) a.push(y[j++]);
  return a;
}


/**
 * Merge values from sorted arrays.
 * @param xs arrays
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x₀ & x₁ & ... | vᵢ ≤ vᵢ₊₁ ∀ i ∈ x₀ & x₁ & ...
 */
export function mergeAll<T, U=T>(xs: T[][], fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): T[] {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  // Merge in a binary tree fashion.
  while (xs.length>1) {
    var ys = [];
    for (var i=0, I=xs.length; i+1<I; i+=2)
      ys.push(merge(xs[i], xs[i+1], fc, fm));
    if (i<I) ys.push(xs[i]);
    xs = ys;
  }
  return xs[0] || [];
}
export {mergeAll as concat};
// #endregion




// #region SET OPERATIONS
// ----------------------

/**
 * Examine if there are no duplicate values.
 * @param x a sorted array
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns ∀ vᵢ, vⱼ ∈ x, is vᵢ ≠ vⱼ?
 */
export function isUnique<T, U=T>(x: T[], fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  for (var i=1, I=x.length; i<I; ++i) {
    var wx = fm(x[i-1], i-1, x);
    var wy = fm(x[i], i, x);
    if (fc(wx, wy)===0) return false;
  }
  return true;
}


/**
 * Examine if arrays have no value in common.
 * @param x a sorted array
 * @param y another sorted array
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x ∩ y = Φ?
 */
export function isDisjoint<T, U=T>(x: T[], y: T[], fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): boolean {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  for (var i=0, j=0, I=x.length, J=y.length; i<I && j<J;) {
    var wx = fm(x[i], i, x);
    var wy = fm(y[j], j, y);
    var c  = fc(wx, wy);
    if (c<0)      ++i;
    else if (c>0) ++j;
    else return false;
  }
  return true;
}


/**
 * Remove duplicate values.
 * @param x a sorted array
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns v₀, v₁, ... | vᵢ ∈ x; vᵢ ≠ vⱼ ∀ i, j
 */
export function unique<T, U=T>(x: T[], fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): T[] {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var X  = x.length;
  if (X<=1) return x.slice();
  var a  = [x[0]];
  for (var i=1; i<X; ++i) {
    var wx = fm(x[i-1], i-1, x);
    var wy = fm(x[i], i, x);
    if (fc(wx, wy)!==0) a.push(x[i]);
  }
  return a;
}


/**
 * Obtain values present in any sorted array.
 * @param x a sorted array
 * @param y another sorted array
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x ∪ y = \{v | v ∈ x or v ∈ y\}
 */
export function union<T, U=T>(x: T[], y: T[], fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): T[] {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var a = [];
  for (var i=0, j=0, I=x.length, J=y.length; i<I && j<J;) {
    var wx = fm(x[i], i, x);
    var wy = fm(y[j], j, y);
    var c  = fc(wx, wy);
    if (c<0)      a.push(x[i++]);
    else if (c>0) a.push(y[j++]);
    else { a.push(x[i++]); ++j; }
  }
  while (i<I) a.push(x[i++]);
  while (j<J) a.push(y[j++]);
  return a;
}


// TODO: union$()
// It requires a queue to avoid extra memory usage.


/**
 * Obtain values present in both sorted arrays.
 * @param x a sorted array
 * @param y another sorted array
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x ∩ y = \{v | v ∈ x, v ∈ y\}
 */
export function intersection<T, U=T>(x: T[], y: T[], fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): T[] {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var a = [];
  for (var i=0, j=0, I=x.length, J=y.length; i<I && j<J;) {
    var wx = fm(x[i], i, x);
    var wy = fm(y[j], j, y);
    var c  = fc(wx, wy);
    if (c<0)      ++i;
    else if (c>0) ++j;
    else { a.push(x[i++]); ++j; }
  }
  return a;
}


/**
 * Obtain values not present in another sorted array.
 * @param x a sorted array
 * @param y another sorted array
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x - y = \{v | v ∈ x, v ∉ y\}
 */
export function difference<T, U=T>(x: T[], y: T[], fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): T[] {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var a = [];
  for (var i=0, j=0, I=x.length, J=y.length; i<I && j<J;) {
    var wx = fm(x[i], i, x);
    var wy = fm(y[j], j, y);
    var c  = fc(wx, wy);
    if (c<0)      a.push(x[i++]);
    else if (c>0) ++j;
    else { ++i; ++j; }
  }
  while (i<I) a.push(x[i++]);
  return a;
}


/**
 * Obtain values present in either sorted array but not both.
 * @param x a sorted array
 * @param y another sorted array
 * @param fc compare function (a, b)
 * @param fm map function (v, i, x)
 * @returns x-y ∪ y-x
 */
export function symmetricDifference<T, U=T>(x: T[], y: T[], fc: CompareFunction<T|U> | null=null, fm: MapFunction<T, T|U> | null=null): T[] {
  var fc = fc || COMPARE;
  var fm = fm || IDENTITY;
  var a = [];
  for (var i=0, j=0, I=x.length, J=y.length; i<I && j<J;) {
    var wx = fm(x[i], i, x);
    var wy = fm(y[j], j, y);
    var c  = fc(wx, wy);
    if (c<0)      a.push(x[i++]);
    else if (c>0) a.push(y[j++]);
    else { ++i; ++j; }
  }
  while (i<I) a.push(x[i++]);
  while (j<J) a.push(y[j++]);
  return a;
}
// #endregion
// #endregion
