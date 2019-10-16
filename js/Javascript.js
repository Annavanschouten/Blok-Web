/*Javascript*/
/*Bron: Powerpoint presentatie les 05, Brightspace*/
/*URL:https://docs.google.com/presentation/d/e/2PACX-1vQp_O6GKUfONEwcJj9F26KH05SKcet9lkwoZJQPEW77MefJGWLeF9EpEJ7dG5aQEdLy3ynvirxkyAnV/pub?start=false&loop=false&delayms=3000&slide=id.g118256c73c_0_151*/

var hamburgermenu = document.querySelector('.menu');
var menu = document.querySelector('.hamburgermenu');

function showMenu(){
    menu.classList.toggle('showMenuknop');
}

hamburgermenu.addEventListener('click', showMenu);