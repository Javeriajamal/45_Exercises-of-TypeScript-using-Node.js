let GuestList = ["Umnah","Hafsa","Laiba","Maha","Fatima"];
let GuestNOTComing = GuestList[2];
console.log(GuestNOTComing, "can't come for dinner tonight.");
GuestList.splice(2, 2, "Khadija");
console.log("Good news! i have found a bigger table for dinner!");
GuestList.unshift("Maria");
GuestList.push("Hania");
let middleIndex : number = Math.floor(GuestList.length /2);
GuestList.splice(middleIndex, 0, "Ayesha");
console.log("Updated list of Guests");
GuestList.forEach(oneGuest => console.log(`Hey ${oneGuest}! would you like to have dinner with me?`));
 