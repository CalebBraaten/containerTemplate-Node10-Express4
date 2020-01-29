const express = require('express');
const bodyParser = require('body-parser');

const genericRouter = express.Router();

genericRouter.use(bodyParser.json());

genericRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('get called on domain.tld/generic/');
})
.post((req, res) => {
    res.end(`post called on domain.tld/generic/`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('put called on domain.tld/generic/');
})
.delete((req, res) => {
    res.end('delete called on domain.tld/generic/');
});

module.exports = genericRouter;