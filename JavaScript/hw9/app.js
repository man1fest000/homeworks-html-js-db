// - є масив
let simpsons = [
    {
        name: "Bart",
        surname: "Simpson",
        age: 10,
        info: "Бартолом'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.",
        photo: "https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png",
    },
    {
        name: "Homer",
        surname: "Simpson",
        age: 40,
        info: "Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.",
        photo: "http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    },
    {
        name: "Marge",
        surname: "Simpson",
        age: 38,
        info: "Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.",
        photo: "https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png",
    },
    {
        name: "Lisa",
        surname: "Simpson",
        age: 9,
        info: "Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.",
        photo: "https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png",
    },
    {
        name: "Maggie",
        surname: "Simpson",
        age: 1,
        info: "Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.",
        photo: "https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png",
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
for (const simpson of simpsons) {
    const person = document.createElement("div");
    person.classList.add("member");
    person.innerHTML = ` <div>${simpson.name} ${simpson.surname}</div> <div>Age: ${simpson.age}</div> <div>Info: ${simpson.info}</div> <img src="${simpson.photo}" alt="${simpson.name} ${simpson.surname}"> `;
    document.body.append(person);
}
//
//
// Цикл в циклі
// - Є масив
let coursesArray = [
    {
        title: "JavaScript Complex",
        monthDuration: 5,
        hourDuration: 909,
        modules: ["html", "css", "js", "mysql", "mongodb", "react", "angular", "aws", "docker", "git", "node.js"],
    },
    {
        title: "Java Complex",
        monthDuration: 6,
        hourDuration: 909,
        modules: ["html", "css", "js", "mysql", "mongodb", "angular", "aws", "docker", "git", "java core", "java advanced"],
    },
    {
        title: "Python Complex",
        monthDuration: 6,
        hourDuration: 909,
        modules: ["html", "css", "js", "mysql", "mongodb", "angular", "aws", "docker", "python core", "python advanced"],
    },
    {
        title: "QA Complex",
        monthDuration: 4,
        hourDuration: 909,
        modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
    },
    {
        title: "FullStack",
        monthDuration: 7,
        hourDuration: 909,
        modules: [
            "html",
            "css",
            "js",
            "mysql",
            "mongodb",
            "react",
            "angular",
            "aws",
            "docker",
            "git",
            "node.js",
            "python",
            "java",
        ],
    },
    {
        title: "Frontend",
        monthDuration: 4,
        hourDuration: 909,
        modules: ["html", "css", "js", "mysql", "mongodb", "react", "angular", "aws", "docker", "git", "sass"],
    },
];
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
for (const coursesArrayElement of coursesArray) {
    const mainBlock = document.createElement("table");

    mainBlock.innerHTML = `<tr> <th colspan="2" >${coursesArrayElement.title}</th> </tr> <tr> <th class="timeStudy">${coursesArrayElement.monthDuration}</th> <th class="timeStudy">${coursesArrayElement.hourDuration}</th></tr>`;
    const subBlock = document.createElement("ul");

    for (const module of coursesArrayElement.modules) {
        subBlock.innerHTML += `<li>${module}</></li>`;
    }

    mainBlock.append(subBlock);
    document.body.append(mainBlock);
}
// Приклад структири знаходиться у файлі example.png
// ------------------
//
//
//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const someBlock = document.createElement("div");
someBlock.classList.add("wrap", "collapse", "alpha", "beta");
someBlock.innerText = "some block"; /* Стилі прописані в css, якщо треба було задати інлайнові :
someBlock.style.background = "black";
someBlock.style.color = "white";
someBlock.style.fontSize = "20px";  */
document.body.append(someBlock);
document.body.append(someBlock.cloneNode(true));

//
// - Є масив
let coursesAndDurationArray = [
    { title: "JavaScript Complex", monthDuration: 5 },
    { title: "Java Complex", monthDuration: 6 },
    { title: "Python Complex", monthDuration: 6 },
    { title: "QA Complex", monthDuration: 4 },
    { title: "FullStack", monthDuration: 7 },
    { title: "Frontend", monthDuration: 4 },
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    const block = document.createElement("div");
    block.innerHTML = `${item.title} ${item.monthDuration}`;
    document.body.append(block);
}
//
// - Є масив
let coursesAndDurationArray2 = [
    { title: "JavaScript Complex", monthDuration: 5 },
    { title: "Java Complex", monthDuration: 6 },
    { title: "Python Complex", monthDuration: 6 },
    { title: "QA Complex", monthDuration: 4 },
    { title: "FullStack", monthDuration: 7 },
    { title: "Frontend", monthDuration: 4 },
];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
for (const item of coursesAndDurationArray2) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `<h1 class="heading">${item.title}</h1> <p class="description">${item.monthDuration}</p>`;
    document.body.append(div);
}

//
// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const divWithId = document.createElement("div");
divWithId.setAttribute("id", "text");
divWithId.innerText = "hidden text";
document.body.append(divWithId);

const buttonForHiddenText = document.createElement("button");
buttonForHiddenText.innerText = "Hide";

buttonForHiddenText.addEventListener("click", () => {
    divWithId.classList.add("hide");
});

document.body.append(buttonForHiddenText);

//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const formForAge = document.createElement("form"),
    inputAge = document.createElement("input"),
    buttonForInput = document.createElement("button");

inputAge.setAttribute("placeholder", "Your age");

buttonForInput.innerText = "Check age";

formForAge.append(inputAge, buttonForInput);
document.body.append(formForAge);

buttonForInput.addEventListener("click", (e) => {
    e.preventDefault();
    if (+inputAge.value < 18) {
        alert("Young age");
    }
});
//
//
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const formForTable = document.createElement("form"),
    inputLine = document.createElement("input"),
    inputCells = document.createElement("input"),
    inputValue = document.createElement("input"),
    buttonForTable = document.createElement("button");

inputLine.setAttribute("placeholder", "Lines");
inputCells.setAttribute("placeholder", "Сells");
inputValue.setAttribute("placeholder", "Write anything");

buttonForTable.innerText = "Build Table";

formForTable.append(inputLine, inputCells, inputValue, buttonForTable);
document.body.append(formForTable);

buttonForTable.addEventListener("click", (e) => {
    e.preventDefault();
    const table = document.createElement("table");
    for (let i = 0; i < +inputLine.value; i++) {
        const tr = document.createElement("tr");

        for (let j = 0; j < +inputCells.value; j++) {
            const th = document.createElement("th");
            th.innerText = inputValue.value;
            tr.append(th);
        }

        table.append(tr);
    }
    document.body.append(table);
});
