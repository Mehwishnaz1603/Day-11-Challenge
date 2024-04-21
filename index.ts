                 // 🚀 Day 11 Challenge: Start Coding! 🚀//
// Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
 //• If the list is empty, print the message We need to find some users!
 //• Remove all of the usernames from your array, and make sure the correct message is printed.
              
 let usernames: string[] = []; // Empty array

// Check if the list of users is not empty
if (usernames.length > 0) {
  // Loop through the array and print greetings
  for (let username of usernames) {
    if (username === 'admin') {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
} else {
  console.log("We need to find some users!");
}

//Q32: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let current_users: string[] = ['Arsalan', 'Babar', 'daoud', 'Kumail', 'Wajahat'];

let new_users: string[] = ['Arsalan', 'Talha', 'Hamdan', 'Babar', 'Wajahat']; 

for (let new_username of new_users) {
    if (current_users.includes(new_username)) {
        console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}

//Q33: Checking Usernames: Do the following to create a program that simulates how websites ensure that
//everyone has a unique username.

let numbers: number[] = [1,2,3,4,5,6,7,8,9];
//Loop through the array
for (let number of numbers) {
    let ordinalEnding: string;
 if (number ===1) {
        ordinalEnding = "st";
    } else if (number === 2) {
        ordinalEnding = 'nd';
    } else if (number === 3) {
        ordinalEnding = 'rd';
    } else {
        ordinalEnding = 'th';
    }
console.log(`${number}${ordinalEnding}`);}


