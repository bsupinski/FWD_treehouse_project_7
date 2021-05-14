//Dropdown messages
const container = document.getElementById("message-container")
const bell = document.getElementById("bell");
const alertBell = document.getElementById("notifications");
const allMessages = document.getElementById("messages");
const newMessage = document.getElementsByClassName("new-message");
const closeMessage = document.getElementsByClassName("close");

container.addEventListener("click", e => {
    if(e.target === bell || e.target === alertBell){
        if(allMessages.style.display === "" || allMessages.style.display === "none"){
            allMessages.style.display = "block";
        }else {
            allMessages.style.display = "none"
        }
    };
    // Closes each message indivisually. 
    for(let i = 0; i < newMessage.length; i++){
        if(e.target === closeMessage[i]){
            allMessages.removeChild(newMessage[i]);
            console.log(newMessage.length)
        }
        if(newMessage.length === 0){
            alertBell.style.display="none";
        }
    };
});



//Alert Banner after dashboard
const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = 
`
<div class = "alert-banner">
<p><strong>You have</strong> overdue tasks to complete</p>
<p class = "alert-banner-close">X</p>
</div>
`;


alertBanner.addEventListener('click', e=>{
    const element = e.target;
    if (element.classList.contains("alert-banner-close")){
        alertBanner.style.display="none"
    }
})
