const winston = require('winston')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'project-service' },
    transports: [
        new winston.transports.File({ filename: 'v1/src/logs/projects/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'v1/src/logs/projects/info.log', level: 'info' }),
        new winston.transports.File({ filename: 'v1/src/logs/projects/combined.log' }),//leveli sildiğin anda bu combined olur 

        //new winston.transports.Console()/ / Bu her bir aksiyonu consola yazacaktır
    ]
})

module.exports = logger