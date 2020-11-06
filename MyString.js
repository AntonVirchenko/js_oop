// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
// который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
// и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class MyString{
    constructor(string) {
        this.string = string;
    }

    reverse(string){
        return this.string.split("").reverse().join("");
    }

    ucFirst(string){
        return this.string[0].toUpperCase() + this.string.substring(1);
    }

    ucWords(string){
        return this.string.split(' ').map(word=>word[0].toUpperCase() + word.substring(1)).join(' ');
    }
}

const newString = new MyString("hello world!");
console.log(newString.reverse());
console.log(newString.ucFirst());
console.log(newString.ucWords());

