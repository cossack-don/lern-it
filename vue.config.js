module.exports = {
    // publicPath: "/textbook/",
    publicPath: process.env.NODE_ENV === 'production' ?
      '/textbook/':
      '/'
    // используется для продакшена '/textbook/' имя репозитория
};
