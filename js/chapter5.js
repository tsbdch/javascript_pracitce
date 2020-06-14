console.log('%c [JavaScript]thisについて学ぼう', 'color:red; font-size:1.5em');
console.log('5. クロージャについて学ぼう');

const increment = (() => {
  let counter = 1;
  return () => {
    counter += 1;
    console.log(counter);
  };
})();

increment(); // 1
increment(); // 2
increment(); // 3

function addStringFactory(tail) {
  return function(str) {
    return str + tail;
  };
}

const addAs = addStringFactory('AAAAA');
const addBs = addStringFactory('BBBBB');

let str = 'Tom';
str = addAs(str);
str = addBs(str);
console.log(str);
