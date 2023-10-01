//imports
const { handleError } = require('../utils/errorHandle.utils');
const logger = require('../utils/logger.utils');
const { memoizedBlogStats, memoizedBlogSearch } = require('../utils/memoizedBlog.utils');

//!Controller to get Blog Stats
module.exports.blogStats = async (req, res) => {
    try {
        const blogs = req.blogData;

        const blogStats = await memoizedBlogStats(blogs);

        return res.json(blogStats);
    } catch (error) {
        logger.error(error);
        handleError(error, req, res, next);
    }
};

//!Controller to search for Blogs
module.exports.blogSearch = async (req, res) => {
    const blogs = req.blogData;
    const query = req.query.query.toLowerCase();

    try {
        const matchingBlogs = memoizedBlogSearch(blogs, query);

        return res.json(matchingBlogs);
    } catch (error) {
        logger.error(error);
        handleError(error, req, res, next);
    }
};
