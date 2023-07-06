const newRouter = require('./news')
const siteRouter = require('./site')
const meRouter = require('./me')
const newContentRouter = require('./newContent')

function route(app) {   
       
      app.use('/news', newRouter);
      
      app.use('/', siteRouter);
      app.use('/newContent', newContentRouter);
      app.use('/me', meRouter);
}

module.exports = route;