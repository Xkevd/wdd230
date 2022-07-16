/* Open/Close Menu */

function toggleMenu(){
    document.querySelector("#menuList").classList.toggle("open");
    document.querySelector("#weather-div").classList.toggle("open");
    document.querySelector("#menuButton").classList.toggle("open");
    document.querySelector("#navigation-bar").classList.toggle("open");
}
const buttonMenu = document.querySelector("#menuButton")
buttonMenu.onclick = toggleMenu;