const user = document.getElementById("userField");
const message = document.getElementById("messagefield");
const send = document.getElementById("send");


send.addEventListener("click", ()=> {
    if(user.value === "" && message.value ===""){
        alert("Please fill out user and messag field before sending")
    } else if (user.value === "") {
        alert("Please fill out user field before sending.")
    } else if (message.value === "" ) {
        alert("Please fill out message field before sending")
    } else {
        alert(`Message was successfully senf to: ${user.value}`)
    }
})