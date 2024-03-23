var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Writing Array of Countries and Print its origin  Order
var CountriesToVisit = ["China", "Denmark", "Brazil", "Argetina"];
console.log("Origin Order", CountriesToVisit);
//  Print the Array in Alphabetical Order without modifying the Actual Array List
console.log("Alphabetical Order", __spreadArray([], CountriesToVisit, true).sort());
// Show that the Array is still in the Original Order
console.log("Still in Original ", CountriesToVisit);
// Print the Array in Reversed Order without modifying the Actual Array List
console.log("Reverse Order:", __spreadArray([], CountriesToVisit, true).reverse());
// Show that the Array is still in the Original Order
console.log("Still in Original ", CountriesToVisit);
//  We have changed the original Array Order Now
console.log("Original Array Reversed", CountriesToVisit.reverse());
//  Print the array to show that it's back to its original order
console.log("Back to Original Order", CountriesToVisit.reverse());
// Print the Array to show that its order has been changed i Alphabetical order now
console.log("Sorted in Alphabetical order", CountriesToVisit.sort());
//  We have changed again the original Array Order Now
console.log("Original Array Reversed Again", CountriesToVisit.reverse());
