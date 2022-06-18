/* --- Join --- */

const np = document.querySelector("#np");
const npPara = document.querySelector("#npPara");
const br = document.querySelector("#br");
const brPara = document.querySelector("#brPara");
const si =document.querySelector("#si");
const siPara = document.querySelector("#siPara");
const go = document.querySelector("#go");
const goPara = document.querySelector("#goPara");
const membershipsList = {input:[np, br, si, go], para:[npPara, brPara, siPara, goPara]}

function displayPara(){
    membershipsList.input.forEach(x => {
        let index = membershipsList.input.indexOf(x);
        membershipsList.input[index].oninput = ()=> {
            hideAll();
            membershipsList.para[index].style.display = "block"};

    });
}
function hideAll() {
    membershipsList.para.forEach(x => x.style.display = "none")
}
displayPara();


