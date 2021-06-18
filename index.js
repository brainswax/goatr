#!/usr/bin/env node
require('custom-env').env(process.env.NODE_ENV);
import { log, error, debug } from './src/slackbot.mjs';

//Main executing function
(async () => {
   try {
      log("Sarting the goatr service");
   }
   catch(err) {
      error(err);
   }
})();
