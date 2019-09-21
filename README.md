# JavaScript CodeWars Solutions

This the my repository for my codewars solutions in JavaScript.

## 01 - Persistent Bugger (6 Kyu)
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example:
```javascript
persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                      // and 4 has only one digit

persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                      // 1*2*6 = 12, and finally 1*2 = 2

persistence(4) === 0 // because 4 is already a one-digit number
```

## 02 - Ones and Zeros (7 kyu)
Given an array of one's and zero's convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1
```javascript
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
```

## 03 - Printer Errors (7 kyu)
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from a to z.

Examples:
```javascript
s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"
```

## 04 - Array.diff (6 kyu)
Your goal in this kata is to implement an difference function, which subtracts one list from another.

It should remove all values from list a, which are present in list b.
```javascript
array_diff([1,2],[1]) == [2]
```
If a value is present in b, all of its occurrences must be removed from the other:
```javascript
array_diff([1,2,2,2,3],[2]) == [1,3]
```

## 05 - A square of squares (8 kyu)
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task: Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
```javascript
isSquare(-1) // => false
isSquare( 3) // => false
isSquare( 4) // => true
isSquare(25) // => true
isSquare(26) // => false
```

## 06 - Remove First and Last Character (8 kyu)
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, except in C, where, to keep the difficulty at the level of the kata, you are given two parameters, the first a buffer with length exactly the same as the second parameter, the original string. You don't have to worry with strings with less than two characters.


## 07 - Calculating with Functions (5 kyu)
This time we want to write calculations using functions and get the results. Let's have a look at some examples:
```javascript
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
```
Requirements:

* There must be a function for each number from 0 ("zero") to 9 ("nine")
* There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
* Each calculation consist of exactly one operation and two numbers
* The most outer function represents the left operand, the most inner function represents the right operand

## 08 - Descending Order (7 kyu)
Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
```javascript
Input: 21445 Output: 54421
Input: 145263 Output: 654321
Input: 1254859723 Output: 9875543221
```

## 09 - Find the smallest integer in the array (7 kyu)
Given an array of integers your solution should find the smallest integer.

For example:
```javascript
Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
```
You can assume, for the purpose of this kata, that the supplied array will not be empty.

## 10 - Find the odd int (7 kyu)
Given an array, find the int that appears an odd number of times. There will always be only one integer that appears an odd number of times.

## 11 - Find the next perfect square (7 kyu)
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

Examples:
```javascript
findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect
```

## 12 - Duplicate Encoder (6 kyu)
The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples:
```javascript
"din" => "((("

"recede" => "()()()"

"Success" => ")())())"

"(( @" => "))(("
```

## 13 - Simple Encryption #1 - Alternating Split (6 kyu)
For building the encrypted string: Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String. Do this n times!

Examples:
```javascript
"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
```
Write two methods:
```javascript
function encrypt(text, n)
function decrypt(encryptedText, n)
```
For both methods:   
If the input-string is null or empty return exactly this value!   
If n is <= 0 then return the input text.

## 14 - Tribonacci Sequence (6 kyu)
Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with `[1, 1, 1]` as a starting input (AKA signature), we have this sequence:
```javascript
[1, 1 ,1, 3, 5, 9, 17, 31, ...]
```
But what if we started with `[0, 0, 1]` as a signature? As starting with `[0, 1]` instead of `[1, 1]` basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
```javascript
[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
```
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if `n == 0`, then return an empty array and be ready for anything else which is not clearly specified ;)

## 15 - Rot13 (5 kyu)
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
    
Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

## 16 - IPv4 to int32 (6 kyu)
Take the following IPv4 address: 128.32.10.1 This address has 4 octets where each octet is a single byte (or 8 bits).
    
* 1st octet 128 has the binary representation: 10000000
* 2nd octet 32 has the binary representation: 00100000
* 3rd octet 10 has the binary representation: 00001010
* 4th octet 1 has the binary representation: 00000001

So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

Write a function ip_to_int32(ip) ( JS: `ipToInt32(ip)` ) that takes an IPv4 address and returns a 32 bit number.
```javascript
ipToInt32("128.32.10.1") => 2149583361
```

## 17 - Write Number in Expanded Form (6 kyu)
You will be given a number and you will need to return it as a string in Expanded Form. For example:
```javascript
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
```
NOTE: All numbers will be whole numbers greater than 0.


## 18 - If you can read this... (6 kyu)
If you can read this...
The idea for this Kata came from 9gag today.here

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet) wiki.

Like this:

`Input:` If you can read    
`Output:` India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta

## 19 - Multiplication Tables  (6 kyu)
Create a function that accepts dimensions, of Rows x Columns, as parameters in order to create a multiplication table sized according to the given dimensions. **The return value of the function must be an array, and the numbers must be Fixnums, NOT strings.

Example:
```javascript
multiplication_table(3,3)

1 2 3
2 4 6
3 6 9

-->[[1,2,3],[2,4,6],[3,6,9]]
```
Each value on the table should be equal to the value of multiplying the number in its first row times the number in its first column.


## 20 - Function Cache (5 kyu)
If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.

Usage example:
```javascript
var complexFunction = function(arg1, arg2) { /* complex calculation in here */ };
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments
```

## 21 - Detect Pangram (6 kyu)
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


## 22 - Array Helpers (6 kyu)
This kata is designed to test your ability to extend the functionality of built-in ruby classes. In this case, we want you to extend the built-in Array class with the following methods: `square()`, `cube()`, `average()`, `sum()`, `even()` and `odd()`.

Explanation:

* square() must return a copy of the array, containing all values squared, the original array must not be changed
* cube() must return a copy of the array, containing all values cubed, the original array must not be changed
* average() must return the average of all array values, average() on an empty array must return NaN
* sum() must return the sum of all array values
* even() must return an array of all even numbers, the original array must not be changed
* odd() must return an array of all odd numbers, the original array must not be changed

Examples:
```javascript
var numbers = [1, 2, 3, 4, 5];
numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]
```

## 23 - Count the smiley faces! (6 kyu)
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:
- Each smiley face must contain a valid pair of eyes. Eyes can be marked as `:` or `;`
- A smiley face can have a nose but it does not have to. Valid characters for a nose are `-` or `~`
- Every smiling face must have a smiling mouth that should be marked with either `)` or `D`.
No additional characters are allowed except for those mentioned.

Example cases:
```javascript
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
```
Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same

## 24 - Who likes it? (6 kyu)
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:
```javascript
likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
```
For more than 4 names, the number in and `2 others` simply increases.

## 25 - Buying a car (6 kyu)
A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore the percent of loss increases by a fixed 0.5 percent at the end of every two months.

Can you help him? Our man finds it difficult to make all these calculations.

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

Parameters and return of function:
```javascript
parameter (positive int, guaranteed) startPriceOld (Old car price)
parameter (positive int, guaranteed) startPriceNew (New car price)
parameter (positive int, guaranteed) savingperMonth 
parameter (positive float or int, guaranteed) percentLossByMonth

nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
```
where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to '766.158...' .

Note: Selling, buying and saving are normally done at end of month. Calculations are processed at the end of each considered month but if, by chance from the start, the value of the old car is bigger than the value of the new one or equal there is no saving to be made, no need to wait so he can at the beginning of the month buy the new car:
```javascript
nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]
```
We don't take care of a deposit of savings in a bank:-)

## 26 - Simple fraction to mixed number converter (5 kyu)
Given a string representing a simple fraction `x/y`, your function must return a string representing the corresponding mixed fraction in the following format:

`[sign]a b/c`

where `a` is integer part and `b/c` is irreducible proper fraction. There must be exactly one space between `a` and `b/c`. Provide `[sign]` only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

If the `x/y` equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

Division by zero should raise an error (preferably, the standard zero division error of your language).

Value Ranges:
* -10 000 000 < `x` < 10 000 000
* -10 000 000 < `y` < 10 000 000

Examples:
* Input: `42/9`, expected result: `4 2/3`.
* Input: `6/3`, expedted result: `2`.
* Input: `4/6`, expected result: `2/3`.
* Input: `0/18891`, expected result: `0`.
* Input: `-10/7`, expected result: `-1 3/7`.
* Inputs `0/0` or `3/0` must raise a zero division error.

Note:
Make sure not to modify the input of your function in-place, it is a bad practice.

## 27-Multi-tap Keypad Text Entry on an Old Mobile Phone (6 kyu)
Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.
```javascript
------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------
```
Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

For example, to type a letter `"R"` you would press the `7` key three times (as the screen display for the current character cycles through `P->Q->R->S->7`). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

In order to send the message `"WHERE DO U WANT 2 MEET L8R"` a teen would have to actually do 47 button presses. No wonder they abbreviated.

For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.)


## 28 - Highest Scoring Word
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to it's position in the alphabet: `a = 1, b = 2, c = 3` etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.


## 29 - Statistics for an Athletic Association (6 kyu)
You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5:

`"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"`

Each part of the string is of the form: `h|m|s` where h, m, s are positive or null integer (represented as strings) with one or two digits. There are no traps in this format.

To compare the results of the teams you are asked for giving three statistics; range, average and median.

`Range` : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

`Mean or Average` : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

`Median` : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

Your task is to return a string giving these 3 values. For the example given above, the string result will be

`"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"`

of the form:

`"Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`

where hh, mm, ss are integers (represented by strings) with each 2 digits.

Remarks:
1. if a result in seconds is ab.xy... it will be given truncated as ab.
2. if the given string is "" you will return ""


## 30 - Consecutive strings (6 kyu)
You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if `n = 0` or `k > n` or `k <= 0` return "".


## 31 - Kind Remainder (7 kyu)
Write a function that will receive three arguments. The first two will always be arrays consisting of integers, the third one will be a string of letters. The lengths of the first two arrays will be equal, and the integers will always be positive.

You function should divide the first integer of the first array by the first one of the second array to find the remainder and then do the same with the second pair of integers, etc. If the biggest remainder of all found is an even number, the function should return the string in minuscule (small letters). Otherwise, the function should return the string in majuscule (capital letters).

Example:

function([16, 16], [10, 5], 'Doctor') should return 'doctor', because:

the remainder of the first pair of integers (16 divided by 10) is 6;

the remainder of the second pair is 1;
    
the biggest remainder found is 6, and since 6 is an even number --> the string is returned in minuscule.

## 32 - Equal Sides of An Array (6 kyu)
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return `-1`.

For example:

Let's say you are given the array `{1,2,3,4,3,2,1}`:
Your function will return the index `3`, because at the 3rd position of the array, the sum of left side of the index `({1,2,3})` and the sum of the right side of the index `({3,2,1})` both equal `6`.
    
Let's look at another one.    
You are given the array `{1,100,50,-51,1,1}`:   
Your function will return the index `1`, because at the 1st position of the array, the sum of left side of the index `({1})` and the sum of the right side of the index `({50,-51,1,1})` both equal `1`.

Last one:   
You are given the array `{20,10,-80,10,10,15,35}`   
At index 0 the left side is `{}`    
The right side is `{10,-80,10,10,15,35}`    
They both are equal to `0` when added. (Empty arrays are equal to 0 in this problem)    
Index 0 is the place where the left side and right side are equal.    

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:    
An integer array of length `0 < arr < 1000`. The numbers in the array can be any integer positive or negative.

Output:   
The lowest index `N` where the side to the left of `N` is equal to the side to the right of `N`. If you do not find an index that fits these rules, then you will return `-1`.

Note:
If you are given an array with multiple answers, return the lowest correct index.   
An empty array should be treated like a `0` in this problem.    

## 33 - Where my anagrams at? (5 kyu)
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:
```javascript
'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false
```
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:
```javascript
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
```

## 34 - 80's Kids #6: Rock 'Em, Sock 'Em Robots (5 kyu)
You and your friends have been battling it out with your Rock 'Em, Sock 'Em robots, but things have gotten a little boring. You've each decided to add some amazing new features to your robot and automate them to battle to the death.

Each robot will be represented by an object. You will be given two robot objects, and an object of battle tactics and how much damage they produce. Each robot will have a name, hit points, speed, and then a list of battle tacitcs they are to perform in order. Whichever robot has the best speed, will attack first with one battle tactic.

Your job is to decide who wins.

Example:
```javascript
 robot1 = {
  "name": "Rocky",
  "health": 100,
  "speed": 20,
  "tactics": ["punch", "punch", "laser", "missle"]
 }
 robot2 = {
   "name": "Missile Bob",
   "health": 100,
   "speed": 21,
   "tactics": ["missle", "missle", "missle", "missle"]
 }
 tactics = {
   "punch": 20,
   "laser": 30,
   "missile": 35
 }

 fight(robot1, robot2, tactics) -> "Missile Bob has won the fight."
```
```javascript
robot1 =
  name: "Rocky"
  health: 100
  speed: 20
  tactics: [
    "punch", "punch", "laser", "missle"
  ]
robot2 =
  name: "Missile Bob"
  health: 100
  speed: 21
  tactics: [
    "missle", "missle", "missle", "missle"
  ]
tactics =
  punch: 20
  laser: 30
  missile: 35

fight(robot1, robot2, tactics) # "Missile Bob has won the fight."
```
```javascript
robot1 = {
  "name" => "Rocky",
  "health" => 100,
  "speed" => 20,
  "tactics" => ["punch", "punch", "laser", "missle"]
 }
 robot2 = {
   "name" => "Missile Bob",
   "health" => 100,
   "speed" => 21,
   "tactics" => ["missle", "missle", "missle", "missle"]
 }
 tactics = {
   "punch" => 20,
   "laser" => 30,
   "missile" => 35
 }

 fight(robot1, robot2, tactics) # "Missile Bob has won the fight."
```
```javascript
 robot1.getName() => "Rocky"
  robot1.getHealth() => 100
  robot1.getSpeed() => 20
  robot1.getTactics() => ["punch", "punch", "laser", "missle"]

  robot2.getName() => "Missile Bob"
  robot2.getHealth() => 100
  robot2.getSpeed() => 21
  robot2.getTactics() => ["missle", "missle", "missle", "missle"]

  tactics = {
    "punch" => 20,
    "laser" => 30,
    "missile" => 35
  }

 fight(Robot robot1, Robot robot2, Map<String, Integer> tactics) -> "Missile Bob has won the fight."
```
robot2 uses the first tactic, "missile" because he has the most speed. This reduces robot1's health by 35. Now robot1 uses a punch, and so on.

Rules:
* A robot with the most speed attacks first. If they are tied, the first robot passed in attacks first.
* Robots alternate turns attacking. Tactics are used in order.
* A fight is over when a robot has 0 or less health or both robots have run out of tactics.
* A robot who has no tactics left does no more damage, but the other robot may use the rest of his tactics.
* If both robots run out of tactics, whoever has the most health wins. Return the message "{Name} has won the fight."
* If both robots run out of tactics and are tied for health, the fight is a draw. Return "The fight was a draw."

## 35 - xD-Arrays for dimmies (5 kyu)
Sometimes we need to use multiDIMensional arrays (array of arrays).

The goal of this kata is to code a dim function which will create an xD-array and fill it with a default value.

So..

`dim( d1 [,d2 [,d3 [... ]]], value )`

... will create an array of `d1` subarrays of `d2` sub-subarrays of `d3` sub-sub-subarrays (and so on), with each final item being equal to `value`.

You may assume:
* at least 2 arguments (d1and value) are provided
* each d argument will be a positive integer
* value argument may be a number, a string, a boolean, ...

If `value` is a function then the result of this function will be attribued to the item.

Examples:
```javascript
dim( 3,3,"x" ) // => [['x','x','x'],['x','x','x'],['x','x','x']]

dim( 2,2,2,0 ) // => [[[0,0],[0,0]],[[0,0],[0,0]]]

dim( 3, true ) // => [true,true,true]

var xxx=function(){ return "xX" }
dim( 2,5,xxx ) // => [['xX','xX','xX','xX','xX'],['xX','xX','xX','xX','xX']]

// if function provides different value on each iteration
// then produced subarrays must should be different!
var rnd=function(){ return (~~Math.random()*3) }
dim( 3,2,rnd ) // => (depends on results of rnd) 
  // eg: [[0,1],[2,1],[0,0]]
```


## 36 - Trim method (7 kyu)
The trim() method removes whitespace from both sides of a string. w3schools 

In this kata we are going to extend the trim method to be able to remove any character(upper and lower cases) from both sides of a string.
`Task:`   
Create a method called `trim` which removes the passed parameter `c`(upper and lower cases) from the leading and tailing of the string.

Note:   
1. If no parameter is being passed you need to remove the leading and tailing spaces. 
2. The passed parameter will only be alphabet(upper and lower cases) characters.
Examples:   
`string = "LLLHello Worldlll" and c = "l" => "Hello World"`   
`string = "Visca ElbarcaXxX" and c = "X" => "Visca Elbarca"`


## 37 - Poker cards encoder/decoder (5 kyu)
You are going to write a simple function - decoder/encoder for poker cards (any card game in fact).
Your task is to encode array of human readable symbols to array of codes or decode it doing this process with reversed way.
```javascript
['Ac', 'Ks', '5h', 'Td', '3c'] -> [0, 2 ,22, 30, 51] //encoding
[0, 51, 30, 22, 2] -> ['Ac', '3c', 'Td', '5h', 'Ks'] //decoding
```
Remember that the returned array must be sorted from lowest to highest code (or its symbol value).    

Card suits:
```javascript
name    |  symbol   |  precedence
---------------------------------
club          c            0
diamond       d            1
heart         h            2
spade         s            3
```
52-card deck:
```javascript
  c    |     d     |    h     |    s
---------------------------------------
 0: A      13: A      26: A      39: A
 1: 2      14: 2      27: 2      40: 2
 2: 3      15: 3      28: 3      41: 3
 3: 4      16: 4      29: 4      42: 4
 4: 5      17: 5      30: 5      43: 5
 5: 6      18: 6      31: 6      44: 6
 6: 7      19: 7      32: 7      45: 7
 7: 8      20: 8      33: 8      46: 8
 8: 9      21: 9      34: 9      47: 9
 9: T      22: T      35: T      48: T
10: J      23: J      36: J      49: J
11: Q      24: Q      37: Q      50: Q
12: K      25: K      38: K      51: K
```
Requirements    
input: array of strings (symbols)/integers (codes) you must encode/decode   
output: array of integers (codes)/strings (symbols) sorted by code values ASC   
* if input is not defined or is not and array return null, if is empty array return empty array   


## 38 - Sort-one,three,two (5 kyu)
Hey You !   
Sort these integers for me ...    
By name ...   
Do it now !   
Input:
* Range is 0-999
* There may be duplicates
* The array may be empty

## 39 - Object extend (5 kyu)
Let's make a function that returns a new object, containing all of the properties of any objects passed in as parameters.

The returned object should include the first instance of each property seen on any parameter object, and any other instance of that property should be ignored.

Also, if any parameter is not an object, it should be ignored. You can use the function isObject(object) to determine if a parameter is an object or not (it will return true or false).
```javascript
extend( {a: 1, b: 2}, {c: 3} ) // should === {a: 1, b: 2, c: 3}
extend( {a: 1, b: 2}, {c: 3}, {d: 4} ) // should === {a: 1, b: 2, c: 3, d: 4}
extend( {a: 1, b: 2}, {a: 3, c: 3} ) // should  === {a: 1, b: 2, c: 3}
extend( {a: false, b: null}, {a: true, b: 2, c: 3} ) // should  === {a: false, b: null, c: 3}
```

## 40 - Numbers in strings (7 kyu)
In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number.
    
For example, `solve("gh12cdy695m1") = 695`, because this is the largest of all number groupings.
    
Good luck!


## 41 - Check if two words are isomorphic to each other (6 kyu)
Two strings a and b are called isomorphic if there is a one to one mapping possible for every character of a to every character of b. And all occurrences of every character in a map to same character in b.

In this kata you will create a function that return True if two given strings are isomorphic to each other, and False otherwise.

Example:    
`True`    
```javascript
CBAABC DEFFED
RAMBUNCTIOUSLY THERMODYNAMICS
```
`False`   
```javascript
AB CC
ABAB CD
```


## 42 - Simple Fun #283: Censor The Forbidden Words (6 kyu)

Task    

Codewars Weekly has gained popularity in the past months and is receiving lots of fan letters. Unfortunately, some of the readers use offensive words and the editor wants to keep the magazine family friendly.

To manage this, you have been asked to implement a censorship algorithm. You will be given the fan letter text and a list of forbiddenWords. Your algorithm should replace all occurrences of the forbidden words in the text with sequences of asterisks of the same length.

Be careful to censor only words, no one want to see `"classic"` spelled as `"cl***ic"`.

Input/Output    

`[input]` string `text`   

Text to censor, composed of mixed case English (or non-English, for random cases) words separated by a single whitespace character each. No punctuation is used. All words may consist of Latin alphabet letters only.

`[input]` string array `forbiddenWords`

The list of words to censor, all in lowercase.

`[output]` a string

The censored text. Its length should be the same as the length of text.

Example   

For `text = "The cat does not like the fire" and forbiddenWords = ["cat","fire"], the output should be "The *** does not like the ****"`.


## 43 - Directions Reduction (5 kyu)
Once upon a time, on a way through the old wild west,…    

… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!    

How I crossed the desert the smart way.   

The directions given to the man are, for example, the following   
`["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].`   

You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:    
`["WEST"]`

Other examples:

In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away. What a waste of time! Better to do nothing.

The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].   

Task    

Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).   

The Haskell version takes a list of directions with data Direction = North | East | West | South. The Clojure version returns nil when the path is reduced to nothing. The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.   

Examples    
```javascript
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []
```

## 44 - Sum of a nested list (7 kyu)

Implement a function to calculate the sum of the numerical values in a nested list. For example :
`sumNested([1, [2, [3, [4]]]]) => 10`


## 45 - Compare Strings by Sum of Chars (7 kyu)
Compare two strings by comparing the sum of their values (ASCII character code).
For comparing treat all letters as UpperCase.

Null-Strings should be treated as if they are empty strings.
If the string contains other characters than letters, treat the whole string as it would be empty.

Examples:   
```javascript
"AD","BC" -> equal

"AD","DD" -> not equal

"gf","FG" -> equal

"zz1","" -> equal

"ZzZz", "ffPFF" -> equal

"kl", "lz" -> not equal

null, "" -> equal
```
Your method should return true, if the strings are equal and false if they are not equal.