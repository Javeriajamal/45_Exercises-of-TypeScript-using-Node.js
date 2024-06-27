var GuestList = ["Umnah", "Hafsa", "Laiba", "Maha", "Fatima"];
var GuestNOTComing = GuestList[2];
console.log(GuestNOTComing, "can't come for dinner tonight.");
GuestList.splice(2, 2, "Khadija");
GuestList.forEach(function (Guest) { return console.log("Hey ".concat(Guest, "! would you like to come on dinner tonight?")); });
