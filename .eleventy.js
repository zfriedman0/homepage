const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        files: 'public/_site/css/**/*.css'
    });
    
    // Watch the 'css' directory for changes
    eleventyConfig.addWatchTarget('src/sass');

    // Copy the 'css' directory to the output (_site folder)
    eleventyConfig.addPassthroughCopy('_site/css');

    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
            'dd LLL yyyy'
        );
    }); 

    return {
        dir: {
            input: "src",
            output: "public/_site",
        },
    };
};
