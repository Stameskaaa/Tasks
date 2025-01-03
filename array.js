// mySlice(arr, [start], [end])
// myIndexOf(arr, item, from)
// myIncludes(arr, item, from)

function mySlice(arr, start, end) {
  const resultArr = [];
  const length = arr.length;

  if (!Array.isArray(arr)) return null;

  start = start < 0 ? Math.max(length + start, 0) : Math.max(start, 0);
  end = typeof end === 'undefined' ? length : end < 0 ? length + end : Math.min(end, length);

  for (let i = start; i < end; i++) {
    resultArr.push(arr[i]);
  }

  return resultArr;
}
