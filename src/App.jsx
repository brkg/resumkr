import React, { Component } from "react";
import LoginSignUp from "./Components/LoginSignUp";
import CVdisplay from "./Components/CVdisplay";
import CVinput from "./Components/CVinput";
import SidePanel from "./Components/SidePanel/SidePanel";
import { useState } from "react";
const axios = require("axios").default;

const initialState = {
  cv: {
    _id: 0,
    full_Name: "",
    contact: "", //stretch: contactInfo object with email, number, etc
    // resumeTitle: "",
    education: "", //stringify before sending to backend, parse when received
    jobs: [],
    skill_ids: [],
    skill_name: [],
  },
  skills_tables: {},
  resume: {
    jobs: [],
    suggestedjobs: [
      {
        entryName: "Resumkr",
        dates: ["20-01-01", "20-06-01"],
        content:
          "sjifoseofisoi efjiosjioefj esiofg p[tyojpkgtj soiefj iosjf \n awdawdawdaw ad adw awd rter trtertert awdwdad \n awdawdawdaw ad adw awd awdwdad",
        skills: ["reactJS", "javascript", "PosteGreSQL", "ExpressJS"],
      },
      {
        entryName: "NotResumkr",
        dates: ["20-01-01", "20-06-01"],
        content:
          "sjifoseofisoi efjiosjioefj esiofg p[tyojpkgtj soiefj iosjf \n awdawdawdaw ad adw awd rter trtertert awdwdad \n awdawdawdaw ad adw awd awdwdad",
        skills: ["C++", "Java", "MongoDB", "ExpressJS"],
      },
      {
        entryName: "Resumkr",
        dates: ["20-01-01", "20-06-01"],
        content:
          "sjifoseofisoi efjiosjioefj esiofg p[tyojpkgtj soiefj iosjf \n awdawdawdaw ad adw awd rter trtertert awdwdad \n awdawdawdaw ad adw awd awdwdad",
        skills: ["reactJS", "javascript", "PosteGreSQL", "ExpressJS"],
      },
      {
        entryName: "Resumkr",
        dates: ["20-01-01", "20-06-01"],
        content:
          "sjifoseofisoi efjiosjioefj esiofg p[tyojpkgtj soiefj iosjf \n awdawdawdaw ad adw awd rter trtertert awdwdad \n awdawdawdaw ad adw awd awdwdad",
        skills: ["reactJS", "javascript", "PosteGreSQL", "ExpressJS"],
      },
      {
        entryName: "Resumkr",
        dates: ["20-01-01", "20-06-01"],
        content:
          "sjifoseofisoi efjiosjioefj esiofg p[tyojpkgtj soiefj iosjf \n awdawdawdaw ad adw awd rter trtertert awdwdad \n awdawdawdaw ad adw awd awdwdad",
        skills: ["reactJS", "javascript", "PosteGreSQL", "ExpressJS"],
      },
      {
        entryName: "Resumkr",
        dates: ["20-01-01", "20-06-01"],
        content:
          "sjifoseofisoi efjiosjioefj esiofg p[tyojpkgtj soiefj iosjf \n awdawdawdaw ad adw awd rter trtertert awdwdad \n awdawdawdaw ad adw awd awdwdad",
        skills: ["reactJS", "javascript", "PosteGreSQL", "ExpressJS"],
      },
    ],
    skills: [],
  },
  // auth: {
  //   username: "",
  //   password: "",
  //   fullName: "",
  // },
};

function App() {
  const [loginPopup, setLoginPopup] = useState(true);
  const [cvInputPage, setCvInputPage] = useState(false);
  const [cvDisplayPage, setcvDisplayPage] = useState(false);
  const [sidePanelPopup, setSidePanelPopup] = useState(false);
  const [cv, setCV] = useState(initialState.cv);
  const [state, setState] = useState(initialState);

  const [spSuggestions, setSPsuggestions] = useState(initialState);
  const [resumeJobs, setresumeJobs] = useState(initialState);

  // function addSuggestion(jobId) {
  //   const newState = Object.assign({}, resumeJobs);
  //   newState.resume.suggestedjobs.splice(jobId, 1);
  //   return newState; // expects resume.suggestedjobs
  // }
  function hideSuggestion(jobId) {
    console.log("Hiding that shit", jobId);
    const newState = Object.assign({}, resumeJobs);
    newState.resume.suggestedjobs.splice(jobId, 1);
    return newState; // expects resume.suggestedjobs
  }

  // function addJob(jobs) {
  //   const newState = Object.assign({}, initialState);
  //   let tempJobs = newState.resume.jobs.splice();
  // }

  async function login(inputs) {
    try {
      const { username, password } = inputs;
      // console.log({ username: `${username}`, password: `${password}` });
      const result = await axios.get("/api/auth", {
        params: { username: `${username}`, password: `${password}` },
      });
      console.log("login", result.data);
      if (result.data.cv) {
        setState(result.data);
        console.log(state);
        setLoginPopup(false);
        setSidePanelPopup(true);
        setcvDisplayPage(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function signup(inputs) {
    try {
      // const result = await axios.post("/api/auth", { body: { inputs } });
      console.log("signup", inputs);
    } catch (error) {
      console.log(error);
    }
  }

  // async function signInOauth () {
  //   console.log("signup", inputs);
  //   //Add Asynchronicity
  //   //here goes a function to submit a signup[POST] fetch request to the backend
  //   //await will need to be used before doing anything as we need to ensure the signup information is valid before proceeding..
  //   //one of the last functionnality will be props.setTrigger(false) to close the popup
  // };

  //add function to set the popup to false if the back says that the user is identified or has cookies.

  function onSubmit(obj) {
    const tempCV = {
      ...cv,
      fullName: obj.fullName,
      resumeTitle: obj.title,
      jobs: obj.jobs,
    };
    setState({ ...state, cv: tempCV });
  }

  return (
    <div className="page">
      <div className="cvDisplayOuter">
        <CVdisplay
          trigger={cvDisplayPage}
          setTrigger={setcvDisplayPage}
          cv={"state.cv"}
        />
      </div>
      <LoginSignUp
        trigger={loginPopup}
        setTrigger={setLoginPopup}
        signup={signup}
        login={login}
      />
      <CVinput
        trigger={cvInputPage}
        setTrigger={setCvInputPage}
        jobs={cv.jobs}
        updateJobs={onSubmit}
      />
      <SidePanel
        trigger={sidePanelPopup}
        setTrigger={setSidePanelPopup}
        spSuggestionsAdd={setSPsuggestions}
        hideSuggestion={(k) => setSPsuggestions(hideSuggestion(k))}
        addToResume={setresumeJobs}
        resume={state.resume}
      />
      {/* <button onClick={() => setLoginPopup(true)} className="Login/SignUpBtn">
        Login/SignUp
      </button>
      <button onClick={() => setCvInputPage(true)} className="CVinput">
        CVinput
      </button>
      <button onClick={() => setcvDisplayPage(true)} className="CVdetails">
        CVdetails
      </button>
      <button onClick={() => setSidePanelPopup(true)} className="SidePanelBtn">
        SidePanel
      </button> */}
    </div>
  );
}

export default App;
