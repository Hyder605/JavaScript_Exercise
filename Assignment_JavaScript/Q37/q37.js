/*
Large Shirts: Modify the make_shirt() function 
so that shirts are large by default with a message that reads I love JavaScript.
 Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.


*/

function make_shirt(size,text){
    lowerC=size.toLowerCase()
    if (lowerC=="large" || lowerC=="medium"){
        console.log("I love JavaScript")
    }
    else{
        console.log("This is not a medium or large size shirt")
        console.log("The Text printed on the shirt will be "+ "'"+text+"'")

    }
    
    }

make_shirt("large","Coders");
make_shirt("small","Coders");