export default function singleAlbum(album){
    return `

    <img src='${album.imageURL}' id='main-image' alt='Album image'>
    <div id='name-info'><h3>${album.name}</h3>
        <div id='button-box'>
            <button class='edit-album'>Edit Album</button>
            <button class='delete-album'>Delete Album</button>
                <section class='edit-box'>
                    <input class='album_id' type='hidden' value='${album.albumId}'>
                    <input class='edit-album_name' type='text' value='${album.name}'>
                    <input class='edit-album_recordLabel' type='text' value='${album.recordLabel}'>
                    <input class='artist_Id' type='hidden' value='${album.artistId}'>
                    <button class='edit-album_submit'>Submit</button>
                </section>
        </div>
    <p>${album.description}</p>

    </div>
    <div id='main-children'>
    <button class='add-song-modal'>Add Song</button>
    <ol>
        ${album.songs.map(song => {
            return `
                <li>
                    <h3>${song.name}</h3>
                    <input class='song_id' type='hidden' value='${song.songId}'>
                    <input class='song_name' type='hidden' value='${song.name}'>
                    <span>${song.duration}</span>
                    <input class='album_Id' type='hidden' value='${song.albumId}'
                    <div id='button-box'>
                        <button class='edit-button'>Edit</button>
                        <button class='delete-song'>Delete</button>
                        <input class='song_id' type='hidden' value='${song.songId}'>

                        <section class='edit-box'>
                            <input class='song_id' type='hidden' value='${song.songId}'>
                            <input class='edit-song_name' type='text' value='${song.name}'>
                            <input class='edit-song_duration' type='text' value='${song.duration}'>
                            <input class='album_Id' type='hidden' value='${song.albumId}'>
                            <button class='edit-song_submit'>Submit</button>
                        </section>
                </li>
    `;
        })
        .join("")}
    </ol>
    </div>
    `
}