export default function Sidebar(artists){
    return `
    <div id="sidebar">
    <h3>Select Artist</h3>
    <ul>
    
    ${artists.map(artist => {
        return `
            <li>
                <h3>${artist.name}</h3>
            </li>
        `;
    })
    .join("")}
        </ul>
        <button class='add-artist-modal'>Add Artist</button>
    </div>
    `
}