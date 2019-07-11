export default function Artists(artists){
    return `
    <ul>
        ${artists.map(artist => {
            return `
                <li>
                    <h3>${artist}</h3>
                </li>
            `;
        })
        .join("")}
    </ul>
    `
}