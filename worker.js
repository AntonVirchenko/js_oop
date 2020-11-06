// Реализуйте класс Worker (Работник), который будет иметь
// следующие свойства: name (имя), surname (фамилия), rate
// (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить
// зарплату работника. Зарплата - это произведение (умножение)
// ставки rate на количество отработанных дней days.

class Worker{
    constructor(options) {
        this.nameWorker = options.nameWorker;
        this.surname = options.surname;
        this.rate = options.rate;
        this.days = options.days;
    }

    getSalary(){
        return 'worker ' + this.nameWorker + ' ' + this.surname + ' has a salary of ' + (this.rate*this.days) + "$";
    }
}

const worker1 = new Worker({
    nameWorker: "Oleg",
    surname: "Dolmatov",
    rate: 30,
    days: 20
});

const worker2 = new Worker({
    nameWorker: "Gennadiy",
    surname: "Ivanov",
    rate: 40,
    days: 30
})

worker1.nameWorker = "ALisa";

console.log(worker1.getSalary());
console.log(worker2.getSalary());


