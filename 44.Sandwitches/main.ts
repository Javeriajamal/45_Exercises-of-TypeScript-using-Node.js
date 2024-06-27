function make_sandwich(...items : String[]) {
    console.log("\nMaking a sandwich using the following items\n");
    items.forEach(singleItem => console.log(singleItem));
    
}

make_sandwich("cheese","mayo","ketchup","chicken","lettuce","onion");

make_sandwich("brown bread","chicken","mayo","lettuce");

make_sandwich("egg","mayo","black pepper");