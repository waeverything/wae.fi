MinecraftAPI.getServerStatus('wae.fi', {
  port: 25565
}, function(err, status) {
  if (status.online == true) {
    document.getElementById('publicMCVersion').innerHTML = "Versio: " + (status.server.name.split(" ").pop());
    document.getElementById('publicMCPlayercount').innerHTML = "Pelaajamäärä: " + status.players.now + "/" + status.players.max;
  }
});
MinecraftAPI.getServerStatus('wae.fi', {
  port: 25566
}, function(err, status) {
  if (status.online == true) {
    document.getElementById('holistiMCVersion').innerHTML = "Versio: " + (status.server.name.split(" ").pop());
    document.getElementById('holistiMCPlayercount').innerHTML = "Pelaajamäärä: " + status.players.now + "/" + status.players.max;
  }
});
