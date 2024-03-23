var guestList = ["Asim", "Usman", "Qasim", "Hashim"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi asakta");
guestList.splice(0, 1, "Rehman");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", would you like to Dinner with me?")); });
