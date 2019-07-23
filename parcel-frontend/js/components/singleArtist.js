export default function singleArtist(artist){
    return `
    <h3>${artist.name}</h3>
    <button class='add-album-modal'>Add Album</button>
    <ul>
        ${artist.albums.map(album => {
            return `
                <li>
                    <div id='main-image'>
                    <img src=''></img>
                    </div>

                    <div id='name-info'
                    <h3>${album.name}</h3>
                    <input class='album_id' type='hidden' value='${album.albumId}'>
                    <input class='album_name' type='hidden' value='${album.name}'>
                    <input class='album_recordLabel' type='hidden' value='${album.recordLabel}'>
                    <input class='artist_Id' type='hidden' value='${album.artistId}'>
                    <div id='button-box'>
                        <button class='edit-button'>Edit</button>
                        <button class='delete-album'>Delete</button>
                        <input class='album_id' type='hidden' value='${album.albumId}'>

                        <section class='edit-box'>
                            <input class='album_id' type='hidden' value='${album.albumId}'>
                            <input class='edit-album_name' type='text' value='${album.name}'>
                            <input class='edit-album_recordLabel' type='text' value='${album.recordLabel}'>
                            <input class='artist_Id' type='hidden' value='${album.artistId}'>
                            <button class='edit-album_submit'>Submit</button>
                        </section>
                    </div>
                </li>
    `;
        })
        .join("")}
    </ul>

    `
}