/*
 Think of something you could store in a array. For example, 
 you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
  Write a program that creates a list containing these items.
 */

var rivers=["Indus","chenab","Ravi"];
var mountains=["K2","Mount Everst","Nanga Parbat"];
var cities=["Islamabad","karachi","Bahawlapur"];
var compiledList=rivers.concat(mountains).concat(cities);
console.log(compiledList);