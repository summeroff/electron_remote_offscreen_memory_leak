// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

//app.disableHardwareAcceleration();

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),nodeIntegration: true
    }
  })

  mainWindow.loadFile('index.html')
  //mainWindow.loadURL('chrome://tracing')
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {

    mainWindow = null
  })


}

app.on('ready', createWindow)


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

