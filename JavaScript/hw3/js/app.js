// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
x !== 0 ? console.log('Вірно') : console.log('Невірно');

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 20;
if (time >= 0 && time <= 14) {
    console.log("Перша")
} else if (time >= 15 && time <= 29) {
    console.log("Друга")
} else if (time >= 30 && time <= 44) {
    console.log("Третя")
} else if (time >= 45 && time <= 59) {
    console.log("Четверта")
} else {
    console.log("Error")
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 30;

if (day >= 1 && day <= 10) {
    console.log("Перша декада")
} else if (day >= 11 && day <= 20) {
    console.log("Друга декада")
} else if (day >= 21 && day <= 31) {
    console.log("Третя декада")
} else {
    console.log("Error")
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayOfWeek = 5;

switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Error");
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let a = 30;
let b = 20;

if(a > b) {
    console.log(a);
}else if(a === b) {
    console.log("Числа рівні");
}else {
    console.log(b);
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let y = "" || "default";
console.log(y);