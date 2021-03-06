var express = require('express')

var Busboy = require('busboy'), //
    inspect = require('util').inspect;

var multer = require('multer')
var upload = multer({
    dest: 'uploads/'
})

module.exports = function(pool) {
    'use strict';

    var router = express.Router();

    router.post('/getUsers', function(req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query('CALL check_user(?,?)', [req.body.mailp, req.body.passp], function(error, rows) {
                if (error) {
                    res.status(500).send({ message: error.message });
                    return next(error);
                };
                if (!rows[0].length) {
                    res.status(500).send({ message: 'Something was wrong!' });
                } else {
                    res.send(rows[0][0]);
                }
                connection.release();
            });
        });
    });
    router.post('/login', function(req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query('CALL check_user(?,?)', [req.body.email, req.body.password], function(error, rows) {
                if (error) {
                    res.status(500).send({ message: error.message });
                    return next(error);
                };
                if (!rows[0].length) {
                    res.status(500).send({ message: 'Something was wrong!' });
                } else {
                    res.send(rows[0][0]);
                }
                connection.release();
            });
        });
    });
    router.post('/editUser', upload.single('avatar'), function(req, res, next) {
        console.log(req.body)
        pool.getConnection(function(err, connection) {
            connection.query('CALL user_update_profile(?,?,?,?,?)', [req.body.userId, req.body.mail, req.body.password, req.body.name, req.body.image], function(error, rows) {
                if (error) {
                    res.status(500).send({ message: error.message });
                    return next(error);
                };
                console.log(rows.affectedRows)
                if (rows.affectedRows == 0) {
                    res.send(JSON.stringify({ "result": "invalid" }));
                } else {
                    res.send(JSON.stringify({ "result": "valid" }));
                }
                connection.release();
            });
        });
    });

    return router;
};