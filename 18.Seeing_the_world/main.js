var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var DreamPlaces = ["Makkah", "Madina", "SouthKorea", "Italy", "Turkey"];
// changing Array in original order
console.log("Original Order", DreamPlaces);
// changing Array into alphabetical order
console.log("Alphabetical Order", __spreadArray([], DreamPlaces, true).sort());
// printing Array is still in it's original order
console.log("Still in original order:", DreamPlaces);
// changing Array into reverse order
console.log("Reversed Order:", __spreadArray([], DreamPlaces, true).reverse());
// printing Array is still in it's original order
console.log("Still in it's Original Order:", DreamPlaces);
// changing original order into reversed order
console.log("Original Array Reversed:", DreamPlaces.reverse());
// printing original order has been changed
console.log("Original order has changed:", DreamPlaces);
// changing original order of Array again
console.log("Original Array reversed again:", DreamPlaces.reverse());
// printing Array has changed to the original order
console.log("Order is back to original:", DreamPlaces);
// changing Array into alphabetical order again
console.log("Alphabeticle Order:", DreamPlaces.sort());
// printing original Array is changed in alphabetical order 
console.log("Original Array is sorted Alphabetically:", DreamPlaces);
// changing Array into reverse order again
console.log("Reverse original Array again:", DreamPlaces.reverse());
// printing original order is now changed again into reverse order
console.log("original Array has changed again:", DreamPlaces);
