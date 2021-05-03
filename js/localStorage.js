saveButton = document.getElementById('save');
emailToggle = document.getElementById('emailToggle');

localStorage.getItem("email");
if("email" === "checked"){
    emailToggle.checked = true;
}else{
    emailToggle.checked = false;
};


saveButton.addEventListener('click', ()=>{
    saveButton.style.backgroundColor="red";
    if(emailToggle.checked){
        localStorage.setItem("email", "checked");
    }else{
        localStorage.setItem("email", "unchecked");
    }
    console.log(localStorage);
})

