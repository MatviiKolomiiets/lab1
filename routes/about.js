const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('index', {className: 'about', title: 'About page', page: "about"});
});

module.exports = router;
