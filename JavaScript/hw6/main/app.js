// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(
  "hello world".length,
  "lorem ipsum".length,
  "javascript is cool".length
);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(
  "hello world".toUpperCase(),
  "lorem ipsum".toUpperCase(),
  "javascript is cool".toUpperCase()
);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(
  "HELLO WORLD".toLowerCase(),
  "LOREM IPSUM".toLowerCase(),
  "JAVASCRIPT IS COOL".toLowerCase()
);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = " dirty string   ";
console.log(str.trim());
//Можна ще так  console.log(str.substring(str.indexOf("d"), str.lastIndexOf("g") + 1));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let string = "Ревуть воли як ясла повні";

function stringToarray(someStr) {
  return someStr.split(" ");
}

let arr = stringToarray(string);
console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let someArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(someArr.map((item) => item + ""));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(someArr, direction) {
  if (direction === "ascending") {
    return someArr.sort((a, b) => a - b);
  }
  if (direction === "descending") {
    return someArr.sort((a, b) => b - a);
  }
}

console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));

//
// - є масив
let coursesAndDurationArray = [
  { title: "JavaScript Complex", monthDuration: 5 },
  { title: "Java Complex", monthDuration: 6 },
  { title: "Python Complex", monthDuration: 6 },
  { title: "QA Complex", monthDuration: 4 },
  { title: "FullStack", monthDuration: 7 },
  { title: "Frontend", monthDuration: 4 },
];
// -- відсортувати його за спаданням за monthDuration
console.log(
  coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter((item) => item.monthDuration > 5));

// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cards = [
  { cardSuit: "spade", value: "6", color: "black" },
  { cardSuit: "spade", value: "7", color: "black" },
  { cardSuit: "spade", value: "8", color: "black" },
  { cardSuit: "spade", value: "9", color: "black" },
  { cardSuit: "spade", value: "10", color: "black" },
  { cardSuit: "spade", value: "jack", color: "black" },
  { cardSuit: "spade", value: "queen", color: "black" },
  { cardSuit: "spade", value: "king", color: "black" },
  { cardSuit: "spade", value: "ace", color: "black" },
  { cardSuit: "spade", value: "joker", color: "black" },
  { cardSuit: "diamond", value: "6", color: "red" },
  { cardSuit: "diamond", value: "7", color: "red" },
  { cardSuit: "diamond", value: "8", color: "red" },
  { cardSuit: "diamond", value: "9", color: "red" },
  { cardSuit: "diamond", value: "10", color: "red" },
  { cardSuit: "diamond", value: "jack", color: "red" },
  { cardSuit: "diamond", value: "queen", color: "red" },
  { cardSuit: "diamond", value: "king", color: "red" },
  { cardSuit: "diamond", value: "ace", color: "red" },
  { cardSuit: "diamond", value: "joker", color: "red" },
  { cardSuit: "heart", value: "6", color: "red" },
  { cardSuit: "heart", value: "7", color: "red" },
  { cardSuit: "heart", value: "8", color: "red" },
  { cardSuit: "heart", value: "9", color: "red" },
  { cardSuit: "heart", value: "10", color: "red" },
  { cardSuit: "heart", value: "jack", color: "red" },
  { cardSuit: "heart", value: "queen", color: "red" },
  { cardSuit: "heart", value: "king", color: "red" },
  { cardSuit: "heart", value: "ace", color: "red" },
  { cardSuit: "heart", value: "joker", color: "red" },
  { cardSuit: "clubs", value: "6", color: "black" },
  { cardSuit: "clubs", value: "7", color: "black" },
  { cardSuit: "clubs", value: "8", color: "black" },
  { cardSuit: "clubs", value: "9", color: "black" },
  { cardSuit: "clubs", value: "10", color: "black" },
  { cardSuit: "clubs", value: "jack", color: "black" },
  { cardSuit: "clubs", value: "queen", color: "black" },
  { cardSuit: "clubs", value: "king", color: "black" },
  { cardSuit: "clubs", value: "ace", color: "black" },
  { cardSuit: "clubs", value: "joker", color: "black" },
];

// - знайти піковий туз
console.log(
  cards.find((item) => item.cardSuit === "spade" && item.value === "ace")
);
// - всі шістки
console.log(cards.filter((item) => item.value === "6"));
// - всі червоні карти
console.log(cards.filter((item) => item.color === "red"));
// - всі буби
console.log(cards.filter((item) => item.cardSuit === "diamond"));
// - всі трефи від 9 та більше
console.log(
  cards.filter(
    (item) =>
      item.cardSuit === "clubs" &&
      item.value !== "6" &&
      item.value !== "7" &&
      item.value !== "8"
  )
);

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

console.log(
  cards.reduce(
    (previousValue, currentValue) => {
      if (currentValue.cardSuit === "spade") {
        previousValue.spades.push(currentValue);
      }
      if (currentValue.cardSuit === "diamond") {
        previousValue.diamonds.push(currentValue);
      }
      if (currentValue.cardSuit === "heart") {
        previousValue.hearts.push(currentValue);
      }
      if (currentValue.cardSuit === "clubs") {
        previousValue.clubs.push(currentValue);
      }
      return previousValue;
    },
    {
      spades: [],
      diamonds: [],
      hearts: [],
      clubs: [],
    }
  )
);
