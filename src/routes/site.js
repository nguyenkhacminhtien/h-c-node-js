const express = require('express');
const router = express.Router();

const SiteController = require('../app/controllers/SiteController');
const siteController = new SiteController();

router.get('/search', siteController.search);
router.get('/', siteController.home);

module.exports = router;