export default function ArtistSidebar(artists){
    return `
    <h3>Select Artist</h3>
    <ul>
    
    ${artists.map(artist => {
        return `
            <li>
                <h3 class='artist_name'>${artist.name}</h3>
                <input class='artist_id' type='hidden' value='${artist.artistId}'>
            </li>
        `;
    })
    .join("")}
        </ul>
        <button class='add-artist-modal'>Add Artist</button>
    `
}