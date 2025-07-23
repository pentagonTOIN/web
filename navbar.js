document.addEventListener("DOMContentLoaded",function(){
    fetch("navber.html")
    .then(response => response.text())
    .then(data=>{
        document.getElementById("navbar-container").innerHTML=data;
    });
});
