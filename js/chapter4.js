/* eslint-disable */
console.log('%c [JavaScript]thisについて学ぼう', 'color:red; font-size:1.5em');
console.log('4.arrow function について学ぼう');

// normal function
function timesTwo(i) {
  return i * 2;
}

const res = timesTwo(2);
console.log(res);

// arrow function
const arrowRes = (i) => i * 2;
console.log(arrowRes(6));

/**
* this bind
*/

/* normal func */
let normalFunc;
normalFunc = {
  id: 43,
  counter: function() {
    console.log(this.id);
//    window.setTimeout(function () {
//      console.log(this.id);
//    }.bind(this), 100);
  },
};

normalFunc.counter();

/* arrow func */
window.id = 'window'
let arrowFunc;
arrowFunc = {
  id: 'arrow',
  counter: function() {
    console.log(this.id);
//    window.setTimeout(() => {
//      console.log(this.id);
//    }, 1500);
  },
};

arrowFunc.counter();

/* practice */
window.me = 'global';
outer = function() {
  const me = 'outer'; //lexical scope
  return {
    me: 'inner',
    // arrow
    sayArrow: () => {
      console.log(this.me);
    },
    sayFunc: function() {
      console.log(this.me);
    },
    sayOuter: function() {
      console.log(me);
    },
  };
};

outer().sayArrow();
outer().sayFunc();
outer().sayOuter();