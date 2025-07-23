document.addEventListener("DOMContenLoaded",function(){
    fetch("naver.html")
    .then(respone => respone.text())
    .then(data=>{
        document.getElementById("navbar-cotainer").innerHTML=data;
    });
});
