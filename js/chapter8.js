/* eslint-disable */
console.log('%c [JavaScript]thisについて学ぼう', 'color:red; font-size:1.5em');
console.log('8. タグ付きテンプレートリテラル');

const name = 'John';
const str = `Hello\n${name}`;

console.log(str);

function b(strings, ...values) {
  console.log(strings);
  console.log(values);
  return strings.reduce((accu, str, i) => {
    let val = values[i] ? `<b>${values[i]}</b>` : '';
    return `${accu}${str}${val}`;
  }, '');
}

const str1 = 'Bob';
const str2 = 'Tom';
const result = b`${str1} and ${str2}`;
console.log(result);

