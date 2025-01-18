function sumNumKeys(startObject) {
  const resultArr = [];

  deepCheck(startObject);
  function deepCheck(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'number') {
          resultArr.push([key, obj[key]]);
        }
        if (typeof obj[key] === 'object') {
          deepCheck(obj[key]);
        }
      }
    }
  }

  return resultArr.sort((a, b) => b[1] - a[1]).map(([key]) => key);
}
