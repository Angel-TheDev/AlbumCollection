export default function Songs(songs){
    return `
    <ul>
        ${songs.map(song => {
            return `
                <li>
                    <div id='main-image'>
                    <img src=''></img>
                    </div>

                    <div id='name-info'
                    <h3>${song.name}</h3>
                    <input class='song_id' type='hidden' value='${song.songId}'>
                    <input class='song_name' type='hidden' value='${song.name}'>
                    <div id='button-box'>
                        <button class='edit-button'>Edit</button>
                        <button class='delete-song'>Delete</button>
                        <input class='song_id' type='hidden' value='${song.songId}'>

                        <section class='edit-box'>
                            <input class='song_id' type='hidden' value='${song.songId}'>
                            <input class='album_id' type='hidden' value='${song.albumId}'>
                            <input class='edit-song_name' type='text' value='${song.name}'>
                            <input class='edit-song_duration' type='text' value='${song.duration}'>
                            <button class='edit-song_submit'>Submit</button>
                        </section>
                    </div>
                </li>
    `;
        })
        .join("")}
    </ul>

    `;
}