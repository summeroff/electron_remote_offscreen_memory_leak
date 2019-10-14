// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const remote = require('electron').remote;
const { BrowserWindow } = remote;

let win_offscreen1;
  
win_offscreen1 = new BrowserWindow({   
    show: false,
    frame: false,
    width: 600,
    height: 600,
    x: 100,
    y: 100,
    skipTaskbar: true,
    thickFrame: false,
    resizable: false,
    webPreferences: { nodeIntegration: false, contextIsolation: true, offscreen: true }
  })

  win_offscreen1.loadURL('https://www.online-stopwatch.com/large-online-clock/')
  win_offscreen1.webContents.on('paint', (event, dirty, image) => { })
  win_offscreen1.webContents.setFrameRate(60);
  win_offscreen1.webContents.invalidate();
 