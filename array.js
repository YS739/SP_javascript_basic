// const arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr[3]);

// console.log(arr.length);

// console.log(arr[arr.length - 1]);

// ---------------------------------------
// arr.push(6);
// console.log(arr);

// arr.pop();
// console.log(arr);
// ---------------------------------------

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//-----------------------------------------

// for (const number of arr) {
//   console.log(number);
// }
//------------------------------------------

//퀴즈(내가 한 것)
const price = [2000, 3000, 1000, 5000, 4000, 10000, 6000, 7000, 8000, 9000];
for (i = 0; i < price.length; i++) {
  sum = sum(price[i]);
  avg = avg(price[i]);
}
console.log(sum, avg);

//수업 코드
const price = [2000, 3000, 1000, 5000, 4000, 10000, 6000, 7000, 8000, 9000];
let sum = 0;
for (const num of price) {
  sum += num;
}
const avg = sum / price.length;

console.log(`합계:${sum}, 평균:${avg}`);
