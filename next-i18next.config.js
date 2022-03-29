const path = require("path");

module.exports = {
  i18n: {
    locales: ["az", "en"],
    defaultLocale: "az",
  },
  localePath: path.resolve("./public/locales"),
};
