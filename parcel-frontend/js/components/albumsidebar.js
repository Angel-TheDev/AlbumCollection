export default function AlbumSidebar(albums){
    return `
    <h3>Select Album</h3>
    <ul>
    
    ${albums.map(album => {
        return `
            <li>
                <h3 class='album_name'>${album.name}</h3>
                <input class='album_id' type='hidden' value='${album.albumId}'>
            </li>
        `;
    })
    .join("")}
        </ul>
        
    `
}