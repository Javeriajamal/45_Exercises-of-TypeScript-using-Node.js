function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    //initialize car with object and it's manufact & model
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // to add additional options to car's object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var My_car = create_car("toyota", "corolla", "color : Black", "year: 2000");
console.log(My_car);
