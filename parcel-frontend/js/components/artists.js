//import artistImages from "~/images/artists/*"
//<img src= "${artistImages}"
export default function Artists(artists){
    return `
    <ul>

        ${artists.map(artist => {
            return `
                <li>
                   
                    <h3>${artist.name}</h3>
                    <input class='artist_id' type='hidden' value='${artist.artistId}'>
                    <input class='artist_name' type='hidden' value='${artist.name}'>
                    <input class='artist_hometown' type='hidden' value='${artist.homeTown}'>
                        <button class='delete-artist'>Delete</button>
                        <button class='edit-artist'>Edit</button>
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
