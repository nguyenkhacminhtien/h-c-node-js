const CollectionExample = require('../models/CollectionExample');
const {mutipleMongooseToObject} = require('../../util/mongoose')
class SiteController {
  
  home(req, res, next) {
    CollectionExample.find({})
    .then (data => {
    
      res.render('home', {data: mutipleMongooseToObject(data)})
    
    })
    .catch (next)
  }

//   [GET] /search
     search(req, res) {
     res.render('search')
  }

}


module.exports =  SiteController;