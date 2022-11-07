//문자열 붙이기
// console.log('My'+'car')
// console.log('1'+2)
// console.log(1+2)

// const shoesPrice = 20000
// console.log('이 신발의 가격은 '+shoesPrice+'원입니다.')
// console.log(`이 신발의 가격은 ${shoesPrice}원입니다.`)

// 산술연산자
// console.log(2+1)
// console.log(2-1)
// console.log(2*3)
// console.log(4/2)
// console.log(10%3)
// console.log(10**2)

//증감연산자
// let count = 1
// const preCount = ++count
// console.log(`count:${count}, preCount:${preCount}`)

// let count = 1
// const postCount = count++
// console.log(`count:${count}, postCount:${postCount}`)

// 대입 연산자
// const shirtsPrice = 100000
// const pantsPrice = 80000
// let totalPrice = 0

// totalPrice += shirtsPrice
// console.log(totalPrice)

// totalPrice += pantsPrice
// console.log(totalPrice)

// totalPrice -= shirtsPrice
// console.log(totalPrice)

//비교연산자
// console.log(1 < 2);
// console.log(1 <= 2);
// console.log(1 > 2);
// console.log(1 >= 2);

//논리연산자
// let isOnsale = true;
// let isDiscountItem = true;
// console.log(isOnsale && isDiscountItem);
// console.log(isOnsale || isDiscountItem);

// isOnsale = false;
// console.log(isOnsale && isDiscountItem);
// console.log(isOnsale || isDiscountItem);

// isDiscountItem = false;
// console.log(isOnsale && isDiscountItem);
// console.log(isOnsale || isDiscountItem);

// console.log(!isDiscountItem);

//일치연산자
// console.log(1 === 1);
// console.log(1 === 2);
// console.log("Javascript" === "Javascript");
// console.log("Javascript" === "javascript");

// 퀴즈(내가 푼 것)
const shirtsPrice = 30000;
const pantsPrice = 50000;
let totalPrice = shirtsPrice + pantsPrice;

totalPrice -= totalPrice * 0.2;
console.log(`총 ${totalPrice}원에 물건을 구입합니다`);

// 수업 코드
const shirtsPrice = 30000;
const pantsPrice = 50000;
const totalPrice = shirtsPrice + pantsPrice;
console.log(`총 ${totalPrice * 0.8}원에 물건을 구입합니다`);
