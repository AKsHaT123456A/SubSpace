//imports
const logger = require("../utils/logger.utils");

//!Speed Check
function speedChecker(req, res, next) {
    const startTime = new Date();

    next();

    res.on('finish', () => {
        const endTime = new Date();
        const elapsedTime = endTime - startTime;

        logger.info(`Request for ${req.method} ${req.url} took ${elapsedTime} ms`);
    });
}

//Exports
module.exports = speedChecker;