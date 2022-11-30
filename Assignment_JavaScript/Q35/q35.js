/*
Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. 
• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet!
*/

var animals=["cow","goat","camel"];
for (i in animals){
    console.log(animals[i])
}

var animals=["cow","goat","camel"];
for (i in animals){
    if (animals[i]=="cow"){
            console.log(animals[i] + " is moslty seen in villages ")

    }
    if (animals[i]=="goat"){
        console.log(animals[i] + " is moslty seen in mountains ")

    }
    if (animals[i]=="camel"){
        console.log(animals[i] + " is moslty seen in desert ")

    }       
}
console.log("THe common thing between these animals is that, they provide milk")

