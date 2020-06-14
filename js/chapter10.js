/* eslint-disable */
console.log('%c [JavaScript]thisについて学ぼう', 'color:red; font-size:1.5em');
console.log('10. 非同期');

/**
 * callback
 */

function wait(callback, num){
  setTimeout(() => {
    console.log(num);
    callback(num);
  }, 100);
}

wait((num) => {
  num++
  wait(num => {
    num++;
    wait(num => {
      num++
    }, num)
  }, num);
}, 0);

/**
 * promise
 */

function wait2(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Promise' + num);
      if(num === 2){
        reject(num);
      } else {
        resolve(num);
      }
    }, num);
  });
}

wait2(0).then((num) => {
  num++;
  return wait2(num);
}).then(num => {
  num++;
  return wait2(num);
}).catch(num => {
  num++;
  console.error(num, 'error');
})

/**
 * promise all
 */

 Promise.all([wait2(1000), wait2(1500), wait2(2000)]).then(nums => {
   console.log(nums);
 })

 Promise.race([wait2(1000), wait2(1500), wait2(2000)]).then(nums => {
   console.log(nums + 1);
 })

 /**
  * await / async
  */

async function init() {
  let num = 0
  num = await wait2(num);
  num++;
  num = await wait2(num);
  num++;
  return num;
}

init();