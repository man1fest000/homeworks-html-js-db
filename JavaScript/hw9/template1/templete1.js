// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let arr = ["Main", "Products", "About us", "Contacts"];

const menu = document.querySelector(".menu");
for (const item of arr) {
    const liItem = document.createElement("li");
    liItem.innerText = item;
    menu.append(liItem);
}
