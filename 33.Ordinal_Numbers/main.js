var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, Numbers_1 = Numbers; _i < Numbers_1.length; _i++) {
    var oneNumber = Numbers_1[_i];
    var Ordinalending = void 0;
    if (oneNumber === 1) {
        Ordinalending = "st";
    }
    else if (oneNumber === 2) {
        Ordinalending = "nd";
    }
    else if (oneNumber === 3) {
        Ordinalending = "rd";
    }
    else {
        Ordinalending = "th";
    }
    console.log("".concat(oneNumber, ",").concat(Ordinalending));
}
