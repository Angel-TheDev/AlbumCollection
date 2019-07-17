export default function Artists(artists){
    return `
    <ul>

        ${artists.map(artist => {
            return `
                <li>
                    <h3>${artist.name}</h3>
                    <input class='delete-artist_id' type='hidden' value='${artist.artistId}'>
                        <button class='delete-artist'>Delete</button>
                </li>
            `;
        })
        .join("")}
    </ul>

    <section class='add-artist'>
        <input class='add-artist_name' type='text' placeholder='Add artist name...'>
        <button class='add-artist_submit'>Submit</button>
    </section>
    `;
}
