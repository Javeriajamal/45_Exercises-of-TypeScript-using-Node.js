function Show_Magicians(Magician:String[]) {
    Magician.forEach(Name => console.log(Name));
    
} 
// making funtion to print the Great 
function make_Great(Magicians:String[]){
   return Magicians.map(name => `The Great ${name}`);
    
}

let Magicians_Name = ["Harry Potter","Harry Houdini","David Copperfield"];
 
// making a copy of original array using .slice
let copy_magicians_name = Magicians_Name.slice();

// modify the copied array to include the great
let copy_great_magicians = make_Great(copy_magicians_name);

console.log("original array\n")
Show_Magicians(Magicians_Name);

console.log("\ncoppied array\n")
Show_Magicians(copy_great_magicians);