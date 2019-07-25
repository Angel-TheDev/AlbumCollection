export default function AddAlbumModal(){
    return `
    <section class='add-album'>
        <input class='add-album_name' type='text' placeholder='Add album name...'>
        <input class='add-album-recordlabel' type='text' placeholder='Add record label...'>
        <input class='add-album-imageurl' type='text' placeholder='Add album cover URL...'>
        <input class='add-album-description' type='text' placeholder='Add album description...'>
        <button class='add-album_submit'>Submit</button>
    </section>
    `
}