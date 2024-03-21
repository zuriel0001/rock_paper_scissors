// JavaScript code to handle the user's choice
function playWithComputer() {
    // Hide all pages
    document.getElementById("home").style.display = "none";
    document.getElementById("computer").style.display = "block";
}

function playWithHuman() {
    // Hide all pages
    document.getElementById("home").style.display = "none";
    document.getElementById("human").style.display = "block";
}

//function goBack() {
    // Hide all pages and show the home page
    //document.getElementById("computer").style.display = "none";
    //document.getElementById("human").style.display = "none";
    //document.getElementById("home").style.display = "block";
//}
function goBack() {
    const homePage = document.getElementById("home");
    const computerPage = document.getElementById("computer");
    const humanPage = document.getElementById("human");

    if (humanPage.style.display === "block") {
        // If coming from human game page, only hide it and show the home page
        humanPage.style.display = "none";
        homePage.style.display = "block";
    } else {
        // If coming from other pages, hide all pages and show the home page
        computerPage.style.display = "none";
        humanPage.style.display = "none";
        homePage.style.display = "block";
    }
}

// Function to show a specific page
function showPage(pageId) {
    // Hide all pages
    document.getElementById("home").style.display = "none";
    document.getElementById("computer").style.display = "none";
    document.getElementById("human").style.display = "none";

    // Show the selected page
    document.getElementById(pageId).style.display = "block";
}

// Expose the playRound function to be accessible from the HTML onclick event
window.playRound = function () {};

// Include the humanGame.js file
// document.write('<script type="text/javascript" src="static/js/humanGame.js"></script>');
