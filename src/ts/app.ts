/// <reference path="../typings/github-electron/github-electron.d.ts" />
/// <reference path="../typings/node/node.d.ts" />

var app: GitHubElectron.App = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  var mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadUrl('file://' + __dirname + '/../index.html');

  mainWindow.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
