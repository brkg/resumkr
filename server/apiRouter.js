const express = require('express');
const controller = require('./controllers');
const apiRouter = express.Router();

apiRouter.use('/getCv', 
    controller.getCv, 
    (req, res) => {
    res.status(200).json(res.locals.cv);
});

module.exports = apiRouter;