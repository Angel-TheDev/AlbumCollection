export default function singleArtist(artist){
    return `
    <img src='${artist.imageURL}' id='main-image' alt='Artist image'></img>
    
    <div id='name-info'><h3>${artist.name}</h3>
    <div id='button-box'>
        <button class='edit-artist'>Edit Artist</button>
        <button class='delete-artist'>Delete Artist</button>
        <section class='edit-box'>
            <input class='artist_id' type='hidden' value='${artist.artistId}'>
            <input class='edit-artist_imageUrl' type='hidden' value='${artist.imageURL}'>
            <input class='edit-artist_name' type='text' value='${artist.name}'>
            <input class='edit-artist_homeTown' type='text' value='${artist.homeTown}'>
            <textarea class='edit-artist_description'>${artist.description}</textarea>
            <button class='edit-artist_submit'>Submit</button>
        </section>
    </div>
    <p>${artist.description}</p>
    </div>
    <div id='main-children'>
    <h3>Albums</h3>

    <button class='add-album-modal'>Add Album</button>
    <ul id='album-list'>
        ${artist.albums.map(album => {
            return `
                <li>
                    <div class='child-image'>
                    <img src='${album.imageURL}'></img>
                    </div>
                    <h4 class='target'>${album.name}</h4>
                    <input class='album_id' type='hidden' value='${album.albumId}'>
                    <input class='album_name' type='hidden' value='${album.name}'>
                    <input class='album_recordLabel' type='hidden' value='${album.recordLabel}'>
                    <input class='artist_Id' type='hidden' value='${album.artistId}'>
                </li>
    `;
        })
        .join("")}
    </ul>
    </div>
    `
}