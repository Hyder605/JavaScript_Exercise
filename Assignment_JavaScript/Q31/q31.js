/*
No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/


//Without users
var userName=["admin","faisal","nadeem","alia","saba"];
userName.splice(0,userName.length);
if (userName.length===0){
    console.log("We need to find some users")
}
else{
    for (i in userName) {
    
        if (userName[i]=="admin"){
        console.log("Hello admin,would you ike to see a status report")
        }
        else{
        console.log("Hello "+ userName[i] + ", Thank you for logging in again")
        }
    }
}
