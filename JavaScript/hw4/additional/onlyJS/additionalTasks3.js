// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
const arr1 = [];
for (let i = 1; i <= 50; i++) {
  arr1.push(i);
}
for (let i = -1; i >= -50; i--) {
  arr1.push(i);
}
for (let i = 0; i < 20; i++) {
  arr1.push(Math.floor(Math.random() * 101));
}
for (let i = 0; i < 20; i++) {
  arr1.push(Math.floor(Math.random() * (732 - 8 + 1)) + 8);
}
console.log(arr1);
// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < arr1.length; i += 3) {
  console.log(arr1[i]);
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
console.log("----------------");
for (let i = 0; i < arr1.length; i += 3) {
  if (arr1[i] % 2 === 0) {
    console.log(arr1[i]);
  }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arrForFilteredElements = [];
for (let i = 0; i < arr1.length; i += 3) {
  if (arr1[i] % 2 === 0) {
    console.log(arr1[i]);
    arrForFilteredElements.push(arr1[i]);
  }
}
console.log(arrForFilteredElements);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
const arrFor5 = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i <= arrFor5.length; i++) {
  if (arrFor5[i + 1] % 2 === 0) {
    console.log(arrFor5[i]);
  }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arrFor6 = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (const number of arrFor6) {
  sum += number;
}
console.log((sum / arrFor6.length).toFixed(2));
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arrFor7 = [];
for (let i = 0; i < 20; i++) {
  arrFor7.push(Math.floor(Math.random() * 20));
}
console.log(arrFor7);
let arrFor7Copy = [];
for (const arrFor7Element of arrFor7) {
  arrFor7Copy.push(arrFor7Element * 5);
}
console.log(arrFor7Copy);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
//
let arrFor8 = [13, true, false, 10, "goal", 99];
let arrFor8copy = [];
for (const arrFor8Element of arrFor8) {
  if (typeof arrFor8Element === "number") {
    arrFor8copy.push(arrFor8Element);
  }
}
console.log(arrFor8copy);
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
  { id: 1, name: "vasya", age: 31, status: false },
  { id: 2, name: "petya", age: 30, status: true },
  { id: 3, name: "kolya", age: 29, status: true },
  { id: 4, name: "olya", age: 28, status: false },
];
//
let citiesWithId = [
  { user_id: 3, country: "USA", city: "Portland" },
  { user_id: 1, country: "Ukraine", city: "Ternopil" },
  { user_id: 2, country: "Poland", city: "Krakow" },
  { user_id: 4, country: "USA", city: "Miami" },
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//

let newArrUsersWithCities = [];
for (const user of usersWithId) {
  for (const citiesWithIdElement of citiesWithId) {
    if (user.id === citiesWithIdElement.user_id) {
      newArrUsersWithCities.push({
        ...user,
        address: {
          ...citiesWithIdElement,
        },
      });
    }
  }
}
console.log(newArrUsersWithCities);
//
//
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arrEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const arrEvenElement of arrEven) {
  if (arrEvenElement % 2 === 0) {
    console.log(arrEvenElement);
  }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arrCopy = [];
for (const number of arrEven) {
  arrCopy.push(number);
}
console.log(arrCopy);
//
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arrWithAbc = ["a", "b", "c"];
let str = "";
for (let i = 0; i < arrWithAbc.length; i++) {
  str += arrWithAbc[i];
}
console.log(str);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let i = 0;
let str2 = "";
while (i < arrWithAbc.length) {
  str2 += arrWithAbc[i];
  i++;
}
console.log(str2);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let str3 = "";
for (const string of arrWithAbc) {
  str3 += string;
}
console.log(str3);
