export default function singleAlbum(album){
    return `

    <div class='name-info'>
    <img src='' alt='cover'></img>
    <h3>${album.name}</h3>
    </div>
    <button class='add-song-modal'>Add Song</button>
    <ol>
        ${album.songs.map(song => {
            return `
                <li>
                    <div id='name-info'
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
                    </div>
                </li>
                <br>
    `;
        })
        .join("")}
    </ol>

    `
}