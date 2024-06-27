function Make_Album (Artist_name:String, Album_title:String, Tracks?:number) {
    let album : {Artist: String, Title: String, Tracks?: number} = {
        Artist : Artist_name,
        Title : Album_title,

    };
    if (Tracks !== undefined) {
        album.Tracks = Tracks;
        
    }

    return album;
}

    let Album1 = (Make_Album("BTS","Love Yourself"));

    let Album2 = (Make_Album("BTS","Map of the Soul:7"));

    let  Album3 = (Make_Album("BTS","Wings", 3));

    console.log(Album1);
    console.log(Album2);
    console.log(Album3);
