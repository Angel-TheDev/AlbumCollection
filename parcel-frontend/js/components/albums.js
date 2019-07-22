export default function Albums(albums){
    return `
    <ul>
        ${albums.map(album => {
            return `
                <li>
                    <div id='main-image'>
                    <img src=''></img>
                    </div>

                    <div id='name-info'
                    <h3>${album.name}</h3>
                    <input class='album_id' type='hidden' value='${album.albumId}'>
                    <input class='album_name' type='hidden' value='${album.name}'>
                    <div id='button-box'>
                        <button class='edit-button'>Edit</button>
                        <button class='delete-album'>Delete</button>
                        <input class='album_id' type='hidden' value='${album.albumId}'>

                        <section class='edit-box'>
                            <input class='album_id' type='hidden' value='${album.albumId}'>
                            <input class='artist_id' type='hidden' value='${album.artistId}'>
                            <input class='edit-album_name' type='text' value='${album.name}'>
                            <input class='edit-album_recordLabel' type='text' value='${album.recordLabel}'>
                            <button class='edit-album_submit'>Submit</button>
                        </section>
                    </div>
                </li>
    `;
        })
        .join("")}
    </ul>

    `;
}
