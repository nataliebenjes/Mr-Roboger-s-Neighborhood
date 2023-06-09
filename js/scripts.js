function containsThree(array) {
  xArray = [];
  array.forEach(function(num) {
    //see if num includes a "3"
    if (num.includes("3")) {
      xArray.push("Won't you be my neighbor")
    } else {
      xArray.push(num);
    }
  })
  return xArray;
}

function containsTwo(array) {
  xArray = [];
  array.forEach(function(num) {
    //see if num includes a "2"
    if (num.includes("2")) {
      xArray.push("Bloop!")
    } else {
      xArray.push(num);
    }
  })
  return xArray;
}

function containsOne(array) {
  xArray = [];
  array.forEach(function(num) {
    //see if num includes a "2"
    if (num.includes("1")) {
      xArray.push("Bleep!")
    } else {
      xArray.push(num);
    }
  })
  return xArray;
}

function numberReplacer(numero) {
  let endNumber = numero;
  let numberArray = [];
  for (let i = 0; i <= endNumber; i +=1) {
    numberArray.push(i);
  }
  let stringArray = [];
  numberArray.forEach(function(num) {
    stringArray.push(num.toString());
  });
  const resultOne = containsThree(stringArray);
  const resultTwo = containsTwo(resultOne);
  const resultThree = containsOne(resultTwo);
  return resultThree;
}
}
