export default function SongSidebar(songs){
    return `
    <h3>Select Song</h3>
    <ul>
    
    ${songs.map(song => {
        return `
            <li>
                <h3 class='song_name'>${song.name}</h3>
                <input class='song_id' type='hidden' value='${song.songId}'>
            </li>
        `;
    })
    .join("")}
        </ul>
    `
}