function Show_Magicians(Magician) {
    Magician.forEach(function (Name) { return console.log(Name); });
}
// making funtion to print the Great 
function make_Great(Magicians) {
    return Magicians.map(function (name) { return "The Great ".concat(name); });
}
var Magicians_Name = ["Harry Potter", "Harry Houdini", "David Copperfield"];
var great_magician = make_Great(Magicians_Name);
console.log(great_magician);
Show_Magicians(great_magician);
