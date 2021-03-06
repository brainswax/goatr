import os from 'os'
import fs from 'fs'
import util from 'util'
import * as proc from 'process'
import * as cenv from 'custom-env'
import { logger } from './slacker.mjs'

cenv.env(process.env.NODE_ENV)

const writeFile = util.promisify(fs.writeFile)

function getTimeNow () {
  const now = new Date()
  const options = {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  return now.toLocaleDateString('en-US', options)
}

function getStamp () {
  const stamp = {}
  stamp.time = getTimeNow()
  stamp.pid = proc.id ? proc.id : 0
  stamp.platform = proc.platform
  stamp.uptime = proc.uptime()
  stamp.memory = proc.memoryUsage()
  stamp.hostname = os.hostname()
  stamp.version = os.version()
  return JSON.stringify(stamp, null, '\t')
};

async function triggerRestart () {
  try {
    const stamp = getStamp()
    logger.info(stamp)
    writeFile(process.env.RESTART_FILE, stamp)
    return stamp
  } catch (err) {
    logger.error(err)
  }
}

export { triggerRestart, getStamp }
