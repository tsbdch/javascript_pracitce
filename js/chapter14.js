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
};

// 冗長
//  function Japanese(first, last) {
//  this.last = last;
//  this.doSado = function() {
//    //茶道をする
//    console.log('do 茶道');
//  }
//};

//  call によるコンストラクタの継承
function Japanese(first, last) {
  Person.call(this, first, last);
  this.lang = 'ja';
}

//  setPrototypeOf による prototype の継承
Object.setPrototypeOf(Japanese.prototype, Person.prototype);

Person.prototype.introduce = function () {
  console.log(`My name is ${this.first} ${this.last}`);
}

Japanese.prototype.sayJapanese = function() {
  console.log(`こんにちは ${this.first} ${this.last}`)
}

let me = new Person('me', 'me');
let me1 = new Person('me1', 'me1');
let ja = new Japanese('j', 'p');

me.introduce();
me1.introduce();
console.log(ja.lang);
ja.introduce();
ja.sayJapanese();

//  class
class PersonClass {
  constructor(first, last){
    this.first = first;
    this.last = last;
  }

  introduce() {
    console.log(`Hello ${this.first} ${this.last}`);
  }

  //  constructor から直接呼び出す場合は static
  static sayHello(){
    console.log('こんにちは sayHello');
  }

  //  getter, setter

}

//  継承
class JapaneseClass extends PersonClass {
  constructor(first, last){
    super(first, last);
    this.lang = 'ja';
    this._age = 0;
  }

  sayJapanese() {
    console.log('日本語')
  }

  // getter, setter
  get age(){
    return this._age;
  }

  set age(value){
    this._age = value
  }

}

let jaclass = new JapaneseClass('山田', '太郎');
console.log(jaclass.lang);
jaclass.sayJapanese();
jaclass.introduce();
JapaneseClass.sayHello();

console.log(jaclass._age);
console.log(jaclass.age);
jaclass.age = 10;
console.log(jaclass._age)
console.log(jaclass.age)