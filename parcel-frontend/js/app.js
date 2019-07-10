import Home from './components/home';
//import Artists from './components/artists';
//import Albums from './components/albums';
//import Songs from './components/songs';


pageBuild();

function pageBuild(){
    home();
    artists();
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

function artists(){


}

function albums(){


}

function songs(){


}