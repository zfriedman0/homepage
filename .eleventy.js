const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    //eleventyConfig.addPassthroughCopy("src/CNAME");

    // Copy the 'css' directory to the output (_site folder)
    eleventyConfig.addPassthroughCopy('/src/css');
    
    // Watch the 'css' directory for changes
    eleventyConfig.addWatchTarget('/src/css');

    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
            'dd LLL yyyy'
        );
    }); 

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
