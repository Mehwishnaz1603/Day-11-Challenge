// 🚀 Day 11 Challenge: Start Coding! 🚀//
// Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var usernames = []; // Empty array
// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print greetings
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
//Q32: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
var current_users = ['Arsalan', 'Babar', 'daoud', 'Kumail', 'Wajahat'];
var new_users = ['Arsalan', 'Talha', 'Hamdan', 'Babar', 'Wajahat'];
for (var _a = 0, new_users_1 = new_users; _a < new_users_1.length; _a++) {
    var new_username = new_users_1[_a];
    if (current_users.includes(new_username)) {
        console.log("The username '".concat(new_username, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_username, "' is available."));
    }
}
//Q33: Checking Usernames: Do the following to create a program that simulates how websites ensure that
//everyone has a unique username.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Loop through the array
for (var _b = 0, numbers_1 = numbers; _b < numbers_1.length; _b++) {
    var number = numbers_1[_b];
    var ordinalEnding = void 0;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = 'nd';
    }
    else if (number === 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    console.log("".concat(number).concat(ordinalEnding));
}
