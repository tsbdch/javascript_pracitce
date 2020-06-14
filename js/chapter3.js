console.log('%c [JavaScript]thisについて学ぼう', 'color:red; font-size:1.5em');
console.log('3.apply とかについて学ぼう');

function greet() {
  const slicedArray = [].slice.call(arguments);
  const h1 = `Hi, ${this.name}`;
  console.log(slicedArray);
  console.log(h1);
}

const obj = { name: 'Tom' };
greet.call(obj, 1, 2, 3);

const arry = [1, 2, 3, 4];
console.log(Math.min.apply(null, arry));

const myBindObj = {
  id: 'bind',
  print() {
    console.log(this.id);
    setTimeout(function notBind() {
      // setTimeout のスコープである window の this を参照
      console.log(this);
    }, 500);
    setTimeout(function bind() {
      // this を myBindObj に bind
      console.log(this.id);
    }.bind(this), 1000);
  },
};

myBindObj.print();

const myArrowObj = {
  id: 'arrow',
  print() {
    setTimeout(() => {
      // スコープチェインをたどって myArrowObj を参照
      console.log(this.id);
    }, 1500);
  },
};

myArrowObj.print();
