const path = require('path')

module.exports = {
    i18n:{
      locales:["en","az"],
      defaultLocale:"az"
    },
    localePath: path.resolve('./public/locales')
  }