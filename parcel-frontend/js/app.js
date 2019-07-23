import Home from './components/home';
import Artists from './components/artists';
import Albums from './components/albums';
import Songs from './components/songs';
import apiActions from './api/api-actions';
import ArtistSidebar from './components/artistsidebar';
import AlbumSidebar from './components/albumsidebar';
import AddArtistModal from './components/add-artist-modal'
import SingleArtist from './components/singleArtist'
import AddAlbumModal from './components/add-album-modal'
import SingleAlbum from './components/singlealbum'
import AddSongModal from './components/add-song-modal'

pageBuild();

function pageBuild(){
    home();
    navArtists();
    singleArtist();
    artistModal();
    navAlbums();
    navSongs();
    editBoxDisplay();
    albumModal();
    singleAlbum();
    songModal();
}

function home(){
    const homebutton = document.getElementById('nav__home')
    homebutton.addEventListener('click', function(){
        const maininfo = document.getElementById('main-info')
        maininfo.innerHTML = Home();
    })
}

function navArtists(){
    const artistsbutton = document.querySelector('#nav__artists')
    console.log(artistsbutton)
    artistsbutton.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44301/api/artist', 
            artists => {
                document.querySelector('#sidebar').innerHTML = ArtistSidebar(artists)
            }
            
        )
        document.querySelector('#main-info').innerHTML = "";
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
                document.querySelector('#sidebar').innerHTML = AlbumSidebar(albums)
            }
        )
        document.querySelector('#main-info').innerHTML = "";
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
 
function singleAlbum(){
    document.getElementById('sidebar').addEventListener('click', function(){
        if (event.target.classList.contains('album_name')){
            const albumId = event.target.parentElement.querySelector('.album_id').value
            console.log(albumId)
            apiActions.getRequest('https://localhost:44301/api/album/'+ albumId, 
            album =>{
                document.querySelector('#main-info').innerHTML = SingleAlbum(album)
            })
        }
    })
}

function albumModal(){
    document.getElementById('main').addEventListener('click', function() {
        if (event.target.classList.contains('add-album-modal')) {
            const modal = document.getElementById('boxbg')
            const modalbox = document.getElementById('box')
            modalbox.innerHTML = AddAlbumModal()
            modal.style.display = 'block'};
        })
    document.getElementById('main').addEventListener('click', function(){
            if(event.target.classList.contains('add-album_submit')){
            const albumname = event.target.parentElement.querySelector('.add-album_name').value;
            const albumrecordlabel = event.target.parentElement.querySelector('.add-album-recordlabel').value;
            const maininfo = document.querySelector('#main-info')
            const artistId = maininfo.querySelector('.artist_Id').value
            console.log(artistId)
            const data = {
                albumid: 0,
                name: albumname,
                recordLabel: albumrecordlabel,
                artistId: artistId
            };
            console.log(name)
            console.log(albumrecordlabel)
            console.log(artistId)
            apiActions.postRequest('https://localhost:44301/api/album', data, albums => {
                // document.querySelector('#sidebar').innerHTML = AlbumSidebar();
                document.querySelector('#main-info').innerHTML = Albums(albums);
                
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

function navSongs(){
    const songsbutton = document.querySelector('#nav__songs')
    console.log(songsbutton)
    songsbutton.addEventListener('click', function(){
        apiActions.getRequest(
            'https://localhost:44301/api/song', 
            songs => {
                document.querySelector('#sidebar').innerHTML = Songs(songs)
            }
        )
        document.querySelector('#main-info').innerHTML = "";
    });

    document.getElementById('main-info').addEventListener('click', function() {
        if (event.target.classList.contains('add-song_submit')) {
            const newsong = event.target.parentElement.querySelector('.add-song_name').value;
            const data = {
                id: 0,
                name: newsong

            };
            apiActions.postRequest('https://localhost:44301/api/song', data, songs => {
                document.querySelector('#main-info').innerHTML = Songs(songs);
            })
        }
    });
    
    document.getElementById('main-info').addEventListener('click', function(){
        if (event.target.classList.contains('delete-song')){
            console.log('event triggered');
            const removesong_id = event.target.parentElement.querySelector('.song_id').value;
            console.log(removesong_id)
            const data = {
                SongId: removesong_id,
            };
            console.log(data);
            
            apiActions.deleteRequest('https://localhost:44301/api/song', data, songs => {
                    console.log(data);
                    document.querySelector('#main-info').innerHTML = Songs(songs);
                }
            );
        }
    });
    
    document.getElementById('main-info').addEventListener('click', function(){
        if (event.target.classList.contains('edit-song_submit')){
            console.log('event triggered');
            const editsong_id = event.target.parentElement.querySelector('.song_id').value;
            const editsong_name = event.target.parentElement.querySelector('.edit-song_name').value;
            const editsong_duration = event.target.parentElement.querySelector('.edit-song_duration').value;
            console.log(editsong_id)
            console.log(editsong_name)
            console.log(editsong_duration)
            
            const data = {
                SongId: editsong_id,
                Name: editsong_name,
                Duration: editsong_duration
            };
            console.log(data);
            
            apiActions.putRequest('https://localhost:44301/api/song', data, songs => {
                    console.log(data);
                    document.querySelector('#main-info').innerHTML = Songs(songs);
                    document.querySelector('#sidebar').innerHTML = SongSidebar();
                }
            );
        }
    });

}

function songModal(){
    document.getElementById('main').addEventListener('click', function() {
        if (event.target.classList.contains('add-song-modal')) {
            const modal = document.getElementById('boxbg')
            const modalbox = document.getElementById('box')
            modalbox.innerHTML = AddSongModal()
            modal.style.display = 'block'};
        })
    document.getElementById('main').addEventListener('click', function(){
            if(event.target.classList.contains('add-song_submit')){
            const songname = event.target.parentElement.querySelector('.add-song_name').value;
            const songduration = event.target.parentElement.querySelector('.add-song-duration').value;
            const maininfo = document.querySelector('#main-info')
            const albumId = maininfo.querySelector('.album_Id').value
            console.log(albumId)
            const data = {
                songid: 0,
                name: songname,
                duration: songduration,
                albumId: albumId
            };
            console.log(data)
            
            apiActions.postRequest('https://localhost:44301/api/song', data, songs => {
               
                document.querySelector('#main-info').innerHTML = Songs(songs);
                
                })
                document.querySelector('#sidebar').innerHTML = "";
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
