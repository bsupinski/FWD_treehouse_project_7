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