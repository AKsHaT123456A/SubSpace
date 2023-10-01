//imports
const winston = require('winston');


const { createLogger, format, transports } = winston;
const { combine, timestamp, printf } = format;
const logFormat = printf(({ timestamp, level, message }) => {
    return `[${timestamp}] ${level}: ${message}`;
});

//!logging
const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log' }),
    ]
});

logger.add(new transports.File({ filename: 'error.log', level: 'error' }));

//exports
module.exports = logger;
