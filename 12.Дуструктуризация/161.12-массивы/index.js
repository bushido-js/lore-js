// В данном уроке мы с вами разберем операцию деструктуризации массивов. Данная операция предназначена для массовой записи элементов массива в переменные в одну строчку кода.


  // let arr = [2025, 12, 31];
  // let [year, month, day] = arr;

  // console.log(year);  // выведет 2025
  // console.log(month); // выведет 12
  // console.log(day);   // выведет 31



  // let arr = ['Иван', 'Иванов', 'отдел разработки', 
	// 'программист', 2000]; 

  // let [name, surname, department, position, salary] = arr;

// Массивы из функции

function func() {
	return ['Иван', 'Иванов', 'отдел разработки', 
		'программист', 2000]; 
}

// let [name, surname, department, position, salary] = func();
// console.log(name);

let [name, surname, department, position, salary] = func();
console.log(name);