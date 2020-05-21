'use strict';

// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str (строку) и добавляет ее в начало и в конец _value

class StringBuilder {
	constructor(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	append(str) {
		this._value = this._value.split(' ');
		this._value.push(str);
		this._value = this._value.join(' ');
	}

	prepend(str) {
		this._value = this._value.split(' ');
		this._value.unshift(str);
		this._value = this._value.join(' ');
	}

	pad(str) {
		this._value = this._value.split(' ');
		this._value.unshift(str);
		this._value.push(str);
		this._value = this._value.join(' ');
	}
}

const stringBuilder = new StringBuilder('Mango and Poly are awesome');

const value = stringBuilder.value;
console.log(value);

stringBuilder.append('lalala');
console.log(stringBuilder.value);

stringBuilder.prepend('lalala');
console.log(stringBuilder.value);

stringBuilder.pad('lalala');
console.log(stringBuilder.value);
