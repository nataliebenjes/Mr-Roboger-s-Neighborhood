function containsThree()

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
