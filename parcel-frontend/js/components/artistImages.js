import images from "~/images/*.jpg"
//<img src= "${artistImages}"
export default function ArtistImages(){

        {Object.keys(images).map(key => {
            console.log(images)
            return `<img key='${key}' src='${images[key]}' alt=""></img>`;
                    
       
        })
    }
}