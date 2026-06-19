module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("thinking.css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("fonts");

  eleventyConfig.addFilter("readableDate", function(dateObj) {
    return new Date(dateObj).getFullYear();
  });

  eleventyConfig.addFilter("stripLeadingSlash", function(value) {
    return String(value || "").replace(/^\/+/, "");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
