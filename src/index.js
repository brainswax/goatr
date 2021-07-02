#!/usr/bin/env node
import { logger } from './slacker.mjs'
require('custom-env').env(process.env.NODE_ENV)

// const prettySpace = '    ' // Used for formatting JSON in logs
const app = {}
app.exited = false

// Main executing function
;(async () => {
  process.on('beforeExit', (code) => {
    if (!app.exited) { app.exited = true; logger.info(`== about to exit with code: ${code}`) }
  })
  process.on('exit', (code) => { console.info(`== exiting with code: ${code}`) })

  import('../package.json')
    .then(pkg => { logger.info(`== starting ${pkg.default.name}@${pkg.default.version}`) })
    .catch(e => { console.error(`Unable to open package information: ${e}`) })
})()
