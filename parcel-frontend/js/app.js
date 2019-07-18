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
        const maininfo = document.getElementById('main-info')
        maininfo.innerHTML = Home();
    })
}

function albums(){
    const albumbutton = document.getElementById('nav__albums')
    albumbutton.addEventListener('click', function(){
        const maininfo = document.getElementById('main-info')
        maininfo.innerHTML = Albums();
    })

}

function songs(){
    const songbutton = document.getElementById('nav__songs')
    songbutton.addEventListener('click', function(){
        const maininfo = document.getElementById('main-info')
        maininfo.innerHTML = Songs();
    })
}


function navArtists(){
    const artistsbutton = document.querySelector('#nav__artists')
    console.log(artistsbutton)
    artistsbutton.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44301/api/artist', 
            artists => {
                document.querySelector('#main-info').innerHTML = Artists(artists)
            }
        )
    })

    document.getElementById('main-info').addEventListener('click', function() {
        if (event.target.classList.contains('add-artist_submit')) {
            const newartist = event.target.parentElement.querySelector('.add-artist_name').value;
            const data = {
                id: 0,
                name: newartist

            };
            apiActions.postRequest('https://localhost:44301/api/artist', data, artists => {
                document.querySelector('#main-info').innerHTML = Artists(artists);
            })
        }
    })
    
    document.getElementById('main-info').addEventListener('click', function(){
        if (event.target.classList.contains('delete-artist')){
            console.log('event triggered');
            const removeartist_id = event.target.parentElement.querySelector('.artist_id').value;
            console.log(removeartist_id)
            const data = {
                ArtistId: removeartist_id,
            };
            console.log(data);
            
            apiActions.deleteRequest('https://localhost:44301/api/artist', data, artists => {
                    console.log(data);
                    document.querySelector('#main-info').innerHTML = Artists(artists);
                }
            );
        }
    });
    
    document.getElementById('main-info').addEventListener('click', function(){
        if (event.target.classList.contains('edit-artist_submit')){
            console.log('event triggered');
            const editartist_id = event.target.parentElement.querySelector('.artist_id').value;
            const editartist_name = event.target.parentElement.querySelector('.edit-artist_name').value;
            const editartist_homeTown = event.target.parentElement.querySelector('.edit-artist_hometown').value;
            console.log(editartist_id)
            console.log(editartist_name)
            console.log(editartist_homeTown)
            
            const data = {
                ArtistId: editartist_id,
                Name: editartist_name,
                HomeTown: editartist_homeTown
            };
            console.log(data);
            
            apiActions.putRequest('https://localhost:44301/api/artist', data, artists => {
                    console.log(data);
                    document.querySelector('#main-info').innerHTML = Artists(artists);
                }
            );
        }
    });


}
