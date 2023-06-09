# _Mr-Roboger-s-Neighborhood_

#### By _**Natalie Benjes**_

#### _An application that generates a different string of text based off of what number the user enters_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## GitHub Pages
[GitHub Page] (https://nataliebenjes.github.io/language-suggester/)

## Description

_This website takes an input from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:
All digits containing a 3 are replaced with the string "Won't you be my neighbor?".
All digits containing a 2 are replaced with the string "Bloop".
Alldigits containing a 1 are replaced with the string "Beep"
If the user inputs not a number, an error message appears._

## Setup/Installation Requirements

* _Download the repository "Mr-Roboger-s-Neighborhood
" to your device._
* _Open index.html_


## Known Bugs

* _No known bugs_
_If issues with the code are found please contact Natalie Benjes. GitHub username is nataliebenjes_

## Test Driven Development

Describe: numberReplacer()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: numberReplacer(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return an array of strings"
Code: numberReplacer(5);
Expected Output: ["0", "1", "2", "3", "4", "5"]

Test: "It should run through containsThree, containsTwo, 
and containsOne"
code: numberReplacer(13)
Expected Output: [
  '0',
  'Bleep!',
  'Bloop!',
  "Won't you be my neighbor",
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'Bleep!',
  'Bleep!',
  'Bloop!',
  "Won't you be my neighbor"
]

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

## License

[MIT License](https://opensource.org/licenses/MIT).
Copyright (c) _2023_Natalie Benjes_

