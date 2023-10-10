var hamBurgerIconget = document.getElementById("nav_bar_menu_mainDiv");
function hamBurgerClickFunc() {
    if (hamBurgerIconget.style.display === "none") {
        hamBurgerIconget.style.display = "block";
    }
    else {
        hamBurgerIconget.style.display = "none";
    }
}


window.onclick = function (event) {
    if (event.target == hamBurgerIconget) {
        hamBurgerIconget.style.display = "none";
    }
}