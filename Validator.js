// Реализуйте класс Validator, который будет проверять строки. К примеру, у него
// будет метод isEmail параметром принимает строку и проверяет, является ли она
// ккорректным емейлом или нет. Если является - возвращает true, если не является -
// то false. Кроме того, класс будет иметь следующие методы: метод isDomain для
// проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона

class Validator{
    constructor(string) {
        this.string = string;
    }

    isEmail(){
        const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regExp.test(this.string) === true){
            return this.string + " " + true;
        }
        else{
            return false;
        }
    }

    isDate(){
        const regExp = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        return this.string + " " + !!regExp.test(this.string);
        // if(!regExp.test(this.string)){
        //     return this.string + " " + false;
        // }
        // else{
        //     return false;
        // }
    }

    isDomain(){
        const regExp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
        if(regExp.test(this.string) === true){
            return this.string + " " + true;
        }
        else{
            return false;
        }
    }

    isPhone(){
        const regExp = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
        if(regExp.test(this.string) === true){
            return this.string + " " + true;
        }
        else{
            return false;
        }
    }
}

const email = new Validator("virchula1488@gmail.com");
const phone = new Validator("+380952252612");
const date = new Validator("10/05/2020");
const domain = new Validator("ok.ru");
console.log(email.isEmail());
console.log(phone.isPhone());
console.log(domain.isDomain());
console.log(date.isDate());
