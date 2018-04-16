// Only enable if the document has a long scroll bar
// Note the window height + offset
if ( ($(window).height() + 100) < $(document).height() ) {
    $('#to-top').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:100}
    });
}

$('img').on('dragstart', false);

            //Scripts for le tabcontents

            function openNav() {
                document.getElementById("mySidenav").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";

                document.getElementById("openbutton").onclick = closeNav;
                document.getElementsByClassName("buttonIcon")[0].classList.toggle("fa-arrow-circle-right");
                document.getElementsByClassName("buttonIcon")[0].classList.toggle("fa-arrow-circle-left");
            }

            function closeNav() {
                document.getElementById("mySidenav").style.width = "0";
                document.getElementById("main").style.marginLeft = "0";

                document.getElementById("openbutton").onclick = openNav;
                document.getElementsByClassName("buttonIcon")[0].classList.toggle("fa-arrow-circle-right");
                document.getElementsByClassName("buttonIcon")[0].classList.toggle("fa-arrow-circle-left");
            }

        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;

            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            evt.currentTarget.className += " active";
        }