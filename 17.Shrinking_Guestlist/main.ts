// making list of guests invited for dinner
let GuestList = ["Umnah","Hafsa","Laiba","Maha","Fatima"];
// making variable for guest not coming & assigning it value from Guestlist
let GuestNOTComing = GuestList[2];
// printing a guest can't come for dinner
console.log(GuestNOTComing, "can't come for dinner tonight.");
// removing guest name from index 2 and adding another name
GuestList.splice(2, 2, "Khadija");
// printing that a bigger table is found
console.log("Good news! i have found a bigger table for dinner!");
// adding new guest at the starting of guestlist
GuestList.unshift("Maria");
// adding new guest name at the end of the guestlist.
GuestList.push("Hania");
// making a variable for storing middleindex of guestlist
let middleIndex : number = Math.floor(GuestList.length /2);
// adding new guest to the middle of guestlist
GuestList.splice(middleIndex, 0, "Ayesha");
// printing list has updated
console.log("Updated list of Guests");
// inviting new guests added to the list
GuestList.forEach(oneGuest => console.log(`Hey ${oneGuest}! would you like to have dinner with me?`));

// informing msg that the table won't be available on time
console.log("Unfortunately, the table won't arrive on time,so we can only invite two guests.");
// Run loop until just two guests are left
 while(GuestList.length > 2){
    // removing guests from guestlist
    let removeGuest = GuestList.pop();
    // printing apology msg to the removed guests
   console.log(`Sorry! ${removeGuest} I can't invite you for dinner.`);
 }
   // printing invitation to last two guests
    console.log("Invitation to last two guests");
GuestList.forEach(Lasttwoguests => console.log(`Luckily! ${Lasttwoguests} you're still invited for dinner!`));

// removing last two guests
GuestList.pop();
GuestList.pop();
console.log("Empty GuestList");
