import axios from 'axios'

const logger = {}

// Format a message as an error to be sent to slack
function formatError (error) {
  return {
    mkdwn: true,
    attachments: [{
      title: 'Error',
      color: '#f50057',
      text: error
    }]
  }
}

// Format a message as an error to be sent to slack
function formatWarn (log) {
  return {
    mkdwn: true,
    attachments: [{
      title: 'Warning',
      color: '#ffdd33',
      text: log
    }]
  }
}

// Format a message as a normal log to be sent to slack
function formatInfo (log) {
  return {
    mkdwn: true,
    attachments: [{
      color: 'good',
      text: log
    }]
  }
};

// Format a debug message to be sent to slack
function formatDebug (log) {
  return {
    mkdwn: true,
    attachments: [{
      title: 'Debug',
      color: '#BBBBBB',
      text: log
    }]
  }
};

// Send a message to slack
async function notify (msg) {
  await axios.post(process.env.SLACK_HOOK, msg)
    .then((msg) => console.info(`Info: ${msg}`))
    .catch((err) => { console.error(`Error: ${err}`) })
}

/// ////////////////////////////////////////////////////////////////////////////
// Exported logging functionality

// Send an error message to slack
logger.error = function (log) {
  console.error(`Error: ${log}`)
  notify(formatError(log))
}

// Send an error message to slack
logger.warn = function (log) {
  console.warn(`Warning: ${log}`)
  notify(formatWarn(log))
}

// Send an error message to slack
logger.info = function (log) {
  console.info(`Info: ${log}`)
  notify(formatInfo(log))
}

// Send an debug message to slack
logger.debug = function (log) {
  console.debug(`Debug: ${log}`)
  notify(formatDebug(log))
}

export { logger }
