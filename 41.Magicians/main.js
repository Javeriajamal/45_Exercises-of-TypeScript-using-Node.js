function Show_Magicians(Magician) {
    Magician.forEach(function (Name) { return console.log(Name); });
}
var Magicians_Name = ["Harry Potter", "Harry Houdini", "David Copperfield"];
Show_Magicians(Magicians_Name);
