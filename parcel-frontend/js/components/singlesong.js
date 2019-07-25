export default function singleSong(song){
    return `

    <div id='name-info'><h3>${song.name}</h3>
        <div id='button-box'>
            <button class='edit-song'>Edit Song</button>
            <button class='delete-song'>Delete Song</button>
                <section class='edit-box'>
                    <input class='song_id' type='hidden' value='${song.songId}'>
                    <input class='edit-song_name' type='text' value='${song.name}'>
                    <input class='edit-song_duration' type='text' value='${song.duration}'>
                    <input class='album_Id' type='hidden' value='${song.albumId}'>
                    <button class='edit-song_submit'>Submit</button>
                </section>
        </div>
    
    </div>
    
    `
}