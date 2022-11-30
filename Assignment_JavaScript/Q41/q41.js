/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.
*/
function show_magicians(magicians){
    for (items in magicians){
        console.log(magicians[items])
    }

}
var magician_names=["Nastoor","Hamoon", "Zakuta","Bilbatori"];

show_magicians(magician_names)