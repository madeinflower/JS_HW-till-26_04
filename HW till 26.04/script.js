// Задание 1:
// 1) В программе объявлена переменная list которая 
// содержит массив чисел 
// Используя цикл посчитайте сумму чисел и выведите их в консоль 
// const list = [12, 4, 32, 5, 43]
// const list = [12, 4, 32, 5, 43];
// let sum = 0;

// for (let i = 0; i < list.length; i++) {
//   sum += list[i];
// }

// console.log(sum);

// // Задание 2:
// // В программе объявлена переменная list1, представляющая массив положительных и 
// // отрицательных численных значений. Используя цикл, выведите в консоль 
// // сумму положительных чисел

// const list1 = [12, 4, -55, 32, -12, -3, 5, 43]
// const list1 = [12, 4, -55, 32, -12, -3, 5, 43];
// let sum = 0;

// for (let i = 0; i < list1.length; i++) {
//   if (list1[i] > 0) {
//     sum += list1[i];
//   }
// }

// console.log(sum);

// Задание 3:

const paragraphs = document.getElementsByTagName('p');
const texts = [];

for (let i = 0; i < paragraphs.length; i++) {
    texts.push(paragraphs[i].textContent);
  }
  
