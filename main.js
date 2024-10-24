const { app, BrowserWindow, ipcMain } = require('electron')

let win

const createWindow = () => {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        resizable: false,
        titleBarStyle: 'hidden',
        frame: false,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        },
        icon: './images/dashboard.png'
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('close', () => {
    app.quit()
})

ipcMain.on('minimize', () => {
    win.minimize()
})