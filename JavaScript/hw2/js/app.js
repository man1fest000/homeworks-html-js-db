// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
const arr = [1, 'cat', true, [1, 2, 3], {name: 'John', age: 99}, false, 'banana', 921, 'windows', {name: 'Mac'}];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const bookOne = {
    title: 'Програмування на Javascript',
    pageCount: '300',
    genre: 'Програмування'
}
const bookTwo = {
    title: 'Відьмак',
    pageCount: '200',
    genre: 'Фентезі'
}
const bookThree = {
    title: 'Воно',
    pageCount: '500',
    genre: 'Жахи'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
const bookFirst = {
    title: 'Ілюзія знання',
    pageCount: '230',
    genre: 'Психологія',
    authors: [
        {name: 'Стівен Сломан', age: '45'},
        {name: 'Філіп Фернбак', age: '54'},
    ]
}
const bookSecond = {
    title: 'Код да Вінчі',
    pageCount: '800',
    genre: 'Детектив',
    authors: [
        {name: 'Ден Браун', age: '51'},
        {name: 'Джон Рон', age: '52'}
    ]
}
const bookThird = {
    title: 'Вбивство у «Східному експресі»',
    pageCount: '500',
    genre: 'Детектив',
    authors: [
        {name: 'Агата Крісті', age: '53'},
        {name: 'Генрі Грін', age: '33'}
    ]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
const users = [
    {name: 'Gari', username: 'gar1man', password: '123'},
    {name: 'Anna', username: 'girl99', password: '456'},
    {name: 'Jack', username: 'goodB0Y', password: '789'},
    {name: 'Jill', username: 'DeepSmoke31', password: '101112'},
    {name: 'Joe', username: 'Gamer222', password: '131415'},
    {name: 'Ola', username: 'Olimpia', password: '161718'},
    {name: 'Yura', username: 'ьфт1ауіе000', password: '19202'},
    {name: 'Vasia', username: 'strongMan54', password: '232425'},
    {name: 'Bogdan', username: 'Banana21', password: '262728'},
    {name: 'Illa', username: 'engineMan32', password: '293031'}
]

console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
