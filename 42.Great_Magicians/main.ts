function Show_Magicians(Magician:String[]) {
    Magician.forEach(Name => console.log(Name));
    
} 
// making funtion to print the Great 
function make_Great(Magicians:String[]){
   return Magicians.map(name => `The Great ${name}`);
    
}

let Magicians_Name = ["Harry Potter","Harry Houdini","David Copperfield"];
 
let great_magician = make_Great(Magicians_Name);

console.log(great_magician);
                                                        
Show_Magicians(great_magician);