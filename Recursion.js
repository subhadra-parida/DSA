function add(number) {
    if (number <= 0) {
      return 0;
    } else {
      console.log(number + add(number - 1)) ;
    }
  }
  add(3) 