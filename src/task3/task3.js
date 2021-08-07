/*
  Реализовать функцию checkParentheses на чистом JS,
  которая проверяет на синтаксическую верность последовательность скобок ( (), {} и [] ).
  Функция возвразает false, если переданная строка содержит неправильную последовательность:

  const checkParentheses = (str) => {
   ...
  }

  console.log(checkParentheses('--()--')) // true
  console.log(checkParentheses('-a]--[')) // false
  console.log(checkParentheses('dsa{vsfs{ad')) // false
  console.log(checkParentheses('j78(g5b]uyg')) // false
  console.log(checkParentheses(',m{i987y}hj')) // true
  console.log(checkParentheses('dsa[3ed---:]::')) // true
*/

module.exports = function checkParentheses(str) {
  if (typeof str !== 'string')  {
    throw new TypeError(`Value must be a string, ${typeof str} given`)
  }

  const parentheses = "({[)}]";

  const counterSize = parentheses.length / 2;

  const counterArr = Array(Math.floor(counterSize)).fill(0);

  for (let char of str) {
    const index = parentheses.indexOf(char);

    if (index < 0) continue;

    const position = index % counterSize;

    counterArr[position] += index >= counterSize ? -1 : 1;

    if (counterArr[position] < 0) return false;
  }

  return counterArr.every((value) => value === 0);
}
