/*
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/

var Name="     \t \tALi Ahmed khan\t \n"
console.log("before Stripping :  " +Name);
var afterStripping= Name.trim();
console.log("After Stripping : " + afterStripping);
//alert(famous_person + " once said, "+ quote);