// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// сделайте все его войства приватными, а для их чтения
// сделайте методы-геттеры.
class Worker{

    constructor(workerName,surname,rate,days) {
        this._workerName = workerName;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    get workerName(){
        return this._workerName;
    }

    get surname(){
        return this._surname;
    }

    get rate(){
        return this._rate;
    }

    get days(){
        return this._days;
    }

    set rate(rate){
        return this._rate = rate;
    }

    set days(days){
        return this._days = days;
    }

    getSalary(){
        return 'worker ' + this._workerName + ' ' + this._surname + ' has a salary of ' + (this._rate*this._days) + "$";
    }
}
const worker = new Worker("Anton","Virchenko",40,27);
worker.days = 10;
worker.rate = 15;
console.log(worker.days);
console.log(worker.rate);
console.log(worker.getSalary());


