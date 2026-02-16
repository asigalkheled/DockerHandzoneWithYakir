const express = require('express')
const log4js = require('log4js')
const app = express()

require('dotenv').config()
const port = process.env.PORT || 3000

const app_id = process.env.APP_ID || "App1"

log4js.configure({

  appenders: {

    file: {
      type: 'file',
      filename: 'logs/myapp.log',
      layout: {
        type: 'pattern',
        pattern: '[%p] %d{yyyy-MM-ddThh:mm:ssZ} - %m'
      }

    }

  },

  categories: {

    default: {
      appenders: ['file'],
      level: 'info'
    }

  }

})


const logger = log4js.getLogger()

app.get('/', (req, res) => {
  res.send('Homework 02 09')
})

app.get('/health',(req,res) => {
  const timestamp = new Date().toISOString();

  logger.info(`Health check called - ${app_id}`)

  res.json({
  "status": "OK",
  "timestamp": timestamp
})
})

app.listen(port, () => {
  console.log(`${app_id} listening on port ${port}`)
})
