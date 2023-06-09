Describe: numberReplacer()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: numberReplacer(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an array of strings"
Code: numberReplacer(5);
Expected Output: ["0", "1", "2", "3", "4", "5"]

Test: "It should run through containsThree, containsTwo, and containsOne

Decribe: containsThree()

Test: "It should return an array of strings. Elements in the array that contain a 3 are replaced with the string 'Won't you be my neighbor'"
Code: containsThree(["1", "3", "6", "8", "13"]);
Expected Output: ["1", "Won't you be my neighbor", "6", "8", "Won't you be my neighbor"]

Descibe: containsTwo()

Test: "It should return an array of strings. Elements in the array that contain a 3 are replaced with the string 'Boop!'"
Code: containsTwo([
  '0',  '1', '2',  '3',
  '4',  '5', '6',  '7',
  '8',  '9', '10', '11',
  '12'
]);
Expected Output: [
  '0',  '1', 'Bloop!',  '3',
  '4',  '5', '6',  '7',
  '8',  '9', '10', '11',
  'Bloop!'
]

Describe: containsOne()

Test: "It should return an array of strings. Elements in the array that contain a 1 are replaced with the string 'Beep!'"
Code:containsOne([
  '0',  'Bleep!', '2',  '3',
  '4',  '5', '6',  '7',
  '8',  '9', '10', 'Bleep!',
  'Bleep!'
])