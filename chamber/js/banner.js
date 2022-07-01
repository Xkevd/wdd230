/*Body*/

let banner = document.querySelector("#banner");

if (now.getDay() == 1 || now.getDay() == 2){
    banner.style.display = "block";
}
else{
    banner.style.display = "none";
}
