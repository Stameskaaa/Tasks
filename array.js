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

function myIndexOf(arr, item, from = 0) {
  from = from < 0 ? Math.max(0, length + from) : Math.min(from, length);

  if (!Array.isArray(arr)) return null;
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
}

const arr = [6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function myIncludes(arr, item, from = 0) {
  if (!Array.isArray(arr)) return false;
  from = from < 0 ? Math.max(0, length + from) : Math.min(from, length);

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item || (Number.isNaN(item) && Number.isNaN(arr[i]))) return true;
  } // только NaN не равен самому себе
  return false;
}
