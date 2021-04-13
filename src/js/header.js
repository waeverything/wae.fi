import image from 'url:../images/header/3dbar.svg';

const elementDiv = document.getElementById("backgroundElements");

function createBannerElements(barCount) {
  for (let i = 0; i < barCount; i++) {
    const elem = document.createElement("img");
    elem.setAttribute("src", image);
    elem.style.animationDelay = (Math.random() * -60).toFixed(1) + "s";
    elem.style.opacity = Math.random();
    elementDiv.appendChild(elem);
  }
}

document.onload = createBannerElements(12);
