/*
  Задание №2

  Реализовать функцию invert на чистом JS,
  которая будет менять ключи и значения объектов местами:

  const invert = (obj) => {
    ...
  }

  console.log(invert({ 'a': 'some', 'b': 'object', 'c': 1 })) // { 'some': 'a', 'object': 'b', '1': 'c' }
*/

module.exports = function invert(object) {
  const type = typeof object;

  if (type !== "object") {
    throw new TypeError(`Argument must be an object, ${type} given`);
  }

  if (object === null) {
    throw new TypeError(`Argument shouldn't be a null`);
  }

  const result = {};

  for (let key in object) {
    const value = object[key];

    result[value] = key;
  }

  return result;
};
