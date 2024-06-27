let CurrentUser = ["Sofia","Laiba","Ahad","muddasir","Umnah"];

let NewUser = ["Eshal","Minhal", "Muddasir","Hashir","Sofia"];

NewUser.forEach(New_user_One => {

    let Conditions = CurrentUser.some (current_user_One => current_user_One.toLowerCase() === New_user_One.toLowerCase()) 
   
    if (Conditions) {
       console.log(`Sorry, ${New_user_One} is already taken.`)

    }else{
        console.log(`The user name ${New_user_One} is available!`);
   
    }


})