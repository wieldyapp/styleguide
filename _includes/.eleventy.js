module.exports = function (eleventy) {

  // Creates custom collection "elements"
  eleventy.addCollection("elements", function(collection) {
    return collection.getFilteredByGlob("/elements/*.liquid");
  });
  // Creates custom collection "components"
  eleventy.addCollection("components", function(collection) {
      return collection.getFilteredByGlob("/components/*.liquid");
  });

};
