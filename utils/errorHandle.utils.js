//imports
const logger = require("./logger.utils");

//!Error Handling
const handleError = (err, req, res, next) => {
    logger.error(err);
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({ error: err.message });
};

//exports
module.exports = {
    handleError,
};
