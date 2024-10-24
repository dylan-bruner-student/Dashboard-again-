const { ipcRenderer } = require("electron");

document.getElementById('minimizeBtn').onclick = function() {
    ipcRenderer.send('minimize')
}
document.getElementById('closeBtn').onclick = function() {
    ipcRenderer.send('close')
}