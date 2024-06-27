let Numbers = [1,2,3,4,5,6,7,8,9];
for (let oneNumber of Numbers) {
    let Ordinalending: String;
    if (oneNumber === 1) {
        Ordinalending = "st"  
    }else if (oneNumber === 2) {
        Ordinalending = "nd"
    } else if (oneNumber === 3) {
       Ordinalending = "rd" 
    } 
    else {
        Ordinalending = "th"
    } 
        
    console.log(`${oneNumber},${Ordinalending}`)


}