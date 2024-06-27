function Make_shirt(Size:String = "Large", Message:String = "I Love TypeScript") {
   console.log(`Creating a ${Size} shirt with a message ${Message} printed on it`);

    
}

Make_shirt();

// calling function now with a Medium size and default message
Make_shirt("Medium");

// Now calling function with small size and a diff message
Make_shirt("small","Love Yourself");
