db = require("./database");
const controller = {};

//ALL CV RELATED
controller.getCv = async (req, res, next) => {
  //example GET to localhost/api/cv/3
  let cv_Id;
  if (req.params.id) cv_Id = req.params.id;
  else if (res.locals.cvId) cv_Id = res.locals.cvId;
  const GET_CV_QUERY = `SELECT * FROM cv WHERE _id=${cv_Id}`;

  try {
    const result = await db.query(GET_CV_QUERY);
    res.locals.cv = result.rows[0];
    const GET_CVSKILLS_QUERY = `SELECT cv_skills.skill_id, skills.skill_name FROM cv_skills INNER JOIN skills ON skills.skill_name = skill_name  WHERE cv_skills.cv_id=${cv_Id} AND cv_skills.skill_id = skills._id`;
    const skillResult = await db.query(GET_CVSKILLS_QUERY);
    const skill_name_array = [];

    for (let i = 0; i < skillResult.rows.length; i++) {
      skill_name_array.push(skillResult.rows[i].skill_name);
    }

    res.locals.cv["skill_name"] = skill_name_array;
    res.locals.cv["jobs"] = res.locals.jobs;
    next();
  } catch {
    next({
      log: "Error in Get CV",
      status: 400,
      message: { err: "Error in Get CV" },
    });
  }
};

controller.createCv = async (req, res, next) => {
  //createCv expects a full_name key in the body as an input
  //then outputs the ID of the created cv
  const ADD_CV_QUERY =
    "INSERT INTO cv (full_name)" + ` VALUES ('${req.body.full_name}')`;

  const GET_ID_QUERY = `SELECT last_value FROM cv_id_seq`;

  try {
    await db.query(ADD_CV_QUERY);
    const cv_id = await db.query(GET_ID_QUERY);
    // const GET_CV_QUERY = `SELECT * FROM cv WHERE _id=${cv_id.rows[0].last_value}`;
    // const result = await db.query(GET_CV_QUERY);
    res.locals.cvId = cv_id.rows[0].last_value;
    next();
  } catch {
    next({
      log: "Error in Add CV",
      status: 400,
      message: { err: "Error in ADD CV" },
    });
  }
};

controller.updateCv = async (req, res, next) => {
  //this is the SQL command builder and accounts for reciving either education, skill_list, or both
  const cvId = req.params.id;
  const key_array = [];
  if (req.body.education) key_array.push(`education='${req.body.education}'`);
  if (req.body.skill_ids)
    key_array.push(`skill_ids= ARRAY [${req.body.skill_ids}]`);
  let UPDATE_CV_QUERY =
    "UPDATE cv\n" + `SET ${key_array.join(", ")}\n` + `WHERE _id=${cvId}`;
  try {
    //query for skills table
    await db.query(UPDATE_CV_QUERY);
    next();
  } catch {
    next({
      log: "Error in UPDATE CV",
      status: 400,
      message: { err: "Error in UPDATE CV" },
    });
  }
};

//ALL JOB RELATED
controller.createJob = async (req, res, next) => {
  res.locals.jobIds = [];
  let ADD_CV_QUERY;
  let GET_ID_QUERY;
  try {
    //for each job
    for (let i = 0; i < req.body.jobs.length; i++) {
      //add job to table
      ADD_CV_QUERY =
        "INSERT INTO jobs (job_name, title, description, skill_ids, cv_id)" +
        ` VALUES ('${req.body.jobs[i].job_name}', '${req.body.jobs[i].title}', '${req.body.jobs[i].description}', ARRAY [${req.body.jobs[i].skill_ids}], '${req.params.id}')`;
      await db.query(ADD_CV_QUERY);

      //once added, gets the latest id added to table and saves it to result
      GET_ID_QUERY = `SELECT last_value FROM job_id_seq`;
      let result = await db.query(GET_ID_QUERY);

      //pushed the id# to array that will be used by Cv
      res.locals.jobIds.push(result.rows[0].last_value);
    }
    next();
  } catch {
    next({
      log: "Error in Add Jobs",
      status: 400,
      message: { err: "Error in ADD Jobs" },
    });
  }
};

controller.getJobs = async (req, res, next) => {
  //example GET to localhost/api/job/3
  if (req.params.id) cv_Id = req.params.id;
  else if (res.locals.cvId) cv_Id = res.locals.cvId;
  const GET_CV_QUERY = `SELECT * FROM jobs WHERE cv_id=${cv_Id}`;
  let GET_CVSKILLS_QUERY;
  let skillResult;
  let skill_id_array = [];
  let skill_name_array = [];

  try {
    const result = await db.query(GET_CV_QUERY);
    res.locals.jobs = result.rows;
    for (let i = 0; i < result.rows.length; i++) {
      GET_JOBSKILLS_QUERY = `SELECT jobs_skills.skill_id, skills.skill_name FROM jobs_skills INNER JOIN skills ON skills.skill_name = skill_name  WHERE jobs_skills.job_id=${result.rows[i]._id} AND jobs_skills.skill_id = skills._id`;
      skillResult = await db.query(GET_JOBSKILLS_QUERY);
      // skill_id_array = [];
      skill_name_array = [];
      for (let i = 0; i < skillResult.rows.length; i++) {
        // skill_id_array.push(skillResult.rows[i].skill_id);
        skill_name_array.push(skillResult.rows[i].skill_name);
      }
      res.locals.jobs[i]["skill_name"] = skill_name_array;
    }

    next();
  } catch {
    next({
      log: "Error in Get Jobs",
      status: 400,
      message: { err: "Error in Get Jobs" },
    });
  }
};

//ALL SKILL RELATED
controller.getSkills = async (req, res, next) => {
  //Create an SQL command to get all skills from skills table
  const GET_SKILLS_QUERY = `SELECT * FROM skills`;
  try {
    //query for skills table
    const result = await db.query(GET_SKILLS_QUERY);
    const skillsArray = {};
    for (let i = 0; i < result.rows.length; i++) {
      skillsArray[result.rows[i]._id] = result.rows[i].skill_name;
    }
    res.locals.skills = skillsArray;
    next();
  } catch {
    next({
      //make relevant error message
      log: "Error in Get skills",
      status: 400,
      message: { err: "Error in Get skills" },
    });
  }
};

controller.getSkillsFromCv = async (req, res, next) => {
  //example localhost/api/getSkillsFromCv/1
  const GET_CVSKILLS_QUERY = `SELECT cv_skills.skill_id, skills.skill_name FROM cv_skills INNER JOIN skills ON skills.skill_name = skill_name  WHERE cv_skills.cv_id=${req.params.id} AND cv_skills.skill_id = skills._id`;
  try {
    const result = await db.query(GET_CVSKILLS_QUERY);
    const skill_id_array = [];
    const skill_name_array = [];
    for (let i = 0; i < result.rows.length; i++) {
      skill_id_array.push(result.rows[i].skill_id);
      skill_name_array.push(result.rows[i].skill_name);
    }
    res.locals.skills = {
      skill_ids: skill_id_array,
      skill_names: skill_name_array,
    };
    next();
  } catch {
    next({
      log: "Error in Get Skills From Cv",
      status: 400,
      message: { err: "Get Skills From Cv" },
    });
  }
};

controller.getSkillsFromJobs = async (req, res, next) => {
  //example localhost/api/getSkillsFromJobs/1
  const GET_CVSKILLS_QUERY = `SELECT jobs_skills.skill_id, skills.skill_name FROM jobs_skills INNER JOIN skills ON skills.skill_name = skill_name  WHERE jobs_skills.job_id=${req.params.id} AND jobs_skills.skill_id = skills._id`;
  try {
    const result = await db.query(GET_CVSKILLS_QUERY);
    const skill_id_array = [];
    const skill_name_array = [];
    for (let i = 0; i < result.rows.length; i++) {
      skill_id_array.push(result.rows[i].skill_id);
      skill_name_array.push(result.rows[i].skill_name);
    }
    res.locals.skills = {
      skill_ids: skill_id_array,
      skill_names: skill_name_array,
    };
    next();
  } catch {
    next({
      log: "Error in Get Skills from Jobs",
      status: 400,
      message: { err: "Error in Get Skills from Jobs" },
    });
  }
};

//ALL REF RELATED
//Updates Job ID/Skill ID ref table
controller.addJobsSkills = async (req, res, next) => {
  //expects an Array of jobids
  //Create an SQL command to get all skills from skills table
  let ADD_ID_REF_QUERY;
  try {
    for (let i = 0; i < res.locals.jobIds.length; i++) {
      for (let ii = 0; ii < req.body.jobs[i].skill_ids.length; ii++) {
        ADD_ID_REF_QUERY =
          "INSERT INTO jobs_skills (job_id, skill_id)" +
          ` VALUES ('${res.locals.jobIds[i]}', '${req.body.jobs[i].skill_ids[ii]}')`;
        await db.query(ADD_ID_REF_QUERY);
      }
    }
    next();
  } catch {
    next({
      log: "Error in Add Job Skill Ref",
      status: 400,
      message: { err: "Error in ADD Job Skill Ref" },
    });
  }
};

//Updates CV ID/Skill ID ref table
controller.addCvSkills = async (req, res, next) => {
  //Create an SQL command to get all skills from skills table
  let ADD_ID_REF_QUERY;
  try {
    if (req.body.skill_ids) {
      for (let i = 0; i < req.body.skill_ids.length; i++) {
        ADD_ID_REF_QUERY =
          "INSERT INTO cv_skills (cv_id, skill_id)" +
          ` VALUES ('${req.params.id}', '${req.body.skill_ids[i]}')`;
        await db.query(ADD_ID_REF_QUERY);
      }
    }
    next();
  } catch {
    next({
      log: "Error in Add CV Skill Ref",
      status: 400,
      message: { err: "Error in ADD CV Skill Ref" },
    });
  }
};

//ALL AUTH RELATED
controller.signup = async (req, res, next) => {
  //Create an SQL command to get all skills from skills table
  const ADD_USER_QUERY =
    "INSERT INTO authentication (username, password, cv_id)\n" +
    `VALUES ('${req.body.username}','${req.body.password}',${res.locals.cvId})`;

  try {
    await db.query(ADD_USER_QUERY);
    res.locals.username = req.body.username;
    res.locals.password = req.body.password;
    res.locals.signup = true;
    next();
  } catch {
    next({
      log: "Error in Auth Signup",
      status: 400,
      message: { err: "Error in Auth Signup" },
    });
  }
};

controller.login = async (req, res, next) => {
  const username = req.query.username;
  const password = req.query.password;
  if (res.locals.signup) {
    const username = res.locals.username;
    const password = res.locals.password;
  }

  const GET_USER_QUERY = `SELECT username, password, cv_id FROM authentication WHERE username='${username}'`;

  try {
    const result = await db.query(GET_USER_QUERY);
    if (result.rows[0].password == password) {
      res.locals.login = true;
      res.locals.cvId = result.rows[0].cv_id;
    } else res.locals.login = false;

    next();
  } catch {
    next({
      log: "Error in Auth Login",
      status: 400,
      message: { err: "Error in Auth Login" },
    });
  }
};

controller.creatCvObj = (req, res, next) => {
  try {
    res.locals.cvObj = {};
    if (res.locals.login) {
      res.locals.cvObj.cv = res.locals.cv;
      res.locals.cvObj.skills_table = res.locals.skills;
    }
    next();
  } catch {
    next({
      log: "Error in Auth Login",
      status: 400,
      message: { err: "Error in Auth Login" },
    });
  }
};

module.exports = controller;
