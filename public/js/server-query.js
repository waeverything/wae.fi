fetchMinecraftStatus('version-minecraft-public', 'wae.fi:25565');
fetchMinecraftStatus('version-minecraft-holisti', 'wae.fi:25566');
fetchMinecraftStatus('version-minecraft-snapshot', 'wae.fi:25567');

async function fetchMinecraftStatus(elementId, ip) {
  fetch('https://api.mcsrvstat.us/2/' + ip)
    .then(res => res.json())
    .then((out) => {
      if (out.online != true) return;

      document.getElementById(elementId).innerText = out.version;
      //document.getElementById(elementID + 'Players').innerHTML = out.players.online + "/" + out.players.max;
    })
    .catch(err => {
      throw err;
    });
}
