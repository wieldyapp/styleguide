module.exports = function (eleventy) {

  // Add related posts
  eleventy.addLiquidShortcode("related", (title, url) => `
  <a href="${url}" class="related">${title}</a>
  `);

};
