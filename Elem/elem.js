// Реализуйте класс Elem, который параметром принимает селектор одного
// HTML элемента и затем может выполнять с ним различные операции.
// Класс должен работать следующим образом:
// var elem = new Elem('селектор');
// elem.html('!'); //запишет в текст элемента '!'
// elem.append('!'); //запишет в начало элемента '!'
// elem.prepend('!'); //запишет в конец элемента '!'
// elem.attr('class', 'www'); //запишет в атрибут class значение www
// //Должны работать цепочки методов:
// elem.html('hello').append('!').prepend('!');
// elem.attr('class', 'www').attr('title', 'hello');


class Elem{
    constructor(selector) {
        this.$el = document.querySelectorAll(selector);
    }

    each(callback){
        for(let i=0;i<this.$el.length;i++){
            callback(this.$el[i]);
        }
    }

    html(text){
        this.$el.innerHTML = text;
        return this;
    }

    append(text){
        this.$el.append(text);
        return this;
    }

    prepend(text){
        this.$el.prepend(text);
        return this;
    }

    attr(attribute, text){
        this.$el.setAttribute(attribute, text);
        return this;
    }
}

const elem = new Elem(".block-box");

(elem.each(function (elem){
    elem.append("fdfsffsdfsd");
    elem.prepend("fdfsffsdfsd");
    elem.style.border = "2px solid black";
});



