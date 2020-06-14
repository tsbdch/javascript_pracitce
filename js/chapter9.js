/* eslint-disable */
console.log('%c [JavaScript]thisについて学ぼう', 'color:red; font-size:1.5em');
console.log('9. ループ');

const data = [1, 4, 2, 5, 3];
const fruits = {
  banana: 'バナナ',
  apple: 'リンゴ',
  orange: 'オレンジ',
}

Object.prototype.additionalFn = function(){};

for(let i = 0; i < data.length; i++){
  console.log(i, data[i]);
}

const keyFruits = Object.keys(fruits);
for(let i = 0; i < keyFruits.length; i++){
  console.log(i, fruits[keyFruits[i]]);
}

for(let i in fruits){
  if(fruits.hasOwnProperty(i)){
    console.log(i, fruits[i]);
  };
};

for(let i of data){
  console.log(i);
};

for(let i of keyFruits) {
  console.log(i, fruits[i])
}

const entriesFruits = Object.entries(fruits);
console.log(entriesFruits);
for(let [k, v] of entriesFruits){
  console.log(k, v);
}

data.forEach((value, index, array) => {
  console.log(value, index, array);
});

const newData = data.map((value, index, array) => {
  return value * 2
});

console.log('data', data);
console.log('newData', newData);

const newFruits = Object.keys(fruits).map((value) => {
  return value + 'add';
});

console.log(newFruits);

const filterData = data.filter((value) => {
  return value !== 1;
});

console.log('filterData', filterData);

const reduceData = data.reduce((accu, curr) => {
  console.log(accu, curr);
  return accu + curr;
})

console.log(reduceData);

const sortData = data.sort((a, b) => {
  console.log(a, b);
  return a - b;
});

console.log(data);
console.log(sortData);
