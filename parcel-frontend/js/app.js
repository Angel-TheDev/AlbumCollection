import Home from './components/home';

pageBuild();

function pageBuild(){
    home();
}

function home(){
    const homebutton = document.getElementById('nav__home')
    homebutton.addEventListener('click', function(){
        const main = document.getElementById('main')
        main.innerHTML = Home();
    })
}