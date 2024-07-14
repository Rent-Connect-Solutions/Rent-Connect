// this function takes the hmaburger menu and opens and closes the list of options for the client to select making the bar mobile friendly

function myFunction() {
    
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
     }
   
}