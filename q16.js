// Creating a guest List Array
var guestList = ["Asim", "Usman", "Qasim", "Hashim"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
console.log(dontCome, "Nahi asakta hain");
// Add or Remove values form Guest List 
guestList.splice(0, 1, "Rehman");
// Massage Print for Bigger Table
console.log("Good News ! We have found a Bigger Table For Dinner");
// Adding a new value at starting index of array
guestList.unshift("Ahmed");
// Adding a new value at ending index of array
guestList.push("Zain");
// Get a middle of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");
// Print Message  of update list
console.log("Updated List of our Guest");
// Sending a invitation message to our guests one by one with thier names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", would you like to Dinner with me?")); });
console.log("unfortunately, the new dinner table wont on time , so I can only invite two Guest to dinner with me");
// while  loop to remove guests from the array until only two names remain 
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, " I Cant invite you to dinner"));
}
// Sending a invitation to the last two guest on the list
console.log("Invitation to the last 2 Guest");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ",yoy are still invited to dinner")); });
// Removing last two Guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
