let UserName = ["Farjad","Ayesha","Admin","Muddasir","Laiba"];

UserName.forEach(oneUser => {
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`);
    }else {
        console.log(`Hello ${oneUser}, Thank you for logging in again.`);

    }   
 
})
