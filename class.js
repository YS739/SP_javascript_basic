// class Notebook {
//   constructor(name, price, company) {
//     this.name = name;
//     this.price = price;
//     this.company = company;
//   }
// }

// const notebook1 = new Notebook("Macbook", 2000000, "Apple");
// console.log(notebook1);
// console.log(notebook1.name);
// console.log(notebook1.price);
// console.log(notebook1.company);

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   printInfo() {
//     console.log(`name: ${this.name}, price: ${this.price}`);
//   }
// }

// const notebook = new Product("Macbook", 2000000);

// notebook.printInfo();

//object literal
// const computer = {
//   name: "Macbook",
//   price: 2000000,
//   printInfo: function () {
//     console.log(`name: ${this.name}, price: ${this.price}`);
//   },
// };

// computer.printInfo();

//퀴즈(내가 한 것) = 수업 코드
class Shopping {
  constructor(color, size, price) {
    this.color = color;
    this.size = size;
    this.price = price;
  }
  printInfo() {
    console.log(`color:${this.color}, size:${this.size}, price:${this.price}`);
  }
}

const clothes = new Shopping("red", "M", 50000);
clothes.printInfo();

//수업 코드
