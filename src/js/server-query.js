fetch("https://api.mcsrvstat.us/2/wae.fi")
  .then(res => res.json())
  .then((out) => {
    if (out.online != true) {
      return;
    }
    document.getElementById('publicMinecraftVersion').innerHTML = out.version.split(" ").pop();
    document.getElementById('publicMinecraftPlayers').innerHTML = out.players.online + "/" + out.players.max;
  })
  .catch(err => {
    throw err
  });

fetch("https://api.mcsrvstat.us/2/wae.fi:25566")
  .then(res => res.json())
  .then((out) => {
    if (out.online != true) {
      return;
    }
    document.getElementById('holistiMinecraftVersion').innerHTML = out.version.split(" ").pop();
    document.getElementById('holistiMinecraftPlayers').innerHTML = out.players.online + "/" + out.players.max;
  })
  .catch(err => {
    throw err
  });

  fetch("https://api.mcsrvstat.us/2/wae.fi:25567")
  .then(res => res.json())
  .then((out) => {
    if (out.online != true) {
      return;
    }
    document.getElementById('snapshotMinecraftVersion').innerHTML = out.version.split(" ").pop();
    document.getElementById('snapshotMinecraftPlayers').innerHTML = out.players.online + "/" + out.players.max;
  })
  .catch(err => {
    throw err
  });

