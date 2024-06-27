function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich using the following items\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
}
make_sandwich("cheese", "mayo", "ketchup", "chicken", "lettuce", "onion");
make_sandwich("brown bread", "chicken", "mayo", "lettuce");
make_sandwich("egg", "mayo", "black pepper");
