#!/usr/bin/env node
require('custom-env').env(process.env.NODE_ENV);
import { logger } from './src/slacker.mjs';
import { getStamp, triggerRestart } from './src/autostart.mjs';

//Main executing function
(async () => {
   try {
      logger.info("Sarting the goatr service");
      logger.info(getStamp());
      //setTimeout(() => { triggerRestart(); }, 4000);
   }
   catch(err) {
      error(err.toString());
   }
})();
