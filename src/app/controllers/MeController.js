const CollectionExample = require('../models/CollectionExample');
const {mutipleMongooseToObject} = require('../../util/mongoose')
class MeController {
 
   storedCourses (req, res, next) {
    CollectionExample.find({})
    .then(data => {
        res.render('me-stored-courses', {data: mutipleMongooseToObject(data)})
   })
   .catch(next)
  }
 
}


module.exports =  new MeController();