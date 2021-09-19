db = require('./database')

const controller = {};

controller.getCv = async (req, res, next) => {
  //expects a key to be passed into request as {id:X} 
  //example localhost/api/getCv/?id=1
  const GET_CV_QUERY = `SELECT * FROM cv WHERE _id=${req.query.id}`;
  try{
    const result = await db.query(GET_CV_QUERY);
    res.locals.cv = result.rows[0];
    next();
  }
  catch{
    next({
        log: "Error in Get CV",
        status: 400,
        message: { err: "Error in Get CV" },
      });
  }

};

controller.getSkills = async (req, res, next) => {
  //Create an SQL command to get all skills from skills table
  const GET_SKILLS_QUERY = '';
  try{
    //query for skills table
    next()
  }
  catch{
    next({
      //make relevant error message
    })
  }
  
};

controller.addCv = async (req, res, next) => {
  //This function expects to recieve a Full Name (this ID will auto increment)
  //the rest are optional (education, skill_ids, job_ids)
  //example body expected
//   {
//     "full_name": "Adi Avishalom",
//     "education": "Brooklyn College",
//     "jobs": [
//                 {
//                     "job_name":"MTA",
//                     "title": "Car Inspector"  ,
//                     "description": "I fixed trains. It sucked ass.",
//                     "skills": [1, 2]         
//                 },
//                 {
//                     "job_name":"Lockheed Martin",
//                     "title": "Verification Analyst",
//                     "description": "I tested code. It was cool but managment sucked ass.",
//                     "skills": [3, 4] 
//                 }
//             ],
//     "skills": [1, 2, 3, 4, 6]
// }

  const ADD_CV_QUERY = 'INSERT INTO cv (full_name, education, job_ids, skill_ids)' +
                       ` VALUES ('${req.body.full_name}', '${req.body.education}', ARRAY [${res.locals.jobIds}],  ARRAY [${req.body.skills}])`;

  const GET_ID_QUERY = `SELECT last_value FROM cv_id_seq`
                     
  
  try{
    await db.query(ADD_CV_QUERY);
    const cv_id = await db.query(GET_ID_QUERY);
    // const GET_CV_QUERY = `SELECT * FROM cv WHERE _id=${cv_id.rows[0].last_value}`; 
    // const result = await db.query(GET_CV_QUERY);
    res.locals.cvId = cv_id.rows[0].last_value;
    console.log(res.locals.cvId);
    next();
  }
  catch{
    next({
      log: "Error in Add CV",
      status: 400,
      message: { err: "Error in ADD CV" },
    })
  }

};


controller.addJobs = async (req, res, next) => {
  console.log(req.body.jobs);
  res.locals.jobIds = [];
  let ADD_CV_QUERY;
  let GET_ID_QUERY;
  try{
    //for each job
    for (let i = 0; i < req.body.jobs.length; i++){
      //add job to table
      ADD_CV_QUERY = 'INSERT INTO jobs (job_name, title, description, skill_ids)'+
                          ` VALUES ('${req.body.jobs[i].job_name}', '${req.body.jobs[i].title}', '${req.body.jobs[i].description}', ARRAY [${req.body.jobs[i].skills}])`;           
      await db.query(ADD_CV_QUERY);

      //once added, gets the latest id added to table and saves it to result
      GET_ID_QUERY = `SELECT last_value FROM job_id_seq`;
      let result = await db.query(GET_ID_QUERY);

      //pushed the id# to array that will be used by Cv
      res.locals.jobIds.push(result.rows[0].last_value);
    }
    next()
  }
  catch{
    next({
      log: "Error in Add Jobs",
      status: 400,
      message: { err: "Error in ADD Jobs" },
    })
  }
  
};

//Updates Job ID/Skill ID ref table
controller.addJobsSkills = async (req, res, next) => {
  //Create an SQL command to get all skills from skills table
  let ADD_ID_REF_QUERY;
  try{
    for (let i = 0; i < res.locals.jobIds.length; i++){
      for (let ii = 0; ii < req.body.jobs[i].skills.length; ii++){
        ADD_ID_REF_QUERY = 'INSERT INTO jobs_skills (job_id, skill_id)'+
                            ` VALUES ('${res.locals.jobIds[i]}', '${req.body.jobs[i].skills[ii]}')`
        await db.query(ADD_ID_REF_QUERY);
      }
    }
    next()
  }
  catch{
    next({
      log: "Error in Add Job Skill Ref",
      status: 400,
      message: { err: "Error in ADD Job Skill Ref" },
    })
  }
  
};

//Updates CV ID/Skill ID ref table
controller.addCvSkills = async (req, res, next) => {
  //Create an SQL command to get all skills from skills table
  let ADD_ID_REF_QUERY;
  try{
    for (let i = 0; i < req.body.skills.length; i++){
      ADD_ID_REF_QUERY = 'INSERT INTO cv_skills (cv_id, skill_id)'+
                          ` VALUES ('${res.locals.cvId}', '${req.body.skills[i]}')`
      await db.query(ADD_ID_REF_QUERY);
    }
    next()
  }
  catch{
    next({
      log: "Error in Add CV Skill Ref",
      status: 400,
      message: { err: "Error in ADD CV Skill Ref" },
    })
  }
  
};

//Updates CV ID/Job ID ref table
controller.addCvJobs = async (req, res, next) => {
  //Create an SQL command to get all skills from skills table
  let ADD_ID_REF_QUERY;
  try{
    for (let i = 0; i < res.locals.jobIds.length; i++){
      ADD_ID_REF_QUERY = 'INSERT INTO cv_jobs (cv_id, job_id)'+
                          ` VALUES ('${res.locals.cvId}', '${res.locals.jobIds[i]}')`
      await db.query(ADD_ID_REF_QUERY);
    }
    next()
  }
  catch{
    next({
      log: "Error in Add CV Job Ref",
      status: 400,
      message: { err: "Error in ADD CV Job Ref" },
    })
  }
  
};

// controller.addSkill = async (req, res, next) => {
//     const get_q;
//     try{
//       next()
//     }
//     catch{
//       next({err})
//     }
  
// };

// controller.updateCvInfo = async (req, res, next) => {
//     const get_q;
//     try{
//       next()
//     }
//     catch{
//       next({err})
//     }
  
// };

// controller.updateSkillList = async (req, res, next) => {
//     const get_q;
//     try{
//       next()
//     }
//     catch{
//       next({err})
//     }
  
// };


// // controller.hashPass = async (req, res, next) => {
// //     const get_q;
// //     try{
// //       next()
// //     }
// //     catch{
// //       next({err})
// //     }
  
// // };


// // controller.hashCompare = async (req, res, next) => {
// //     const get_q;
// //     try{
// //       next()
// //     }
// //     catch{
// //       next({err})
// //     }
  
// // };

module.exports = controller;