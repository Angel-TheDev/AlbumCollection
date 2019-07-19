import images from "~/images/*.jpg"
//<img src= "${artistImages}"
export default function ArtistImages(artistImages){

        {Object.keys(images).map(key => {
            return `<img key='${key}' src='${images[key]}' alt=""></img>`;
                    
                    
       
        })
    }
}