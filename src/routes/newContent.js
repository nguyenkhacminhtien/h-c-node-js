const express = require('express');
const router = express.Router();

const newsContentController = require('../app/controllers/NewContentController');

router.get('/create', newsContentController.create);
router.post('/store', newsContentController.store);
router.get('/:id/edit', newsContentController.edit);
router.put('/:id', newsContentController.update);
router.get('/:slug', newsContentController.newContents);

module.exports = router;