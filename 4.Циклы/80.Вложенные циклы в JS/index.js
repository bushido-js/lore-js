//С помощью двух вложенных циклов выведите на экран следующую строку:

// for (i = 1; i <= 9; i++){
//   for(j = 1; j <= 3; j++) {
//     document.write(i)
//   }
// }

// С помощью двух вложенных циклов выведите на экран следующую строку:

// 11 12 13 21 22 23 31 32 33

for (i = 11; i <= 31; i = i + 10){
  for(j = 0; j < 3 ; j++){
    let sum = (i + j) + ' ';
    document.write(sum)
  }
}