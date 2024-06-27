function Make_shirt(Size, Message) {
    if (Size === void 0) { Size = "Large"; }
    if (Message === void 0) { Message = "I Love TypeScript"; }
    console.log("Creating a ".concat(Size, " shirt with a message ").concat(Message, " printed on it"));
}
Make_shirt();
// calling function now with a Medium size and default message
Make_shirt("Medium");
// Now calling function with small size and a diff message
Make_shirt("small", "Love Yourself");
