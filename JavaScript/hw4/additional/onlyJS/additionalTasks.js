// --створити масив з:
// - з 5 числових значень
const numbers = [1, 2, 3, 4, 5];
// - з 5 стічкових значень
const strings = ["one", "two", "three", "four", "five"];
// - з 5 значень стрічкового, числового та булевого типу
const mixed = [1, "two", true, "three", false];
// - та вивести його в консоль
console.log(numbers, strings, mixed);
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArr = [];
emptyArr[0] = 10;
emptyArr[1] = "text";
emptyArr[2] = true;
console.log(emptyArr);
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
let someArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log("--------------------");
// 1. перебрати його циклом while
let iForWhile = 0;
while (iForWhile < someArr.length) {
  console.log(someArr[iForWhile]);
  iForWhile++;
}
console.log("--------------------");
//     2. перебрати його циклом for
for (let i = 0; i < someArr.length; i++) {
  console.log(someArr[i]);
}
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
iForWhile = 0;
console.log("--------------------");
while (iForWhile < someArr.length) {
  if (iForWhile % 2 !== 0) {
    console.log(someArr[iForWhile]);
  }
  iForWhile++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
console.log("--------------------");
for (let i = 0; i < someArr.length; i++) {
  if (i % 2 !== 0) {
    console.log(someArr[i]);
  }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
console.log("--------------------");
iForWhile = 0;
while (iForWhile < someArr.length) {
  if (someArr[iForWhile] % 2 === 0) {
    console.log(someArr[iForWhile]);
  }
  iForWhile++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
console.log("--------------------");
for (let i = 0; i < someArr.length; i++) {
  if (someArr[i] % 2 === 0) {
    console.log(someArr[i]);
  }
}
// 7. замінити кожне число кратне 3 на слово "okten"
console.log("--------------------");
for (let i = 0; i < someArr.length; i++) {
  if (someArr[i] % 3 === 0) {
    someArr[i] = "octen";
  }
}
console.log(someArr);
// 8. вивести масив в зворотньому порядку.
console.log("--------------------");
for (let i = someArr.length - 1; i >= 0; i--) {
  console.log(someArr[i]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
console.log("--------------------");
//1
iForWhile = someArr.length - 1;
while (iForWhile >= 0) {
  console.log(someArr[iForWhile]);
  iForWhile--;
}
console.log("--------------------");
//2
for (let i = someArr.length; i >= 0; i--) {
  console.log(someArr[i]);
}
console.log("--------------------");
//3
iForWhile = someArr.length - 1;
while (iForWhile >= 0) {
  if (iForWhile % 2 !== 0) {
    console.log(someArr[iForWhile]);
  }
  iForWhile--;
}
console.log("--------------------");
//4
for (let i = someArr.length - 1; i >= 0; i--) {
  if (i % 2 !== 0) {
    console.log(someArr[i]);
  }
}
// і тд
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
console.log("--------------------");
const arr1 = [1, 2, 6, 7, 9, 3, 45, 43, 21, 41];
for (const number of arr1) {
  console.log(number);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
console.log("--------------------");
const arr2 = ["a", "v", "c", "r", "h", "u", "t", "x", "g", "y"];
for (const string of arr2) {
  console.log(string);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
console.log("--------------------");
const arr3 = [1, "a", true, {}, [], false, null, undefined, "rock", "doc"];
for (const arr3Element of arr3) {
  console.log(arr3Element);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
console.log("--------------------");
const arr4 = [1, "a", true, {}, [], false, null, undefined, "rock", "doc"];
for (const arr4Element of arr4) {
  if (typeof arr4Element === "boolean") {
    console.log(arr4Element);
  }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
console.log("--------------------");
const arr5 = [1, "a", true, {}, [], false, null, 45, "rock", 666];
for (const arr5Element of arr5) {
  if (typeof arr5Element === "number") {
    console.log(arr5Element);
  }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
console.log("--------------------");
const arr6 = [1, "a", true, {}, [], false, null, 45, "rock", 666];
for (const arr6Element of arr6) {
  if (typeof arr6Element === "string") {
    console.log(arr6Element);
  }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
const someArr2 = [];
someArr2[0] = "a";
someArr2[1] = 1;
someArr2[2] = true;
someArr2[3] = false;
someArr2[4] = [];
someArr2[5] = {};
someArr2[6] = null;
someArr2[7] = NaN;
someArr2[8] = undefined;
someArr2[9] = "goal";
for (const someArr2Element of someArr2) {
  console.log(someArr2Element);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
  console.log(i);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
  console.log(i);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
  console.log(i);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
const books = [
  {
    name: "Harry Potter",
    pages: 400,
    authors: ["J.K. Rowling"],
    genres: ["Fantasy"],
  },
  {
    name: "Lord of the Rings",
    pages: 700,
    authors: ["J.R.R. Tolkien", "Second author "],
    genres: ["Fan"],
  },
  {
    name: "The Hobbit",
    pages: 300,
    authors: ["J.R.R. Tolkien"],
    genres: ["Fantasy", "secondGenre"],
  },
  {
    name: "Witcher",
    pages: 500,
    authors: ["Andrzej Sapkowski"],
    genres: ["Fantasy"],
  },
  {
    name: "The Witcher 2",
    pages: 500,
    authors: ["Andrzej Sapkowski"],
    genres: ["Fantasy"],
  },
  {
    name: "Robert Ludlum's The Hobbit",
    pages: 400,
    authors: ["Daniel Defoe", "second author"],
    genres: ["Fantasy", "Adventure"],
  },
];

// -знайти наібльшу книжку.
let maxPages = { pages: 0 };
for (const book of books) {
  if (book.pages > maxPages.pages) {
    maxPages = book;
  }
}
console.log(maxPages);

// - знайти  книжу/ки з найбільшою кількістю жанрів
console.log("---------------------------");
let maxGenres = { genres: [] };
let arrWithMaxGenres = [];
for (const book of books) {
  if (book.genres.length > maxGenres.genres.length) {
    maxGenres = book;
  }
}
for (const book of books) {
  if (book.genres.length === maxGenres.genres.length) {
    arrWithMaxGenres.push(book);
  }
}
console.log(arrWithMaxGenres);

// - знайти книжку/ки з найдовшою назвою
console.log("--------------------------");
let longName = { name: "" };
let arrWithMaxNames = [];
for (const book of books) {
  if (book.name.length > longName.name.length) {
    longName = book;
  }
}
for (const book of books) {
  if (book.name.length === longName.name.length) {
    arrWithMaxNames.push(book);
  }
}
console.log(arrWithMaxNames);
// - знайти книжку/ки які писали 2 автори
console.log("--------------------------");
let muchAuthors = { authors: [] };
let arrWithMuchAuthors = [];
for (const book of books) {
  if (book.authors.length === 2) {
    muchAuthors = book;
  }
}
for (const book of books) {
  if (book.authors.length === muchAuthors.authors.length) {
    arrWithMuchAuthors.push(book);
  }
}
console.log(arrWithMuchAuthors);

console.log("-------------------------------");
// - знайти книжку/ки які писав 1 автор
let onlyOneAuthor = { authors: [] };
let arrWithOnlyOneAuthor = [];
for (const book of books) {
  if (book.authors.length === 1) {
    onlyOneAuthor = book;
  }
}
for (const book of books) {
  if (book.authors.length === onlyOneAuthor.authors.length) {
    arrWithOnlyOneAuthor.push(book);
  }
}
console.log(arrWithOnlyOneAuthor);
