const express = require('express');
const controller = require('./controllers');
const apiRouter = express.Router();

/*************************
***start of AUTH routes***
*************************/
//SignUp Function
apiRouter.post('/auth',
    (req, res) => {
    res.status(200).json('post signup');
});

//Login Function
apiRouter.get('/auth',
    (req, res) => {
    res.status(200).json('get login');
});
/*************************
****end of AUTH routes****
*************************/

/*************************
****start of CV routes****
*************************/
//This will get all the information of a CV with given ID
apiRouter.get('/cv/:id', 
    controller.getCv, 
    (req, res) => {
    res.status(200).json(res.locals.cv);
});

//This will add a new CV with a first_name into CV table and return that new entries ID 
apiRouter.post('/cv',
    controller.createCv,
    (req, res) => {
        res.status(200).json(res.locals.cvId);
    }
)

//This will update a CV's education and/or skill_ids for the CV with given ID 
apiRouter.put('/cv/:id',
    controller.updateCv,
    controller.addCvSkills,
    (req, res) => {
        res.status(200).json(req.params.id);
    }
)
/*************************
*****end of CV routes*****
*************************/

/*************************
***start of JOBs routes***
*************************/
//This will add a new jobs into the jobs table with given CV ID 
apiRouter.post('/job/:id',
    controller.createJob,
    controller.addJobsSkills,
    (req, res) => {
        res.status(200).json(res.locals.cvId);
    }
)

apiRouter.get('/job/:id',
    controller.getJobs,
    (req, res) => {
        res.status(200).json(res.locals.jobs);
    }
)
/*************************
****end of JOBs routes****
*************************/

/*************************
**start of Skills routes**
*************************/
//Gets full skills table as on object with _ids as keys and Skill Text as values
apiRouter.get('/skills',
    controller.getSkills,
    (req, res) => {
        res.status(200).json(res.locals.skills);
    }
)

//Gets skills array of a CV of given ID
apiRouter.get('/skills/cv/:id',
    controller.getSkillsFromCv,
    (req, res) => {
        res.status(200).json(res.locals.skills);
    }
)

//Gets skills array of a Job of given ID
apiRouter.get('/skills/job/:id',
    // controller.getSkillsFromJobs,
    (req, res) => {
        res.status(200).json("res.locals.skills");
    }
)
/*************************
***end of Skills routes***
*************************/

module.exports = apiRouter;