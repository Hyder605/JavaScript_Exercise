
/*

Unchanged Magicians: Start with your work from Exercise 40. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that 
you have one array of the original names and one array with the Great added to each magician’s name.
*/
var magician_names=["Nastoor","Hamoon", "Zakuta","Bilbatori"];

function make_great(magicians){
    var list=[]
    new_list=list.concat(magicians)
        
    for (items in new_list){
    new_list[items]="Great!"+ new_list[items]
        
    }
    console.log(new_list)
    

}


function show_magicians(magicians){
    for (items in magicians){
        console.log(magicians[items])
    }

}


make_great(magician_names) //Array with changed name
show_magicians(magician_names) //Original Array
