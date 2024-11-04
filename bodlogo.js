// [favoriteColors] гэсэн array үүсгээд 5 дуртай өнгийг оруулна. Дараа нь гурав
// дахь өнгийг өөрчилж, шинэчилсэн array - ыг хэвлэ.
// [levelsCompleted] гэсэн array үүсгээд тоглоомын түвшин давсан эсэхээ boolean
// утгууд оруул.Хамгийн төгсгөлд нь шинээр true гэсэн утга өгч, шинэчилсэн array
// - ыг хэвлэ.
// [destinations] array үүсгээд очихыг хүссэн 5 газрыг бич.Эхний газрыг
// устгаад шинэчилсэн array - ыг хэвлэ.Дараа нь хамгийн эхэнд нь “New York” гэсэн
// элемент нэмээд  шинэчилсэн array - ыг хэвлэ.
// ages гэсэн array зарлаад 18, 21, 22, 20, 23, 36, 79, гэсэн утгуудыг оноож
// тус array - д байгаа бүх тоог 5 - аар нэмэгдүүл.шинэчилсэн array - ыг хэвлэ.
// [numbers] гэсэн array зарлаад 15ш тоо оруул.
// Дээрх array доторх тоонуудын нийлбэрийг ол.
// Дээрх аrray - ийн хамгийн их тоог ол.
// Дээрх аrray - ийн хамгийн бага тоог ол.
// Дээрх аrray - ийн эхэнд дурын 1 тоог нэм.
// Дээрх аrray - ийн төгсгөлд дурын 1 тоог нэм.
// Дээрх array доторх тоонуудын тэгш болон сондгой тоо тус тус хэд байгааг ол.
// Дээрх олсон утгуудаа хэвлэж харуулаарай.

// let favoriteColors = ["red", "orange", "yellow", "blue", "black"];
// // console.log(favoriteColors);
// const favoriteColor3 = favoriteColors.slice(2, 3);
// console.log("new", favoriteColor3);

// let levelsCompleted = [false, true];
// const i = levelsCompleted[(0, 1)];
// levelsCompleted.push(true);
// console.log(i);

// let destinations = ["Ulaanbaatar", "Tokyo", "Shanghai", "Soul", "Paris"];
// const a = destinations.slice(1, 5);
// a.unshift("New York");
// console.log(a);

// let ages = [18, 21, 22, 20, 23, 36, 79];
// console.log(ages);
// let s = 0;
// while (s <= ages.length) {
//   ages[s] = ages[s] + 5;
//   s++;
// }
// console.log(ages);

// let number = [11, 22, 33, 44, 55, 66, 77, 88, 99, 12, 13, 14, 15, 16, 17];
// let sum = 0;
// let i = 0;
// while ((i = number.length)) {
//   sum = number[i] + sum;
//   i++;
// }
// console.log("niilber", sum);
console.log("my-my-my-my-my");
// console.log("1------------------------------------------");
// let n = 5,
//   gap = "";
// for (let i = 0; i < n; i++) {
//   for (let a = 0; a < n; a++) {
//     gap += "* ";
//   }
//   console.log(gap);
//   gap = "";
// }
// console.log("2-----------------------------------------");
// for (i = 0; i < n; i++) {
//   gap = gap + "*";
//   console.log(gap);
//   gap += " ";
// }
// console.log("3-----------------------------------------");
// for (i = 0; i > n; i++) {
//   for (q = 0; q < n; q++) {
//     star += "*" + " ";
//     console.log(star);
//     gap += " ";
//   }
// }
// console.log(
//   "copyin--------------------------------------------------------------------------------------------------------"
// );
// let n = 5,
//   star = "";
// console.log("1 -----------------------------------------------------------");
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     star += "* ";
//   }
//   console.log(star);
//   star = "";
// }

// console.log("2 -----------------------------------------------------------");
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     star += "* ";
//   }
//   console.log(star);
//   star = "";
// }
// console.log("3 -----------------------------------------------------------");
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     star += " ";
//   }
//   for (let j = 0; j < i; j++) {
//     star += "* ";
//   }
//   console.log(star);
//   star = "";
// }
// console.log("4 -----------------------------------------------------------");
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     star += " ";
//   }
//   for (let j = 0; j < i * 2 - 1; j++) {
//     if (j == 0 || j == i * 2 - 2 || (i == n && j % 2 == 0)) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   console.log(star);
//   star = "";
// }
// console.log("5 -----------------------------------------------------------");
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     star += " ";
//   }
//   for (let j = 0; j < i * 2 - 1; j++) {
//     if (j == 0 || j == i * 2 - 2) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   console.log(star);
//   star = "";
// }
// for (let i = n - 1; i >= 0; i--) {
//   for (let j = 0; j < n - i; j++) {
//     star += " ";
//   }
//   for (let j = 0; j < i * 2 - 1; j++) {
//     if (j == 0 || j == i * 2 - 2) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   console.log(star);
//   star = "";
// }
//01000100101010110101011010101100011010010101010010010101010100011101010010101
