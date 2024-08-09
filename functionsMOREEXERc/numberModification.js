function numberModification(number) {
  let string = number + "";
  let arrayNumbers = string.split("").map(Number);
  let output = number + "";
  let average = 0;
  let total = 0;
  let index = 0;

  while (average <= 5) {
    for (const number of arrayNumbers) {
      total += number;
      index++;
    }

    average = total / index;

    if (average > 5) {
      console.log(arrayNumbers.join(""));
      return;
    } else {
      arrayNumbers.push(9);
      index = 0;
      total = 0;
    }
  }
  console.log(arrayNumbers.join(""));
}

numberModification(101);
