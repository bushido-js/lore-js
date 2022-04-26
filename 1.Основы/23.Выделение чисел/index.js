/* Функция Number работает только со строками, состоящими из цифр. Однако, при программировании на JavaScript часто встречаются ситуации, когда вам нужно обращаться со строками, в начале которых стоит число, а затем буквы.

Примером такой строки может быть значение в пикселях: '12px'. Пусть нам необходимо достать стоящее в начале число, отбросив строковую часть. Для такой операции существует функция parseInt. Давайте посмотрим ее работу на примере */

let num = parseInt('12px')
console.log(num);

/* Пиксели, однако, иногда бывают дробными: '12.5px'. В этом случае функция parseInt пасует и выводит только целую часть: */

let num1 = parseInt('12.5px');
console.log(num1); // все равно выведет 12

/* В общем-то, возможно такое поведение - это именно то, что вам нужно. Но если нет - используйте функцию parseFloat, которое извлекает число вместе с его дробной частью: */

let num2 = parseFloat('12.5px');
console.log(num2); // выведет 12.5

// Задачи 
console.log('Задачи:');

let x = '5px';
let y = '6px';

console.log(parseInt(x) + parseInt(y) + 'px');

let x1 = '5.5px';
let y2 = '6.25px';
console.log(parseFloat(x1) + parseFloat(y2) + 'px');