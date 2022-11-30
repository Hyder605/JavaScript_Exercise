/*
Name Cases: 
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

var Name="nadeem ali";
alert("Name of Person in Upper Case " + Name.toUpperCase());
alert("Name of Person in Lower Case " + Name.toLowerCase());
var a=Name.split(" ");
var b=a[0];
var titleF=b[0].toUpperCase() + b.slice(1);
var c=a[1];
var titleL=c[0].toUpperCase() + c.slice(1);



alert("Name of Person in Title Case " + titleF + " "+ titleL );