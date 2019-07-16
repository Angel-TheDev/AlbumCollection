import Home from './components/home';
import Artists from './components/artists';
import Albums from './components/albums';
import Songs from './components/songs';
import apiActions from './api/api-actions';



pageBuild();

function pageBuild(){
    home();
    navArtists();
    albums();
    songs();
   
}

function home(){
    const homebutton = document.getElementById('nav__home')
    homebutton.addEventListener('click', function(){
        const main = document.getElementById('main')
        main.innerHTML = Home();
    })
}


// function artists(){
//     const artistbutton = document.getElementById('nav__artists')
//     artistbutton.addEventListener('click', function(){
//         const main = document.getElementById('main')
//         main.innerHTML = Artists();
//     })

// }


function albums(){
    const albumbutton = document.getElementById('nav__albums')
    albumbutton.addEventListener('click', function(){
        const main = document.getElementById('main')
        main.innerHTML = Albums();
    })

}

function songs(){
    const songbutton = document.getElementById('nav__songs')
    songbutton.addEventListener('click', function(){
        const main = document.getElementById('main')
        main.innerHTML = Songs();
    })
}


function navArtists(){
    const artistsbutton = document.querySelector('#nav__artists')
    console.log(artistsbutton)
    artistsbutton.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44301/api/artist', 
            artists => {
                // console.log(artists)
                document.querySelector('#main').innerHTML = Artists(artists)
            })
        
    })

    document.getElementById('main').addEventListener('click', function() {
        if (event.target.classList.contains('add-artist_submit')) {
            const newartist = event.target.parentElement.querySelector('.add-artist_name').value;
            const data = {
                id: 0,
                name: newartist

            };
            apiActions.postRequest('https://localhost:44301/api/artist', data, artists => {
                document.querySelector('#main').innerHTML = Artists(artists);
            })
        }
})

function artistDelete(){
    document.getElementById('main').addEventListener('click',function(){
        if(event.target.classList.contains('delete-artist')) {
            apiActions.deleteRequest('https://localhost:44301/api/artist', data, artists => {
                document.querySelector('#main').innerHTML = Artists(artists);
            })
        }
    })
}

}