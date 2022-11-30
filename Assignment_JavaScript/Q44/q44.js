
/*
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. 
Call the function three times, using a different number of arguments each time.
*/
function sandwiches(...arg){
    console.log("As per your instructions,the sandwitch contain following items")

    for (i in arg){
        console.log("item No. "+ (Number(i)+1) + " "+ arg[i])
    }

}

sandwiches("beef","cheese","tomato")
sandwiches("beef","cheese","tomato","Mayones")
sandwiches("beef","cheese","tomato","Mayones","Ketchup")



