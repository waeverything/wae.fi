fetch("https://api.mcsrvstat.us/2/wae.fi:25566")
  .then(res => res.json())
  .then((out) => {
    if (out.online != true) {
      return;
    }
    document.getElementById('holistiMCVersion').innerHTML = "Versio: " + out.version.split(" ").pop();
    document.getElementById('holistiMCPlayercount').innerHTML = "Pelaajamäärä: " + out.players.online + "/" + out.players.max;
  })
  .catch(err => {
    throw err
  });

fetch("https://api.mcsrvstat.us/2/wae.fi")
  .then(res => res.json())
  .then((out) => {
    if (out.online != true) {
      return;
    }
    document.getElementById('publicMCVersion').innerHTML = "Versio: " + out.version.split(" ").pop();
    document.getElementById('publicMCPlayercount').innerHTML = "Pelaajamäärä: " + out.players.online + "/" + out.players.max;
  })
  .catch(err => {
    throw err
  });