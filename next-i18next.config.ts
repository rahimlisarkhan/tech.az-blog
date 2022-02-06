const path = require('path')
export default path

module.exports = {
    i18n:{
      locales:["en","fr","az"],
      defaultLocale:"az"
    },
    localePath: path.resolve('./public/locales')
  }