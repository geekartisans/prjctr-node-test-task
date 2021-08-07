/*
  Задание №1
  Реализовать функцию groupBy на чистом JS,
  которая будет группировать массив по определённой функции,
  переданной вторым аргументом:

  const groupBy = (array, func) => {
    ...
  }

  console.log(groupBy([3.6, 3.7, 6.4, 8.9], Math.floor)) // { '3': [3.6, 3.7], '6': [6.4], '8': [8.9] }
*/

module.exports = function groupBy(arr, callable) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`First argument must be an array, ${typeof arr} given`);
  }

  if (typeof callable !== "function") {
    throw new TypeError(
      `Second argument must be a function, ${typeof callable} given`
    );
  }

  return arr.reduce((reduction, current) => {
    const result = callable(current);

    if (!reduction[result]) {
      reduction[result] = [current];
    } else {
      reduction[result].push(current);
    }

    return reduction;
  }, {});
};
