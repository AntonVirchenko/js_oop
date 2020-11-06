// Реализуйте класс Student (Студент), который будет наследовать от класса User,
// подобно тому, как это сделано в теоретической части урока. Этот класс должен
// иметь следующие свойства: name (имя, наследуется от User), surname (фамилия,
// наследуется от User), year (год поступления в вуз). Класс должен иметь метод
// getFullName() (наследуется от User), с помощью которого можно вывести одновременно
// имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет
// выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего
// года отнять год поступления в вуз. Текущий год получите самостоятельно.

class User{
    constructor(studentName, studentSurname) {
        this.studentName = studentName;
        this.studentSurname = studentSurname;
    }

    getFullName(){
        return this.studentName + " " + this.studentSurname;
    }
}

class Student extends User{
     constructor(studentName, studentSurname, year) {
         super(studentName,studentSurname);
         this.year = year;
     }

    getFullName(){
         return super.getFullName();
    }

    getCourse(){
         const date = new Date();
         return "now course is " +  (date.getFullYear() - this.year);
    }
}

const student = new Student("Anton", "Virchenko", 2018);
console.log(student.getFullName());
console.log(student.getCourse());
