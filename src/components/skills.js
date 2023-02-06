import styled from "styled-components";
import css from "../images/image-skills/css.svg";
import html from "../images/image-skills/html.svg";
import git from "../images/image-skills/git.svg";
import js from "../images/image-skills/javascript.svg";
import react from "../images/image-skills/react.svg";

const SkillsStyled = styled.div`
  grid-area: skills;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  block-size: 87vh;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
  gap: 5rem;

  .titleSkills {
    font-size: 3rem;
    margin: 0;
    margin-top: -50px;
    border-bottom: 0.2rem solid var(--main-white);
  }
  .skillsContainertLogos {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 5rem;
  }
  .skillsContainertLogos2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 5rem;
  }

  .logoSkills {
    inline-size: 168px;
    block-size: 168px;
    background: var(--main-white);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 1rem;
    gap: 0.5rem;
    box-shadow: rgb(255 255 255 / 40%) -5px 5px,
      rgb(255 255 255 / 30%) -10px 10px, rgb(255 255 255 / 20%) -15px 15px,
      rgb(255 255 255 / 10%) -20px 20px, rgb(255 255 255 / 5%) -25px 25px;
  }
  .logoSkills:hover {
    animation: wiggle 2s linear infinite;
  }
  @keyframes wiggle {
    0%,
    7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
    20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
      transform: rotateZ(-4deg);
    }
    40%,
    100% {
      transform: rotateZ(0);
    }
  }

  .logoSkillsTitle {
    margin: 0;
    font-size: 1.5rem;
  }

  .imgskill {
    width: 98px;
    height: 98px;
  }
  @media screen and (max-width: 780px) {
    gap: 2rem;
    .titleSkills {
      font-size: 2rem;
      margin-top: -100px;
      margin-bottom: 30px;
    }
    .skillsContainertLogos {
      gap: 2rem;
    }
    .skillsContainertLogos2 {
      gap: 2rem;
    }
    .logoSkills {
      inline-size: 50px;
      block-size: 50px;
    }

    .imgskill {
      width: 40px;
      height: 40px;
    }
    .logoSkillsTitle {
      font-size: 1rem;
    }
  }
`;

function Skills({ newBackgroundHeaderDark, newColorTextRed }) {
  return (
    <SkillsStyled id="skills">
      <h1
        style={{
          color: `${newBackgroundHeaderDark}`,
        }}
        className="titleSkills"
      >
        Skills
      </h1>
      <div className="skillsContainertLogos">
        <div className="logoSkills">
          <img className="imgskill" src={html} alt="" />
          <p
            style={{
              color: `${newColorTextRed}`,
            }}
            className="logoSkillsTitle"
          >
            HTML
          </p>
        </div>

        <div className="logoSkills">
          <img className="imgskill" src={css} alt="" />
          <p
            style={{
              color: `${newColorTextRed}`,
            }}
            className="logoSkillsTitle"
          >
            CSS
          </p>
        </div>

        <div className="logoSkills">
          <img className="imgskill" src={js} alt="" />
          <p
            style={{
              color: `${newColorTextRed}`,
            }}
            className="logoSkillsTitle"
          >
            JavaScript
          </p>
        </div>
      </div>
      <div className="skillsContainertLogos2">
        <div className="logoSkills">
          <img className="imgskill" src={react} alt="" />
          <p
            style={{
              color: `${newColorTextRed}`,
            }}
            className="logoSkillsTitle"
          >
            React
          </p>
        </div>
        <div className="logoSkills">
          <img className="imgskill" src={git} alt="" />
          <p
            style={{
              color: `${newColorTextRed}`,
            }}
            className="logoSkillsTitle"
          >
            Git
          </p>
        </div>
      </div>
    </SkillsStyled>
  );
}

export default Skills;
