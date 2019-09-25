'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {

    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);

    if (req.query.method == 'add' && req.query.x && req.query.y) {
        var sum = x + y;
        res.send('Adding ' + req.query.x + ' and ' + req.query.y + ', We get ' + sum);
    }
    else if (req.query.method == 'subtract' && req.query.x && req.query.y) {
        var sub = x - y;
        res.send('Subtracting ' + req.query.x + ' and ' + req.query.y + ', We get ' + sub);
    }
    else if (req.query.method == 'multiply' && req.query.x && req.query.y) {
        var mul = x * y;
        res.send('Multiplying ' + req.query.x + ' and ' + req.query.y + ', We get ' + mul);
    }
    else if (req.query.method == 'divide' && req.query.x && req.query.y) {
        var div = x / y;
        res.send('Dividing ' + req.query.x + ' and ' + req.query.y + ', We get ' + div);
    }

    else if (req.query.user == 'abc') {
        console.log('particular user');
        res.send('working');
    }
    else
        res.send('Math');
});


module.exports = router;
