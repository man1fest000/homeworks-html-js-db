// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaOfRectangle(length, width) {
  return length * width;
}

console.log(areaOfRectangle(5, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfCircle(radius) {
  return 3.14 * radius * radius;
}

console.log(areaOfCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaOfCylinder(height, radius) {
  return 2 * (3.14 * radius * (radius + height));
}

console.log(areaOfCylinder(5, 6));

// - створити функцію яка приймає масив та виводить кожен його елемент
function printArray(array) {
  for (const arrayElement of array) {
    console.log(arrayElement);
  }
}

printArray([1, 2, 3, 4, 5]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function makeText(text) {
  document.write(`<p>${text}</p>`);
}

makeText("POKEMON");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function makeList(text) {
  document.write(`<ul>`);
  document.write(`<li>${text}</li>`);
  document.write(`<li>${text}</li>`);
  document.write(`<li>${text}</li>`);
  document.write(`</ul>`);
}

makeList("Pikachu");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function makeListTwo(text, count) {
  document.write(`<ul>`);
  for (let i = 0; i < count; i++) {
    document.write(`<li>${text}</li>`);
  }
  document.write(`</ul>`);
}

makeListTwo("Raichu", 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function makeListThree(array) {
  document.write(`<ul>`);
  for (const arrayElement of array) {
    document.write(`<li>${arrayElement}</li>`);
  }
  document.write(`</ul>`);
}

makeListThree([1, "Bulbasaur", true]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const arrOfObj = [
  { id: 1, name: "Squirtle", age: 13 },
  { id: 2, name: "Chikorita", age: 12 },
  { id: 3, name: "Cyndaquil", age: 11 },
];

function makeUserParameters(arr) {
  for (const user of arr) {
    document.write(`<div>`);
    for (const userKey in user) {
      document.write(`${userKey} ${user[userKey]} `);
    }
    document.write(`</div>`);
  }
}

makeUserParameters(arrOfObj);

// - створити функцію яка повертає найменьше число з масиву
function minNumber(arr) {
  let min = arr[0];
  for (const arrElement of arr) {
    if (arrElement < min) {
      min = arrElement;
    }
  }
  return min;
}

console.log(minNumber([10, 14, 9, 7, 9]));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function addNumbers(arr) {
  let res = 0;
  for (const arrElement of arr) {
    res += arrElement;
  }
  return res;
}

console.log(addNumbers([1, 2, 10]));
