const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {className: 'contact', title: 'Contact page', page: "contact"});
});

module.exports = router;
