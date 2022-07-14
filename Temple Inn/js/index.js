/* Open/Close Menu */

function toggleMenu(){
    document.querySelector("#menuList").classList.toggle("open");
    //document.querySelector("#facebook").classList.toggle("open");
    //document.querySelector("#logo").classList.toggle("open");
    document.querySelector("#weather-div").classList.toggle("open");
    document.querySelector("#menuButton").classList.toggle("open");
}
const buttonMenu = document.querySelector("#menuButton")
buttonMenu.onclick = toggleMenu;