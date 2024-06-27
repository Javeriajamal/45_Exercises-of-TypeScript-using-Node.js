function Show_Magicians(Magician) {
    Magician.forEach(function (Name) { return console.log(Name); });
}
// making funtion to print the Great 
function make_Great(Magicians) {
    return Magicians.map(function (name) { return "The Great ".concat(name); });
}
var Magicians_Name = ["Harry Potter", "Harry Houdini", "David Copperfield"];
// making a copy of original array using .slice
var copy_magicians_name = Magicians_Name.slice();
// modify the copied array to include the great
var copy_great_magicians = make_Great(copy_magicians_name);
console.log("original array\n");
Show_Magicians(Magicians_Name);
console.log("\ncoppied array\n");
Show_Magicians(copy_great_magicians);
