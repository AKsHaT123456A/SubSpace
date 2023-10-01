//Imports 
const express = require('express');
require('dotenv').config();
const fetchBlogData = require('./middleware/blogApi.middleware');
const blogRoute = require("./routes/blog.routes");
const speedChecker = require('./middleware/speedChecker.middleware');
const logger = require('./utils/logger.utils');
const { handleError } = require('./utils/errorHandle.utils');

//!Server
const app = express();

//!Specifying Port
const port = 3000||process.env.PORT;

//!Middlewares
app.use(speedChecker);
app.use(fetchBlogData);
app.use((err, req, res, next) => {
    logger.error(err);
    handleError(err, req, res, next);
});

//!Basic Route
app.get("/", function (req, res) {
    res.send("Hello SubSpace!");
});

//!Base Route
app.use("/api", blogRoute);


//!server starts listening on port 3000
app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
});
