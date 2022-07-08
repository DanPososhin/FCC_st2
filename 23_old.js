let n = prompt('Введите число больше 2','');
lable: for (let x = 2, x <= n, x++) {
for (let y = 2, y < x, y++) {
    if (x % y == 0) continue lable;
}
alert (x);
}

let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...

  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }

  alert( i ); // простое число
}