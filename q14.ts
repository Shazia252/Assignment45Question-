let guestList = ["Asim","Usman","Qasim","Hashim"];
let dontCome = guestList[0];
console.log(dontCome,"Nahi asakta");
guestList.splice(0,1,"Rehman");
guestList.forEach(guest => console.log(`Salam ${guest}, would you like to Dinner with me?`));