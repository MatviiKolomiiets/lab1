const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {className: 'projects', title: 'My projects page', page: "projects"});
});

module.exports = router;
