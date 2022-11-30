/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.
*/

var guestList=["Ali","Amir","Ahmed","Mobeen"];
guestList.unshift("Farooq"); //inserting guest at the begining of the list
guestList.push("Waqar"); //inserting guest at the end of the list
guestList.splice(3,0,"Wahab"); //inserting guest at the index no 3 of the list

for (i in guestList) {
    console.log("Greetings " +guestList[i]+ ", Please come for the dinner tonight")
}

console.log("There is a big hall for the dinner,please be my guest");
console.log("List of  people to be invited:  " ,guestList);
console.log("Total number of people to be invited:  " ,guestList.length);