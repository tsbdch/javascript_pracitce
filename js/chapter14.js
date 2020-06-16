/* eslint-disable */
console.log('%c [JavaScript]thisについて学ぼう', 'color:red; font-size:1.5em');
console.log('14. オブジェクト');

function factoryPerson(first, last) {
  let person = {first, last};
  return person;
}

// constructor 関数
function Person(first, last) {
  this.first = first;
  this.last = last;
  this.introduce = function () {
    console.log('object prototype');
  }
};

Person.prototype.introduce = function () {
  console.log(`My name is ${this.first} ${this.last}`);
}

let me = new Person('me', 'me');
let me1 = new Person('me1', 'me1');

me1.__proto__.introduce = function () {
  console.log("I don't want to introduce myself");
}

me.introduce();
me1.introduce();

