// Объявите пустой объект, а затем заполните его названиями дней недели в качестве ключей, и порядковыми номерами дней недели в качестве значений.


  // let obj = {};
  // obj['Monday'] = 1;
  // obj['Tuesday'] = 2;
  // obj['Wednesday'] = 3;
  // obj['Thursday'] = 4;
  // obj['Friday'] = 5;
  // obj['Saturday'] = 6;
  // obj['Sunday'] = 7;


  // console.log(obj);

// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:

  // let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб','вс'];
  // let arr2 = [1, 2, 3, 4, 5, 6, 7];
  // let obj = {};
  // for (i = 0; i < arr1.length; i++){
  //   obj[arr2[i]] = arr1[i];
  // }
  // console.log(obj);


// Заполнение объекта из другого объекта

// Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.

  // let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17}; 
  // let obj2 ={};

  // for (let key in obj){
  //   if (obj[key] >= 10 && obj[key] <= 20){
  //     obj2[key] = obj[key];
  //   }
  // }
  // console.log(obj2);


  // let obj = {1: 'пн', 2: 'вт', 3: 
  // 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'}; 

  // let obj2 = {};

  // for (let key in obj){
  //   if (key % 2 !== 0){
  //     obj2[key] = obj[key];
  //   }
  // }
  // console.log(obj2);


  let obj = {'a': 1, 'b': 2, 'c': 3, 
	'd': 4, 'e': 5}; 

  let result = {};

  for (let key in obj){
    result[obj[key]] = key;
  }
  console.log(result); // Переворот объекта

// Для этого переберем циклом for-in исходный объект и создадим при этом новый объект result. Ключами нового объекта сделаем элементы старого (это obj[key]), а значениями нового объекта - ключи старого (это key):

  // for (let key in obj){
  //   obj[key] = obj[key]**2;
  // }
  // console.log(obj);

