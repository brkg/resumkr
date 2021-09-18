db = require('./database')

const controller = {};

controller.getCv = async (req, res, next) => {
  //expects a key to be passed into request as {id:X} 
  //example localhost/api/getCv/?id=1
  console.log(req.query)
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

// controller.addExp = async (req, res, next) => {
//     const get_q;
//     try{
//       next()
//     }
//     catch{
//       next({err})
//     }
  
// };

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