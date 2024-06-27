function describe_City(City, Country) {
    if (Country === void 0) { Country = "Pakistan"; }
    console.log("".concat(City, " is in ").concat(Country));
}
describe_City("Karachi");
describe_City("Hydrabad");
describe_City("Toronto", "Canada");
