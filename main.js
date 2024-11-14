const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
const path = require('path');
require('electron-reload')(path.join(__dirname, '.'), {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});
require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/.bin/electron`)
});
