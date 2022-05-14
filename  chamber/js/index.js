/*Header*/
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now);
document.querySelector("#date").textContent = fulldate;

function toggleMenu(){
    document.querySelector("#menuList").classList.toggle("open");
    document.querySelector("#facebook").classList.toggle("open");
    document.querySelector("#logo").classList.toggle("open");
    document.querySelector("nav").classList.toggle("open");
    document.querySelector("#menuBtn").classList.toggle("open");
}
const buttonMenu = document.querySelector("#menuBtn")
buttonMenu.onclick = toggleMenu;

/*Body*/

/*Footer*/
const year = new Date();
const currentYear = year.getFullYear();
document.getElementById("year").innerHTML = "&copy; " + currentYear;

let modDate = document.lastModified;
document.getElementById("modification").textContent = "Last modification: "+modDate;