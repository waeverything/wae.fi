//JSON URL
let url = 'https://discordapp.com/api/guilds/95873997861834752/widget.json';

//Refresh interval
let interval = 80000;

let elem = document.getElementById("memberCount");

document.onload = update();

//Run script again every x seconds
window.setInterval(function() {
  update();
}, interval);

//Update member counter
function update() {
  fetch(url)
    .then(res => res.json())
    .then((out) => {
      elem.innerHTML = out.members.length;
    })
    .catch(err => {
      throw err
    });
};
