fetchMinecraftStatus('publicMinecraft', 'wae.fi:25565');
fetchMinecraftStatus('holistiMinecraft', 'wae.fi:25566');
fetchMinecraftStatus('snapshotMinecraft', 'wae.fi:25567');

function fetchMinecraftStatus(elementID, ip) {
  fetch('https://api.mcsrvstat.us/2/' + ip)
    .then(res => res.json())
    .then((out) => {
      if (out.online != true) return;

      document.getElementById(elementID + 'Version').innerHTML = out.version.split(" ").pop();
      document.getElementById(elementID + 'Players').innerHTML = out.players.online + "/" + out.players.max;
    })
    .catch(err => {
      throw err;
    });
}

