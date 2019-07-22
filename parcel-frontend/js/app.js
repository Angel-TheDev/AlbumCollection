import Home from './components/home';
import Artists from './components/artists';
import Albums from './components/albums';
import Songs from './components/songs';
import apiActions from './api/api-actions';
import ArtistSidebar from './components/artistsidebar';
import AddArtistModal from './components/add-artist-modal'
import SingleArtist from './components/singleArtist'

pageBuild();

function pageBuild(){
    home();
    navArtists();
    singleArtist();
    artistSidebar();
    artistModal();

    navAlbums();
    songs();
    editBoxDisplay();
}

function home(){
    const homebutton = document.getElementById('nav__home')
    homebutton.addEventListener('click', function(){
        const maininfo = document.getElementById('main-info')
        maininfo.innerHTML = Home();
    })
}

function artistSidebar(){
    apiActions.getRequest(
        'https://localhost:44301/api/artist', 
        artists => {
            document.querySelector('#sidebar').innerHTML = ArtistSidebar(artists)
        }
    )
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
    });

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
    });
    
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
                    document.querySelector('#sidebar').innerHTML = ArtistSidebar();
                }
            );
        }
    });
}

function artistModal(){
    document.getElementById('main').addEventListener('click', function() {
        if (event.target.classList.contains('add-artist-modal')) {
            const modal = document.getElementById('boxbg')
            const modalbox = document.getElementById('box')
            modalbox.innerHTML = AddArtistModal()
            modal.style.display = 'block'};
        })
    document.getElementById('main').addEventListener('click', function(){
            if(event.target.classList.contains('add-artist_submit')){
            const artistname = event.target.parentElement.querySelector('.add-artist_name').value;
            const artisthometown = event.target.parentElement.querySelector('.add-artist-hometown').value;
            const data = {
                id: 0,
                name: artistname,
                homeTown: artisthometown
            };
            apiActions.postRequest('https://localhost:44301/api/artist', data, artists => {
                document.querySelector('#sidebar').innerHTML = ArtistSidebar();
                document.querySelector('#main-info').innerHTML = Artists(artists);
                
                })
                boxbg.style.display = 'none';
            }
        })

        const boxbg = document.getElementById('boxbg')
        window.onclick = function(event){
            if (event.target == boxbg){
                boxbg.style.display = 'none';
            }
        }
        const closebutton = document.getElementById('closebutton')
        window.onclick = function(event){
            if(event.target == closebutton){
                boxbg.style.display = 'none';
            }
        }
};

function singleArtist(){
    document.getElementById('sidebar').addEventListener('click', function(){
        if (event.target.classList.contains('artist_name')){
            const artistId = event.target.parentElement.querySelector('.artist_id').value
            console.log(artistId)
            apiActions.getRequest('https://localhost:44301/api/artist/'+ artistId, 
            artist =>{
                document.querySelector('#main-info').innerHTML = SingleArtist(artist)
            })
        }
    })
}

function editBoxDisplay(){
    document.getElementById('main').addEventListener('click', function() {
        if (event.target.classList.contains('edit-button')) {
            const editbox = event.target.parentElement.querySelector('.edit-box')
            console.log(editbox)
            editbox.style.display = 'block'
        }
    })
}

function navAlbums(){
    const albumsbutton = document.querySelector('#nav__albums')
    console.log(albumsbutton)
    albumsbutton.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44301/api/album', 
            albums => {
                document.querySelector('#main-info').innerHTML = Albums(albums)
            }
        )
    })

    document.getElementById('main-info').addEventListener('click', function() {
        if (event.target.classList.contains('add-album_submit')) {
            const newalbum = event.target.parentElement.querySelector('.add-album_name').value;
            const data = {
                id: 0,
                name: newalbum

            };
            apiActions.postRequest('https://localhost:44301/api/album', data, albums => {
                document.querySelector('#main-info').innerHTML = Albums(albums);
            })
        }
    })
    
    document.getElementById('main-info').addEventListener('click', function(){
        if (event.target.classList.contains('delete-album')){
            console.log('event triggered');
            const removealbum_id = event.target.parentElement.querySelector('.album_id').value;
            console.log(removealbum_id)
            const data = {
                albumId: removealbum_id,
            };
            console.log(data);
            
            apiActions.deleteRequest('https://localhost:44301/api/album', data, albums => {
                    console.log(data);
                    document.querySelector('#main-info').innerHTML = Albums(albums);
                }
            );
        }
    });
    
    document.getElementById('main-info').addEventListener('click', function(){
        if (event.target.classList.contains('edit-album_submit')){
            console.log('event triggered');
            const editalbum_id = event.target.parentElement.querySelector('.album_id').value;
            const editalbum_name = event.target.parentElement.querySelector('.edit-album_name').value;
            const editalbum_recordLabel = event.target.parentElement.querySelector('.edit-album_recordLabel').value;
            const editalbum_artistId = event.target.parentElement.querySelector('.artist_Id').value;
            console.log(editalbum_id)
            console.log(editalbum_name)
            console.log(editalbum_recordLabel)
            
            const data = {
                AlbumId: editalbum_id,
                Name: editalbum_name,
                RecordLabel: editalbum_recordLabel,
                ArtistId: editalbum_artistId
            };
            console.log(data);
            
            apiActions.putRequest('https://localhost:44301/api/album', data, albums => {
                    console.log(data);
                    document.querySelector('#main-info').innerHTML = Albums(albums);
                    document.querySelector('#sidebar').innerHTML = ArtistSidebar();
                }
            );
        }
    });
}