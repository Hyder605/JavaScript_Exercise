/*
Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time.
*/

var friends=["Ali", "Ahmed", "Nasir", "Zohaib","Waleed"];
for(i in friends) {
    console.log("index No " + i + " = "+ friends[i])
}