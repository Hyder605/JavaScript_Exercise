

/*
Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase 
the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.


 */
var magician_names=["Nastoor","Hamoon", "Zakuta","Bilbatori"];

function make_great(magicians){
    for (items in magicians){
        magicians[items]="Great!"+ magicians[items]
    }

}

make_great(magician_names)

function show_magicians(magicians){
    for (items in magicians){
        console.log(magicians[items])
    }

}
show_magicians(magician_names)