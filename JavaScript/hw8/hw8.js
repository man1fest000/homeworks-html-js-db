// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
const users = [
    new User(98, "Ivan", "Goal", "random@gmail.com", "380959213245"),
    new User(2, "Petr", "Fox", "random2@gmao.com", "380959211234"),
    new User(12, "Andriy", "Forest", "random@mail.com", "380959214567"),
    new User(44, "Vasyl", "Stone", "random4@gmail.com", "380934567890"),
    new User(52, "Roman", "Miler", "random5@gmail.com", "380989413245"),
    new User(16, "Oleg", "Korob", "random8@gmail.com", "380959219345"),
    new User(37, "Eduard", "Hammer", "random7@gmail.com", "380957653245"),
    new User(88, "Kostia", "Box", "random8@gmail.com", "380657653245"),
    new User(19, "Donald", "Gold", "random9@gmail.com", "3809543653245"),
    new User(120, "Greg", "Garden", "random10@gmail.com", "380957665245"),
];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const usersFilter = users.filter((user) => user.id % 2 === 0);
console.log(usersFilter);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortingByAscendingOrder = users.sort((a, b) => a.id - b.id);
console.log(sortingByAscendingOrder);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, [...order]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
const clients = [
    new Client(98, "Oleg", "Koval", "random1@gmail.com", "380959214567", [
        "apple",
        "orange",
        "banana",
        "pineapple",
        "watermelon",
        "pear",
        "peach",
        "strawberry",
    ]),
    new Client(2, "Vasyl", "Stone", "random2@gmail.com", "380951451267", ["phone", "laptop", "TV"]),
    new Client(12, "Andriy", "Forest", "random23@gmail.com", "380563219876", ["egg", ",meat", "fish"]),
    new Client(44, "Vasyl", "Stone", "random32@gmail.com", "380329214567", ["printer", "scanner", "mouse"]),
    new Client(52, "Roman", "Miler", "random11@gmail.com", "380959214321", [
        "parsley",
        "tomato",
        "cucumber",
        "apple",
        "orange",
        "banana",
    ]),
    new Client(16, "Oleg", "Korob", "random43@gmail.com", "380959213431", [
        "headphone",
        "screen",
        "keyboard",
        "speaker",
        "mouse",
    ]),
    new Client(37, "Eduard", "Hammer", "random40@gmail.com", "380952113431", ["book"]),
    new Client(88, "Kostia", "Box", "random48@gmail.com", "380952653245", ["wardrobe", "table", "chair", "bed", "sofa"]),
    new Client(19, "Donald", "Gold", "random123@gmail.com", "380937653245", ["bed", "table"]),
    new Client(120, "Greg", "Garden", "random456@gmail.com", "380907153245", ["sushi", "pizza", "salad", "fish"]),
];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const clientSort = clients.sort((a, b) => a.order.length - b.order.length);
console.log(clientSort);
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function CarFunction(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = () => {
        console.log(`
      модель - ${this.model}
      виробник - ${this.manufacturer}
      рік випуску - ${this.year}
      максимальна швидкість - ${this.maxSpeed}
      об'єм двигуна - ${this.engineCapacity}`);
    };
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = (newSpeed) => {
        if (newSpeed > this.maxSpeed) {
            this.maxSpeed = newSpeed;
        }
    };
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = (newValue) => (this.year = newValue);
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = ({ ...driver }) => (this.driver = driver);
}

const bmw = new CarFunction("X6", "BMW", "2021", 280, 3.3);
bmw.drive();
bmw.info();
bmw.increaseMaxSpeed(300);
bmw.changeYear(2023);
bmw.addDriver({ name: "John", age: "30", experience: "3 years" });
console.log(bmw.driver);
//

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class CarClass {
    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
    }

    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        console.log(`
      модель - ${this.model}
      виробник - ${this.manufacturer}
      рік випуску - ${this.year}
      максимальна швидкість - ${this.maxSpeed}
      об'єм двигуна - ${this.engineCapacity}`);
    }

    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        if (newSpeed > this.maxSpeed) {
            this.maxSpeed = newSpeed;
        }
    }

    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        this.year = newValue;
    }

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver({ ...driver }) {
        this.driver = driver;
    }
}

const mercedes = new CarClass("E220", "Mercedes", "2020", 300, 3.8);
mercedes.drive();
mercedes.info();
mercedes.increaseMaxSpeed(320);
mercedes.changeYear(2025);
mercedes.addDriver({ name: "Andriy", age: "25", experience: "4 years" });
console.log(mercedes.driver);
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellas = [
    new Cinderella("Cinderella", 18, 30),
    new Cinderella("Belle", 20, 31),
    new Cinderella("Diana", 21, 32),
    new Cinderella("Anna", 19, 35),
    new Cinderella("Luna", 17, 33),
    new Cinderella("Merry", 18, 39),
    new Cinderella("Ariel", 20, 38),
    new Cinderella("Snow White", 21, 34),
    new Cinderella("Aurora", 19, 36),
    new Cinderella("Anet", 18, 38),
];

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

const prince = new Prince("Prince", 25, 36);

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeSize) {
        console.log(cinderella);
    }
}

const findCinderella = cinderellas.find((cinderella) => cinderella.footSize === prince.shoeSize);
console.log(findCinderella);
