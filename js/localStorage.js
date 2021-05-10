let saveButton = document.getElementById('save');
let emailToggle = document.getElementById('emailToggle')
let publicToggle = document.getElementById('publicToggle');
let timeZone = document.getElementById('timeZone');

// Receiving localStorage
if(localStorage.getItem('email') === "checked"){
    emailToggle.checked = true;
};

if(localStorage.getItem('public') === "checked"){
    publicToggle.checked = true;
};

timeZone.selectedIndex = localStorage.getItem("userTimezone");

saveButton.addEventListener('click', ()=>{
//Turning Send Email Notification on/off
    if(emailToggle.checked){
        localStorage.setItem("email", "checked");
    }else{
        localStorage.setItem("email", "unchecked")
    };
//Turning Set Profile to Public on/off
    if(publicToggle.checked){
        localStorage.setItem("public", "checked")
    }else{
        localStorage.setItem("public", "unchecked")
    };
//Save Time zone selection
    let selectedTimeZone = timeZone.selectedIndex;
    localStorage.setItem("userTimezone", selectedTimeZone);
    
})

