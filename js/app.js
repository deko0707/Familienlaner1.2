function showPage(page){

    document.getElementById("home").style.display = "none";

    document.querySelectorAll(".page")
        .forEach(p => p.style.display = "none");

    document.getElementById(page)
        .style.display = "block";
}

function goHome(){

    document.querySelectorAll(".page")
        .forEach(p => p.style.display = "none");

    document.getElementById("home")
        .style.display = "block";
}
