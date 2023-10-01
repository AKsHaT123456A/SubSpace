//imports
const lodash = require('lodash');


//!memoizedBlogStats
const memoizedBlogStats = lodash.memoize(async (blogs) => {
    const totalBlogs = blogs.length;
    const longestBlog = lodash.maxBy(blogs, 'title.length');
    const blogsWithPrivacy = blogs.filter((blog) =>
        blog.title.toLowerCase().includes('privacy')
    );
    const uniqueBlogTitles = lodash.uniqBy(blogs, 'title');

    return {
        totalBlogs,
        longestBlog: longestBlog.title,
        blogsWithPrivacy: blogsWithPrivacy.length,
        uniqueBlogTitles: uniqueBlogTitles.map((blog) => blog.title),
    };
}, () => 'blogStatsCacheKey');


//!memoizedBlogSearch
const memoizedBlogSearch = lodash.memoize((blogs, query) => {
    const matchingBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(query)
    );

    return matchingBlogs;
}, (blogs, query) => `blogSearchCacheKey:${query}`);

module.exports = { memoizedBlogSearch, memoizedBlogStats }