let GuestList = ["Umnah","Hafsa","Laiba","Maha","Fatima"];
let GuestNOTComing = GuestList[2];
console.log(GuestNOTComing, "can't come for dinner tonight.");
GuestList.splice(2, 2, "Khadija");
GuestList.forEach(Guest => console.log (`Hey ${Guest}! would you like to come on dinner tonight?`));
 