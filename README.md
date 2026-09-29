A [sorted array] is a collection of values, arranged in an order.<br>

▌
📦 [JSR](https://jsr.io/@nodef/extra-sorted-array),
📦 [NPM](https://www.npmjs.com/package/extra-sorted-array),
📰 [Docs](https://jsr.io/@nodef/extra-sorted-array/doc).

This package includes comprehensive set of functions that operate on a sorted
array with which you can **search a value** using binary search, **merge**
multiple sorted arrays, or perform **set operations** upon it.

We use a consistent naming scheme that helps you quickly identify the functions
you need. All functions except `from*()` take array as 1st parameter. Some
functions operate on a specified range in the array and are called `ranged*()`,
such as `rangedMerge()`. Functions like `slice()` are pure and do not modify the
array itself, while functions like `slice$()` *do modify (update)* the array
itself. Some functions accept a map function in addition to a compare function.
Further, functions which return an iterable instead of an array are prefixed
with `i`, such as `isubsequences()`. We borrow some names from other programming
languages such as *Haskell*, *Python*, *Java*, and *Processing*.

[sorted array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

<br>

```javascript
import * as xsortedArray from "jsr:@nodef/extra-sorted-array";

var x = [10, 20, 20, 40, 40, 80];
xsortedArray.searchValue(x, 40);
// → 3

var x = [10, 20, 20, 40, 40, 80];
var y = [20, 50, 70];
xsortedArray.merge(x, y);
// → [ 10, 20, 20, 20, 40, 40, 50, 70, 80 ]

var x = [10, 20, 20, 40, 40, 80];
var y = [20, 50, 70];
var z = [30, 60, 90];
xsortedArray.mergeAll([x, y, z]);
// → [ 10, 20, 20, 20, 30, 40, 40, 50, 60, 70, 80, 90 ]

var x = [10, 20, 20, 40, 40, 80];
var y = [20, 50, 70];
xsortedArray.isDisjoint(x, y);
// → false

var x = [10, 20, 20, 40, 40, 80];
var y = [20, 50, 80];
xsortedArray.intersection(x, y);
// → [ 20, 80 ]
```

<br>
<br>


## Index

| Property | Description |
|  ----  |  ----  |
| [includes] | Check if sorted array has a value using binary search. |
| [hasValue] | Check if sorted array has a value using binary search. |
| [indexOf] | Find first index of value using binary search. |
| [lastIndexOf] | Find last index of value using binary search. |
| [searchValue] | Find first index of value using binary search. |
| [searchValueRight] | Find last index of a value using binary search. |
| [searchValueAny] | Find any index of a value using binary search. |
| [searchClosestValue] | Find index of closest value using binary search. |
|  |  |
| [merge] | Merge values from two sorted arrays. |
| [mergeAll] | Merge values from sorted arrays. |
|  |  |
| [isUnique] | Examine if there are no duplicate values. |
| [isDisjoint] | Examine if arrays have no value in common. |
| [unique] | Remove duplicate values. |
| [union] | Obtain values present in any sorted array. |
| [intersection] | Obtain values present in both sorted arrays. |
| [difference] | Obtain values not present in another sorted array. |
| [symmetricDifference] | Obtain values present in either sorted array but not both. |


<br>
<br>


## References

- [binarysearch - npm : Ryan Day](https://www.npmjs.com/package/binarysearch)
- [binary-sorted-array - npm : Michal Iwanow](https://www.npmjs.com/package/binary-sorted-array)
- [How to add region in java script file, visual studio](https://stackoverflow.com/a/51550649/1413259)

<br>
<br>

[![](https://raw.githubusercontent.com/qb40/designs/gh-pages/0/image/11.png)](https://wolfram77.github.io)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/extra-sorted-array)


[includes]: https://jsr.io/@nodef/extra-sorted-array/doc/~/includes
[hasValue]: https://jsr.io/@nodef/extra-sorted-array/doc/~/hasValue
[indexOf]: https://jsr.io/@nodef/extra-sorted-array/doc/~/indexOf
[lastIndexOf]: https://jsr.io/@nodef/extra-sorted-array/doc/~/lastIndexOf
[searchValue]: https://jsr.io/@nodef/extra-sorted-array/doc/~/searchValue
[searchValueRight]: https://jsr.io/@nodef/extra-sorted-array/doc/~/searchValueRight
[searchValueAny]: https://jsr.io/@nodef/extra-sorted-array/doc/~/searchValueAny
[searchClosestValue]: https://jsr.io/@nodef/extra-sorted-array/doc/~/searchClosestValue
[merge]: https://jsr.io/@nodef/extra-sorted-array/doc/~/merge
[rangedMerge]: https://jsr.io/@nodef/extra-sorted-array/doc/~/rangedMerge
[mergeAll]: https://jsr.io/@nodef/extra-sorted-array/doc/~/mergeAll
[isUnique]: https://jsr.io/@nodef/extra-sorted-array/doc/~/isUnique
[isDisjoint]: https://jsr.io/@nodef/extra-sorted-array/doc/~/isDisjoint
[unique]: https://jsr.io/@nodef/extra-sorted-array/doc/~/unique
[union]: https://jsr.io/@nodef/extra-sorted-array/doc/~/union
[intersection]: https://jsr.io/@nodef/extra-sorted-array/doc/~/intersection
[difference]: https://jsr.io/@nodef/extra-sorted-array/doc/~/difference
[symmetricDifference]: https://jsr.io/@nodef/extra-sorted-array/doc/~/symmetricDifference
