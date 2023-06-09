function containsThree(array) {
  xArray = [];
  array.forEach(function(num) {
    const characters = num.split("");
    //see if num includes a "3"
    if ("3".includes(num)) {
      xArray.push("Won't you be my neighbor")
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
  return stringArray;
}
