/*----===== AAL BLOCKCHAIN FINANCIALS 2022 ===== -*/

/* ===== New Logo toggle buttons (DISABLED)
function newlogo(){
        document.getElementById('myImage')
        	.src="images/aallogo.png";     
    }
    ===== */

/* ===== Classic Logo toggle buttons (DISABLED)
function classiclogo(){
        document.getElementById('myImage')
        	.src="images/aallogo-classic.png";
    }
    ===== */

    /* ===== Darkmode toggle button (DISABLED)
function toggle_light_mode() {
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        localStorage.lightMode = "light";
        app.setAttribute("light-mode", "light");
    } else {
        localStorage.lightMode = "dark";
        app.setAttribute("light-mode", "dark");
        }		
    }
    ===== */

/* ===== Sets Light/Dark mode after checking what was used last (DISABLED)
    var app = document.getElementsByTagName("BODY")[0];
    if (localStorage.lightMode == "dark") {
        app.setAttribute("light-mode", "dark");
    }
    
/* ===== Theme Toggle button (DISABLED)
function newlogo(){
        document.getElementById('theme')
        	;     
    }
    ===== */

/* ===== Shows/Hides the Nav bar based on page size ===== */
var navList = document.getElementById("nav-lists");
var overlay = document.getElementById("content");
function Show() {
navList.classList.add("_Menus-show");
overlay.setAttribute("hidden", true);
}

function Hide(){
navList.classList.remove("_Menus-show");
overlay.removeAttribute("hidden", false);
}
