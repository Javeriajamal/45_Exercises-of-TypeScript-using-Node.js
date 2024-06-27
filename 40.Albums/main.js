function Make_Album(Artist_name, Album_title, Tracks) {
    var album = {
        Artist: Artist_name,
        Title: Album_title,
    };
    if (Tracks !== undefined) {
        album.Tracks = Tracks;
    }
    return album;
}
var Album1 = (Make_Album("BTS", "Love Yourself"));
var Album2 = (Make_Album("BTS", "Map of the Soul:7"));
var Album3 = (Make_Album("BTS", "Wings", 3));
console.log(Album1);
console.log(Album2);
console.log(Album3);
