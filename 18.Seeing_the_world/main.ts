// creating Array of favourite places to visit all around the world
let DreamPlaces : String[] = ["Makkah","Madina","SouthKorea","Italy","Turkey"];

// changing Array in original order
console.log("Original Order", DreamPlaces);

// changing Array into alphabetical order
console.log("Alphabetical Order", [...DreamPlaces].sort());

// printing Array is still in it's original order
console.log("Still in original order:", DreamPlaces);

// changing Array into reverse order
console.log("Reversed Order:", [...DreamPlaces].reverse());

// printing Array is still in it's original order
console.log("Still in it's Original Order:", DreamPlaces);

// changing original order into reversed order
console.log("Original Array Reversed:", DreamPlaces.reverse());

// printing original order has been changed
console.log("Original order has changed:", DreamPlaces);

// changing original order of Array again
console.log("Original Array reversed again:",DreamPlaces.reverse());

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
