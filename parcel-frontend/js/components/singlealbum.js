export default function singleArtist(artist){
    return `
    <h3>${artist.name}</h3>
    <button class='add-song-modal'>Add Song</button>
    <ol>
        ${artist.songs.map(song => {
            return `
                <li>
                    <div id='main-image'>
                    <img src=''></img>
                    </div>

                    <div id='name-info'
                    <h3>${song.name}</h3>
                    <input class='song_id' type='hidden' value='${song.songId}'>
                    <input class='song_name' type='hidden' value='${song.name}'>
                    <input class='song_duration' type='hidden' value='${song.duration}'>
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
    `;
        })
        .join("")}
    </ol>

    `
}