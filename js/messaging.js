const user = document.getElementById('userField');
const message = document.getElementById('messageField')

const send = document.getElementById("send");

send.addEventListener("click",()=>{
   if(user.value == "" && message.value == ""){
       alert("Please fill out both forms to send a message");
       return false;
   }else if( user.value == ""){
       alert("Please specify what user you would like to send a message to.");
       return false;
   }else if( message.value == ""){
    alert(`Please write a message for ${user.value}.`);
    return false;
    }else{
       alert(`Your message was sent to ${user.value}.`);
       user.value = "";
       message.value = "";
   }
})