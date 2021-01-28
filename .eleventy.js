module.exports = function(eleventyConfig) {
  // Output directory: _site

  // Copy `fonts/` to `_site/fonts`
  // eleventyConfig.addPassthroughCopy("fonts");

  // Copy `img/` to `_site/img`
  // eleventyConfig.addPassthroughCopy("img");

  // Copy `css/` to `_site/css`
  // eleventyConfig.addPassthroughCopy("css");

  // Copy `js/` to `_site/js`
  eleventyConfig.addPassthroughCopy("scripts");
};