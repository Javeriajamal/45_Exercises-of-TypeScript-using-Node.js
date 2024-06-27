function create_car (manufacturer, model, ...options) {
    
    //initialize car with object and it's manufact & model
    let car = {
        manufacturer : manufacturer,
        model : model,
    
    };
// to add additional options to car's object
    options.forEach(option => {
        let [key,value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

let My_car = create_car("toyota","corolla","color : Black","year: 2000");

console.log(My_car);