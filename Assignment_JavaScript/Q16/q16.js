/*
More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
*/

var guestList=["Ali","Amir","Ahmed","Mobeen"];
guestList.unshift("Farooq"); //inserting guest at the begining of the list
guestList.push("Waqar"); //inserting guest at the end of the list
guestList.splice(3,0,"Wahab"); //inserting guest at the index no 3 of the list

for (i in guestList) {
    console.log("Greetings " +guestList[i]+ ", Please come for the dinner tonight")
}

console.log("There is a big hall for the dinner,please be my guest");