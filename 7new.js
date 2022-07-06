function century(b) {
    let a = 0;
    while (b > 0){
      b = b - 100;
      a++;
    }
    return a;
  }