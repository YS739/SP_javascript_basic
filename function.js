// function calculateAvg(price1, price2) {
//   const sum = price1 + price2;
//   console.log(`두 상품의 가격 총합은 ${sum}입니다.`);
//   const avg = sum / 2;
//   return avg;
// }

// const priceA = 1000;
// const priceB = 2000;
// const avg1 = calculateAvg(priceA, priceB);
// console.log(`A와 B의 평균은 ${avg1}입니다.`);

// const priceC = 2000;
// const priceD = 3000;
// const avg2 = calculateAvg(priceC, priceD);
// console.log(`C와 D의 평균은 ${avg2}입니다.`);

//퀴즈(내가 한 것)
function priceAVG(price1, price2, price3) {
  const sum = price1 + price2 + price3;
  const avg = sum / 3;
  return avg;
}

const priceA = 3000;
const priceB = 4000;
const priceC = 2000;
const avg1 = priceAVG(priceA, priceB, priceC);
console.log(`세 물건의 평균 가격은 ${avg1}입니다.`);

// 수업 코드
function priceAVG(price1, price2, price3) {
  const avg = (price1 + price2 + price3) / 3;
  return avg;
}

const priceA = 3000;
const priceB = 4000;
const priceC = 2000;
const avg = priceAVG(priceA, priceB, priceC);
console.log(`평균 가격: ${avg}`);
