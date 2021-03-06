var express = require('express')
var multer = require('multer')
var upload = multer({
    dest: 'uploads/'
})

module.exports = function(pool) {
    'use strict';

    var router = express.Router();
    router.post('/uploadAnalysis', upload.single(), function(req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query('CALL create_analysis(?,?,?,?);', [req.body.userId, req.body.processId, req.body.description, req.body.image], function(error, rows) {
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