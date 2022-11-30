/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
• Start with your program from Exercise 16. 
Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. 
Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. 
Print your list to make sure you actually have an empty list at the end of your program.

*/

var guestList=["Ali","Amir","Ahmed","Mobeen"];
guestList.unshift("Farooq"); //inserting guest at the begining of the list
guestList.push("Waqar"); //inserting guest at the end of the list
guestList.splice(3,0,"Wahab"); //inserting guest at the index no 3 of the list

for (i in guestList) {
    console.log("Greetings " +guestList[i]+ ", Please come for the dinner tonight")
}
console.log("list of total guests: " + guestList);

console.log("There is a big hall for the dinner,please be my guest");
console.log("Due to some unkown reasons and space Issue I can invite only two people");

while (guestList.length>2) {
    var removedG=guestList.pop();
    console.log("Dear " + removedG+ " Sorry due to some reason we can't invite you this time")

}

console.log("Final list of people to be invited:  " +guestList);