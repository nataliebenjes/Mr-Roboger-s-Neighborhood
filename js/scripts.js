function containsThree(array) {

  array.forEach(function(num) {
    //see if num includes a "3"
    if ("3".includes(num)) {
      array.push("Won't you be my neighbor")
    }
  })
  return array;
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
