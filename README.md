A [sorted array] is a collection of values, arranged in an order.<br>
📦 [Node.js](https://www.npmjs.com/package/extra-sorted-array),
🌐 [Web](https://www.npmjs.com/package/extra-sorted-array.web),
📜 [Files](https://unpkg.com/extra-sorted-array/),
📰 [Docs](https://nodef.github.io/extra-sorted-array/),
📘 [Wiki](https://github.com/nodef/extra-sorted-array/wiki/).

<br>


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

With this package, you can simplify the implementation of complex algorithms,
and be able to achieve your goals faster, regardless of your level of expertise.
Try it out today and discover how it can transform your development experience!
This package is available in *Node.js* and *Web* formats. To use it on the web,
simply use the `extra_sorted_array` global variable after loading with a
`<script>` tag from the [jsDelivr CDN].

> Stability: [Experimental](https://www.youtube.com/watch?v=L1j93RnIxEo).

[sorted array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
[jsDelivr CDN]: https://cdn.jsdelivr.net/npm/extra-sorted-array.web/index.js

<br>

```javascript
const xsortedArray = require('extra-sorted-array');
// import * as xsortedArray from "extra-sorted-array";
// import * as xsortedArray from "https://unpkg.com/extra-sorted-array/index.mjs"; (deno)

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

[![](https://img.youtube.com/vi/VnFLMIEZNG8/maxresdefault.jpg)](https://www.youtube.com/watch?v=VnFLMIEZNG8)<br>
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![Coverage Status](https://coveralls.io/repos/github/nodef/extra-sorted-array/badge.svg?branch=master)](https://coveralls.io/github/nodef/extra-sorted-array?branch=master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/31b3e3f490532d3bd3d3/test_coverage)](https://codeclimate.com/github/nodef/extra-sorted-array/test_coverage)
<!-- [![DOI](https://zenodo.org/badge/133759104.svg)](https://zenodo.org/badge/latestdoi/133759104) -->


[includes]: https://github.com/nodef/extra-sorted-array/wiki/includes
[hasValue]: https://github.com/nodef/extra-sorted-array/wiki/hasValue
[indexOf]: https://github.com/nodef/extra-sorted-array/wiki/indexOf
[lastIndexOf]: https://github.com/nodef/extra-sorted-array/wiki/lastIndexOf
[searchValue]: https://github.com/nodef/extra-sorted-array/wiki/searchValue
[searchValueRight]: https://github.com/nodef/extra-sorted-array/wiki/searchValueRight
[searchValueAny]: https://github.com/nodef/extra-sorted-array/wiki/searchValueAny
[searchClosestValue]: https://github.com/nodef/extra-sorted-array/wiki/searchClosestValue
[merge]: https://github.com/nodef/extra-sorted-array/wiki/merge
[rangedMerge]: https://github.com/nodef/extra-sorted-array/wiki/rangedMerge
[mergeAll]: https://github.com/nodef/extra-sorted-array/wiki/mergeAll
[isUnique]: https://github.com/nodef/extra-sorted-array/wiki/isUnique
[isDisjoint]: https://github.com/nodef/extra-sorted-array/wiki/isDisjoint
[unique]: https://github.com/nodef/extra-sorted-array/wiki/unique
[union]: https://github.com/nodef/extra-sorted-array/wiki/union
[intersection]: https://github.com/nodef/extra-sorted-array/wiki/intersection
[difference]: https://github.com/nodef/extra-sorted-array/wiki/difference
[symmetricDifference]: https://github.com/nodef/extra-sorted-array/wiki/symmetricDifference
