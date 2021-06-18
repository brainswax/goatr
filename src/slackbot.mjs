import axios from 'axios'

// Format a message as a normal log to be sent to slack
function formatLog(log) {
   return { mkdwn: true,
            attachments: [{
               color: "good",
               text: log,
            }],
         };
};

// Format a message as an error to be sent to slack
function formatError(error) {
   return { mkdwn: true,
            attachments: [{
               title: "Error",
               color: "#f50057",
               text: error,
            }],
         };
}

// Format a debug message to be sent to slack
function formatDebug(log) {
   return { mkdwn: true,
            attachments: [{
               color: "#555555",
               text: log,
            }],
         };
};

// Send a message to slack
async function notify(msg) {
   try {
      await axios.post(process.env.SLACK_HOOK, msg);
   }
   catch(err) {
      console.error(`Error: ${err}`);
   }
}

// Send a normal log message to slack
function log(log) {
   console.log(`Log: ${log}`);
   notify(formatLog(log));
}

// Send an error message to slack
function error(log) {
   console.error(`Error: ${log}`);
   notify(formatError(log));
}

// Send an debug message to slack
function debug(log) {
   console.debug(`Debug: ${log}`);
   notify(formatDebug(log));
}

export { log, error, debug };
