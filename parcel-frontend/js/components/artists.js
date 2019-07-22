export default function Artists(artists){
    return `
    <ul>
        ${artists.map(artist => {
            return `
                <li>
                    <div id='main-image'>
                    <img src=''></img>
                    </div>

                    <div id='name-info'
                    <h3>${artist.name}</h3>
                    <input class='artist_id' type='hidden' value='${artist.artistId}'>
                    <input class='artist_name' type='hidden' value='${artist.name}'>
                    <input class='artist_hometown' type='hidden' value='${artist.homeTown}'>
                    <div id='button-box'>
                        <button class='edit-button'>Edit</button>
                        <button class='delete-artist'>Delete</button>
                        <input class='artist_id' type='hidden' value='${artist.artistId}'>

                        <section class='edit-box'>
                            <input class='artist_id' type='hidden' value='${artist.artistId}'>
                            <input class='edit-artist_name' type='text' value='${artist.name}'>
                            <input class='edit-artist_hometown' type='text' value='${artist.homeTown}'>
                            <button class='edit-artist_submit'>Submit</button>
                        </section>
                    </div>
                </li>
    `;
        })
        .join("")}
    </ul>

    `;
}
