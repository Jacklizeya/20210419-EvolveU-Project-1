var express = require('express');
var router = express.Router();

/* GET home page. */
// This is kind of duplicated with 
// line 34 in app.js ***  app.use(express.static(path.join(__dirname, 'public')));
// Even I disable it, it will still work
// seems useless router.get('/', express.static('../public'));

module.exports = router;

