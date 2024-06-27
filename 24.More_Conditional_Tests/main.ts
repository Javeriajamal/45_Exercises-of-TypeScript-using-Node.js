let Fruit = "Apple";
let UpperCase = "APPLE";
let RedApple = "10"
let GreenApple = "15"
let Fruitlist = ["apple","mango","strawberry","peach"];

// Test for Equality 
console.log("Is Fruit equal to 'Apple'?");
console.log(Fruit == "Apple");
//Test for Inequality
console.log("Is Fruit not equal to 'Apple'?");
console.log(Fruit != "Apple");

// Test for Lowercase
console.log("Is APPLE equal to apple after converting in lowercase?");
console.log(UpperCase.toLowerCase() == "apple");

console.log("Is APPLE equal to APPLE after converting to lowercase?");
console.log(UpperCase.toLowerCase() == "APPLE");

// Numerical Tests/ test for equality
console.log("Is RedApple equal to '10'?");
console.log(RedApple == "10");

// test for inequality
console.log("Is GreenApple not equal to '15'?");
console.log(GreenApple != "15");
// test for greater than
console.log("Is RedApple greater than GreenApple?");
console.log(RedApple > GreenApple);
// test for less than
console.log("Is 10 less than 15?");
console.log(10 < 15);
// test for greater or equals to
console.log("Is GreenApple greater than or equals to 12?");
console.log(GreenApple >= "12");
// test for less than or equals to 
console.log("Is RedApple less than or equals to 0?")
console.log(RedApple <= "0");


// Test using 'And'
console.log("RedApple is less than GreenApple and GreenApple is equal to 15");
console.log(RedApple < GreenApple && GreenApple == '15');

//Test using 'OR'
console.log("GreenApple is greater than 10 OR equals to 20");
console.log( GreenApple < '10' || GreenApple == '20');

// Test weather an item is include in an array
console.log("Is peach added in my Fruitslist array?");
console.log('peach' in Fruitlist);

// Test weather an item is not include in an array
console.log("Is 'orange' not added in Fruitlist array?");
console.log('orange'!in Fruitlist);




