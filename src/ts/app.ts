/// <reference path="../typings/github-electron/github-electron.d.ts" />
/// <reference path="../typings/node/node.d.ts" />

import app from 'app';
import BrowserWindow from 'browser-window';
import crashReporter from 'crash-reporter';

let mainWindow: BrowserWindow = null;

// for development
if (process.env.NODE_ENV === 'develop') {
    crashReporter.start();
}

app.on('window-all-closed', () => {
    app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadUrl('file://' + __dirname + '/../index.html');

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

