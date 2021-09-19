const express = require('express');
const controller = require('./controllers');
const apiRouter = express.Router();

apiRouter.get('/cv', 
    controller.getCv, 
    (req, res) => {
    res.status(200).json(res.locals.cv);
});

//add getSkill route

apiRouter.post('/cv',
    controller.addJobs,
    controller.addJobsSkills,
    controller.addCv,
    controller.addCvSkills,
    controller.addCvJobs,
    (req, res) => {
        res.status(200).json(res.locals.jobId);
    }
)

module.exports = apiRouter;