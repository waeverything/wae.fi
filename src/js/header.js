import image from 'url:../images/header/3dbar.svg';

const elementDiv = document.getElementById("backgroundElements");
function createBannerElements(barCount) {
  for (let i = 0; i < barCount; i++) {
    const elem = document.createElement("img");
    elem.setAttribute("src", image);
    elem.style.animationDelay = Math.floor(Math.random() * -60) + "s";
    elem.style.opacity = Math.random() * 1;
    elementDiv.appendChild(elem);
  }
}

document.onload = createBannerElements(12);


//Typewriter
/* let txt = 'We Accidentally Everything';
let speed = 100;
let i = 0;

function typeWriter() {
  if(i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
} */

//window.onload = setTimeout(typeWriter, 1000);
