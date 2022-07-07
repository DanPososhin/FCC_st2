let n = prompt("введите любое число больше 2", "");
lable: for (let x = 2; x <= n; x++) {
  for (let y = 2; y < x; y++) {
    if (x % y == 0) continue lable;
  }
  alert(x);
}
