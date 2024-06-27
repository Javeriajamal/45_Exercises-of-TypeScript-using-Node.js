var CurrentUser = ["Sofia", "Laiba", "Ahad", "muddasir", "Umnah"];
var NewUser = ["Eshal", "Minhal", "Muddasir", "Hashir", "Sofia"];
NewUser.forEach(function (New_user_One) {
    var Conditions = CurrentUser.some(function (current_user_One) { return current_user_One.toLowerCase() === New_user_One.toLowerCase(); });
    if (Conditions) {
        console.log("Sorry, ".concat(New_user_One, " is already taken."));
    }
    else {
        console.log("The user name ".concat(New_user_One, " is available!"));
    }
});
