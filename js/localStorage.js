const save = document.getElementById("save");
const cancel = document.getElementById("cancel");
const email = document.getElementById('emailToggle');
const public = document.getElementById('publicToggle');
const timeZone = document.getElementById('timeZone');

let emailCheckbox = localStorage.getItem('emailToggle');
let toggleCheckbox = localStorage.getItem('publicToggle');
let timeZoneStorage = localStorage.getItem('savedTimeZone');

//reusable function for checkbox
function checkBoxChecked(checkBox){
    if( checkBox.checked === true){
        localStorage.setItem(`${checkBox}`, checkBox.checked)
    }else{
        localStorage.setItem(`${checkBox}`, checkBox);
    }
}
//reusable function for selector
// function selectSelection(selector){
//     localStorage.setItem("saved timezone", selector.selectedIndex);
// }

//Save localstorage
save.addEventListener("click", ()=> {
    emailCheckbox = localStorage.getItem('emailToggle');
    toggleCheckbox = localStorage.getItem('publicToggle');
    timeZoneStorage = localStorage.getItem('publicToggle');
    checkBoxChecked(emailToggle);
    checkBoxChecked(publicToggle);
    // selectSelection(timeZoneStorage);
})

//Clear localstorage
cancel.addEventListener("click", ()=> {
    emailCheckbox = localStorage.getItem('emailToggle');
    toggleCheckbox = localStorage.getItem('publicToggle');
    timeZoneStorage = localStorage.getItem('publicToggle');
    localStorage.removeItem(emailCheckbox);
    localStorage.removeItem(toggleCheckbox);

})