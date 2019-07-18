export default function Sidebar(items){
    return `
    <div id="sidebar">
    <ul>
    
    ${items.map(item => {
        return `
            <h3>Select</h3>
            <li>
                <h3>${item.name}</h3>
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
    </div>
    `
}