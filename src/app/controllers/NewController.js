
class NewController {
  
    index(req, res) {
     res.render('news')
  }

//   [GET] /news
    show(req, res) {
     res.send('News Dtails')
  }

}


module.exports = new NewController;