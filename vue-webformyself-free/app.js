// Впринципе код ниже делает тоже самое что и просто объявить массив прямо в data
// const cars = [
//     {
//         name: "Ford",
//         model: "Focus",
//         year: 2015,
//         owner: "Max",
//         phone: "+7 929 123 45 67",
//         image: "images/focus.jpg"
//     },
//     {
//         name: "Ford",
//         model: "Mondeo",
//         year: 2017,
//         owner: "John",
//         phone: "+7 929 123 45 67",
//         image: "images/mondeo.jpg"
//     },
//     {
//         name: "Porsche",
//         model: "Panamera",
//         year: 2018,
//         owner: "Jack",
//         phone: "+7 929 123 45 67",
//         image: "images/panamera.jpg"
//     }
// ];

// Создаём функцию коструктор или класс конструктор
// function Car(name, model, year, owner, phone, image) {
//     return {
//         name: name,
//         model: model,
//         year: year,
//         owner: owner,
//         phone: phone,
//         image: image
//     }
// }

// Ну или так, но тогда если используем es6, лучше создать class
function Car(name, model, year, owner, phone, image) {
    return {
        name, model, year, owner, phone, image
    }
}

// Создаём класс конструктор
// class Car {
//     constructor(name, model, year, owner, phone, image) {
//         this.name = name;
//         this.model = model;
//         this.year = year;
//         this.owner = owner;
//         this.phone = phone;
//         this.image = image;
//     }
// }

// Ну или ещё можно сделать функцию в одну строку =)
// const Car = (name, model, year, owner, phone, image) => ({ name, model, year, owner, phone, image });

// Создаём массив cars с тремя машинами используя наш конструктор, незабываем если это конструктор, то нужно ключевое слово new, new Car(), если просто функция, то вызываем как просто функцию Car()
const cars = [
    new Car("Ford", "Focus", 2015, "Max", "+7 929 123 45 67", "images/focus.jpg"),
    new Car("Ford", "Mondeo", 2017, "John", "+7 920 321 54 76", "images/mondeo.jpg"),
    new Car("Porsche", "Panamera", 2018, "Jack", "+7 914 456 12 34", "images/panamera.jpg"),
    new Car("BMW", "i8", 2018, "Mike", "+7 941 789 22 72", "images/i8.jpg")
];

// создаём функцию для генерации логов
const Log = (text, type, date = new Date()) => ({ text, type, date });


new Vue({
    el: "#app",
    data: {
        cars: cars,
        car: cars[0],
        search: "",
        show: false,
        currentIndex: 0,
        modalShow: false,
        logs: []
    },
    methods: {
        handleClick(car, i) {
            // console.log('car :', car);
            this.car = car;
            this.currentIndex = i;
        },
        newOrder() {
            this.modalShow = !this.modalShow;
            this.logs.push(
                Log(`Success order: ${this.car.name} ${this.car.model}`, "Ok")
            );
        },
        cancelOrder() {
            this.modalShow = !this.modalShow;
            this.logs.push(
                Log(`Cancelled order: ${this.car.name} ${this.car.model}`, "Cancel")
            );
        }
    },
    computed: {
        // можно так сделать
        filteredCars() {
            return this.cars.filter(car => {
                return car.name.toLowerCase().includes(this.search.toLowerCase()) || car.model.toLowerCase().includes(this.search.toLowerCase());
            })
        },
        // или так
        // filteredCars() {
        //     return this.cars.filter(car => {
        //         return car.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1 || car.model.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
        //     })
        // },
    },
    filters: {
        formatDate(val) {
            return val.toLocaleString();
        }
    }
});