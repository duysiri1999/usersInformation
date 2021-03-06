const express = require('express');

const router = express.Router();
const controller = require('../controllers/user.controller');

router.get('/', controller.index );
router.get('/search', controller.search);
router.get('/create', controller.create);
router.get('/:id', controller.getId);
router.post('/create', controller.postCreate)

module.exports = router;    