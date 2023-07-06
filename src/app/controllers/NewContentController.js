const CollectionExample = require('../models/CollectionExample');
const {mongooseToObject} = require('../../util/mongoose');

class NewContentController {
  newContents(req, res, next) {
    CollectionExample.findOne({
        slug: req.params.slug
      })
      .then(data => {
        res.render('newContent', {
          data: mongooseToObject(data)
        });
      })
      .catch(next);
  }
  //  Get
  create(req, res, next) {
    res.render('create')
  }
  //  Post
  async store(req, res, next) {
    try {
      const formData = req.body
      formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
      const course = new CollectionExample(formData)
      await course.save()
      res.redirect('/')
    } catch (err) {
      res.send('thất bại')
    }
  }
  //  PUT
  edit(req, res, next) {
    CollectionExample.findById(req.params.id)
    .then(data => res.render('edit', {
      data: mongooseToObject(data)
    }))
    .catch(next)
  }

  update(req, res, next) {
    CollectionExample.updateOne({_id: req.params.id}, req.body)
    .then(() => res.redirect('/me/stored/course'))
    .catch(next)
  }

}
module.exports = new NewContentController();