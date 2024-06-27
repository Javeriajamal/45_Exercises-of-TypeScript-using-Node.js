var UserName = ["Farjad", "Ayesha", "Admin", "Muddasir", "Laiba"];
UserName = [];
if (UserName.length === 0) {
    console.log("Your array is empty, we need to find users!");
}
else {
    UserName.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", Thank you for logging in again."));
        }
    });
}
