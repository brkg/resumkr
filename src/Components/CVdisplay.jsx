import React from "react";

const Title = (title, list) => {
  return (
    <div className="sectionTitle">
      <div className="leftTitle">
        <hr></hr>
      </div>
      <div className="textTitle">{title}</div>
      <div className="rightTitle">
        <hr></hr>
      </div>
    </div>
  );
};

function CVdisplay(props) {
  const experiences = [];
  const education = [];
  const skills = [];

  for (let i = 1; i <= 9; i++) {
    skills.push(
      <div className="skill" key={i}>
        Skill{`${i}`}
      </div>
    );
  }
  for (let i = 1; i <= 2; i++) {
    education.push(
      <div className="education">
        <div className="leftBlock">
          <div className="school">AVAD Computer School</div>
          <div className="years">2017-2021</div>
        </div>
        <div className="educationField">
          <div className="educationTitle"> BA, Mathematics</div>
          <div className="educationDetails">
            Minors in French, Russian, Mandarin, Portuguese
          </div>
        </div>
      </div>
    );
  }
  for (let i = 1; i <= 7; i++) {
    experiences.push(
      <div className="experience">
        <div className="leftBlock">
          <div className="roleOrProjectName">BANANA CHIEF</div>
          <div className="years">2010-2011</div>
          <div className="company">Banana</div>
        </div>
        <div className="experienceField">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          ultricies nisl pretium, pulvinar sapien ac, accumsan augue. Proin
          elementum felis sed finibus auctor. Nullam ornare efficitur leo nec
          sollicitudin.
        </div>
      </div>
    );
  }

  return true ? (
    <div className="cvDisplay">
      <div className="generalInfo">
        <div className="nameBlock">
          <div className="name"> Banana King</div>
          <div className="title">Software Engineer</div>
        </div>
        <div className="contactsBlocks">
          <div className="email">EMAIL: Bananaking@gmail.com</div>
        </div>
      </div>
      <div className="experiences">
        {Title("EXPERIENCE")}
        <div className="experienceList">{experiences}</div>
      </div>
      <div className="educations">
        {Title("EDUCATION")}
        <div className="educationList">{education}</div>
      </div>
      <div className="skills">
        {Title("SKILLS & LANGUAGES")}
        <div className="skillsList">{skills}</div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default CVdisplay;
