const save = document.getElementById("save");
const cancel = document.getElementById("cancel");
const email = document.getElementById('emailToggle');
const public = document.getElementById('publicToggle');
const timeZone = document.getElementById('timeZone');

let emailCheckbox = localStorage.getItem('emailToggle');
let toggleCheckbox = localStorage.getItem('publicToggle');
let timeZoneStorage = localStorage.getItem('publicToggle');

//reusable function for checkbox
function checkBoxChecked(checkBox){
    if( checkBox.checked === true){
        console.log("checked");
        localStorage.setItem(checkBox, "checked")
    }else{
        console.log("Not checked")
        localStorage.setItem(checkBox, "unchecked")
    }
}
//reusable function for selector
function selectSelection(selector){
    selector.selectedIndex;
    localStorage.setItem()
}

//Save localstorage
save.addEventListener("click", ()=> {
    emailCheckbox = localStorage.getItem('emailToggle');
    toggleCheckbox = localStorage.getItem('publicToggle');
    timeZoneStorage = localStorage.getItem('publicToggle');
    checkBoxChecked(emailToggle);
    checkBoxChecked(publicToggle);
    console.log(selectSelection(timeZone));
})

//Clear localstorage
cancel.addEventListener("click", ()=> {
    emailCheckbox = localStorage.getItem('emailToggle');
    toggleCheckbox = localStorage.getItem('publicToggle');
    timeZoneStorage = localStorage.getItem('publicToggle');
    localStorage.removeItem(emailCheckbox);
    localStorage.removeItem(toggleCheckbox);

})