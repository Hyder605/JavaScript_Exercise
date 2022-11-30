
/*
Checking Usernames: Do the following to create a program 
that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users.
 Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used.
 If it has, print a message that the person will need to enter a new username. 
 If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

var current_users=["zakir","faisal","nadeem","alia","saba"];
var new_users=["farhan","faris","alia","ZAkir","nida"];
for (i in new_users){
    user=new_users[i].toLowerCase()        
    if (current_users.includes(user)) {
       
        console.log(user+"  Username already exist,please enter new user name")
    }
    else{
        console.log(user +" Username is Availabale")
    }
}

