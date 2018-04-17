
$('img').on('dragstart', false);

// init some basic stuff
const contentEl = $('#content'); //main content element
const availableSites = ["yllapito","etusivu","killat"]

//Scripts for le tabcontents

function toggleDrawer(){
    let sideNav = document.getElementById("mySidenav")
    let mainEl = document.getElementById("main")
    let toggleButton = document.getElementById("openbutton")
    let buttonIcon = document.getElementsByClassName("buttonIcon")[0]

    
    let width = "";
    switch (sideNav.dataset.drawer) {
        case "open":
            width = "0px";
            sideNav.dataset.drawer = "closed"
            break;
        case "closed":
            width = "250px";
            sideNav.dataset.drawer = "open"
            break;
        default:
            break;
    }
    sideNav.style.width = width;
    mainEl.style.marginLeft = width;

    buttonIcon.classList.toggle("fa-arrow-circle-right");
    buttonIcon.classList.toggle("fa-arrow-circle-left");
}

function openTab(evt, tabName) {
    let tabcontent, tablinks;
    

    if ( availableSites.includes(tabName) ){
        contentEl.hide();
        
        $.get('tabs/'+tabName+'.html', function(data){ 
            contentEl.html(data);
        }, 'html')
        .done(function () {
            contentEl.show();
        })
    }

}