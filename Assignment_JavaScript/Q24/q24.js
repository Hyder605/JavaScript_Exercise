/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/

console.log('"Pakistan"=="Pakistan" ?? I predict True');
console.log('"Pakistan"=="Pakistan" ??', "Pakistan"=="Pakistan");

console.log('"Pakistan"=="India" ?? I predict False');
console.log('"Pakistan"=="India" ??', "Pakistan"=="India");

console.log('"KArachi"=="karachi" ?? I predict False');
console.log('"KArachi"=="karachi" ??', "KArachi"=="karachi");


console.log("10>5?? I predict true");
console.log("10>5?? " , 10>5);


console.log("true&falsee?? I predict false");
console.log("true&false?? " , true && false);

console.log("true&true?? I predict  true");
console.log("true&true?? " , true && true);


console.log("true or false?? I predict  true");
console.log("true or false?? " , true || false);

var num=[2,3,5,6];
console.log("is 3 present in num list?? I predict True");
console.log(num.includes(3));

var num=[2,3,5,6];
console.log("is 77 not present in num list?? I predict True");
console.log(!num.includes(77));