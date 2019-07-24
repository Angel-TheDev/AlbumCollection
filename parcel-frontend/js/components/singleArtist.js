export default function singleArtist(artist){
    return `
    <img src='${artist.imageURL}' id='main-image' alt='Artist image'></img>
    <div id='name-info'><h3>${artist.name}</h3>
    <div id='button-box'>
    <button>Edit Artist</button>
    <button class='delete-artist'>Delete Artist</button>
        <section class='edit-box'>
            <input class='artist_id' type='hidden' value='${artist.artistId}'>
            <input class='edit-artist_name' type='text' value='${artist.name}'>
            <input class='edit-artist_homeTown' type='text' value='${artist.homeTown}'>
            <button class='edit-artist_submit'>Submit</button>
        </section>
    </div>
    <p>${artist.description}</p>
    </div>
    <div id='main-children'>
    <h3>Albums</h3>
    <button class='add-album-modal'>Add Album</button>
    <ul>
        ${artist.albums.map(album => {
            return `
                <li>
                    <div id='child-image'>
                    <img src='${album.imageURL}'></img>
                    </div>
                    <h4>${album.name}</h4>
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