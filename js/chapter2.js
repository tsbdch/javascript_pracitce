// 2.this について学ぼう
// %c は それ以降の文字列にスタイルを充てるためのパラメータ
console.log('%c [JavaScript]thisについて学ぼう', 'color:red; font-size:1.5em');
console.log('2.thisについて学ぼう');

const myObj = {
  id: 'myObj',
  printId() {
    console.log(this.id);
  },
};

myObj.printId();

const sayFoo = function sayFoo() {
  console.log(this.foo);
};

const mySecondObj = {
  foo: "I'm in the secondObj",
  sayFoo,
};

mySecondObj.sayFoo();

function MyThirdObj(id) {
  this.id = id;
}

MyThirdObj.prototype.printId = function thirdCondole() {
  console.log(this.id);
};

const newInstance = new MyThirdObj(5);
newInstance.printId();

class MyClass {
  constructor(id) {
    this.id = id;
  }

  printId() {
    console.log(this.id);
  }
}

const newClassInstance = new MyClass(6);
newClassInstance.printId();

const outer = {
  id: 100,
  func1() {
    console.log(this.id);
  },
};

outer.func1();
