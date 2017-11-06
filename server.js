const webServer = require('live-server')
const Config = require('./config.json')

// Start webserver
webServer.start({
  port: Config.port,
  host: Config.host,
  root: Config.docRoot,
  open: Config.openBrowser,
  file: Config.notFoundFile,
  wait: Config.waitBeforeReload,
  logLevel: Config.logLevel
})
