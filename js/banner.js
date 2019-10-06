//Background
let barCount = 12;

for (let i = 0; i < barCount; i++) {
  let elem = document.createElement("img");
  elem.setAttribute("src", "svg/3dbar.svg");
  elem.style.animationDelay = Math.floor(Math.random() * -60) + "s";
  elem.style.opacity = Math.random() * 1;
  document.getElementById("banner").appendChild(elem);
}

//Typewriter
let txt = 'We Accidentally Everything';
let speed = 100;
let i = 0;

function typeWriter() {
  if(i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = setTimeout(typeWriter, 1000);
