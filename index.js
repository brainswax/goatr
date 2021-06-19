#!/usr/bin/env node
require('custom-env').env(process.env.NODE_ENV);
import { logger } from './src/slacker.mjs';
import { getStamp, triggerRestart } from './src/autostart.mjs';
import util from 'util';

const delay = util.promisify(setTimeout);

//Main executing function
(async () => {
   logger.info("Sarting the goatr service");

// Throw an error after 5 seconds to cause the script to restart
//   delay(5000)
//      .then(() => { throw "Here's a forced exception!"; })
//      .catch((err) => { logger.error(err.toString()); triggerRestart(); });
})();
