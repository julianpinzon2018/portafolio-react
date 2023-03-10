import styled from "styled-components";
import calculadora from "../images/images2/calculadora.png";
import google from "../images/images2/google.png";
import peliculas from "../images/images2/peliculas.png";
import pomodoro from "../images/images2/pomodoro.png";
import spotifu from "../images/images2/spotifu.png";
import weather from "../images/images2/weather.png";

const ProyectsStyled = styled.div`
  grid-area: proyects;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  block-size: 87vh;
  box-sizing: border-box;
  overflow: hidden;

  .proyectos-title {
    font-size: 3rem;
    color: var(--purple);
    border-bottom: 0.2rem solid var(--main-white);
    margin: 0;
  }
  .proyectos-caja {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    gap: 4rem;
    width: 70%;
    height: 70%;
    overflow-x: auto;
    overflow-y: hidden;
    padding-block: 1rem;

    ::-webkit-scrollbar {
      height: 5px;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: gray;

      border-radius: 5px;
    }
  }
  .project {
    text-decoration: none;
    border-radius: 0.5rem;
    box-sizing: border-box;
    width: 350px;
    height: 90%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .project:hover {
    transition: 0.5s;
    transform: scale(0.8);
    z-index: 1;
  }
  .project img {
    height: 80%;
    width: 100%;
    object-fit: cover;
    box-sizing: border-box;

    border-radius: 0.5rem 0.5rem 0 0;
  }
  .project-titl {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--main-white);
    margin: 0;
    padding: 1rem;
    height: 20%;
    width: 100%;
    box-sizing: border-box;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  .button-cv {
    padding-block: 1rem;
    padding-inline: 2.5rem;
    font-size: 1.5rem;
    text-align: center;
    border-radius: 90px;
    border: none;
    color: var(--main-white);
    cursor: pointer;
  }
  .button-cv:hover {
    background-color: var(--main-white) !important;
    color: var(--purple);
    transition: 0.5s;
    transform: scale(0.8);
  }
  @media screen and (max-width: 980px) {
    .proyectos-caja {
      width: 90%;
    }
    .proyectos-title {
      font-size: 2rem;
    }
    .project-titl {
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 780px) {
    .proyectos-title {
      font-size: 1.5rem;
    }
    .project-titl {
      font-size: 1rem;
    }
    .proyectos-caja {
      justify-content: center;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 1fr);
      gap: 6rem;
      width: 100%;
      overflow-y: auto;
      overflow-x: hidden;

      ::-webkit-scrollbar {
        width: 5px;
      }
      ::-webkit-scrollbar-thumb {
        background-color: gray;
      }
    }
    .project {
      width: 100%;
      height: 80vw;
      padding-inline: 1rem;
      box-sizing: border-box;
    }
  }
`;

function Proyects({ newBackgroundHeaderDark, newColorTextRed }) {
  return (
    <ProyectsStyled>
      <h1
        style={{
          color: `${newBackgroundHeaderDark}`,
        }}
        className="proyectos-title active-proyectos-title"
        id="proyectos-title"
      >
        These are some of my projects
      </h1>
      <div className="proyectos-caja" id="proyectos-caja">
        <a
          href="https://weather-app-ashy-omega-74.vercel.app/"
          target="blank"
          className="project"
          id="project-1"
        >
          <img
            width="48"
            height="48"
            src={weather}
            alt="Aplicaci??n del clima"
            className="imageProyect"
          />
          <p
            style={{
              color: `${newColorTextRed}`,
            }}
            className="project-titl active-project-titl"
          >
            Weather app JavaScript
          </p>
        </a>

        <a
          href="https://julianpinzon2018.github.io/spotifu/"
          target="blank"
          className="project"
          id="project-2"
        >
          <img
            width="48"
            height="48"
            src={spotifu}
            alt="Website copia de spotify"
            className="imageProyect"
          />
          <p
            style={{
              color: `${newColorTextRed}`,
            }}
            className="project-titl active-project-titl"
          >
            Spotifu Css
          </p>
        </a>

        <a
          href="https://calculadora-two-lovat.vercel.app/"
          target="blank"
          className="project"
          id="project-3"
        >
          <img
            width="48"
            height="48"
            src={calculadora}
            alt="Aplicaci??n de calculadora"
            className="imageProyect"
          />
          <p
            style={{
              color: `${newColorTextRed}`,
            }}
            className="project-titl active-project-titl"
          >
            JavaScript Calculator
          </p>
        </a>

        <a
          href="https://julianpinzon2018.github.io/Google-Calendar/"
          target="blank"
          className="project"
          id="project-4"
        >
          <img
            width="48"
            height="48"
            src={google}
            alt="Website copia de calendario de google"
            className="imageProyect"
          />
          <p
            style={{
              color: `${newColorTextRed}`,
            }}
            className="project-titl active-project-titl"
          >
            Google calendar Css
          </p>
        </a>
        <a
          href="https://pomodoro-main.vercel.app/"
          target="blank"
          className="project"
          id="project-5"
        >
          <img
            width="48"
            height="48"
            src={pomodoro}
            alt="Aplicaci??n de pomodoro"
            className="imageProyect"
          />
          <p
            style={{
              color: `${newColorTextRed}`,
            }}
            className="project-titl active-project-titl"
          >
            Pomodoro JavaScript
          </p>
        </a>
        <a
          href="https://peliculas-populares-main.vercel.app/"
          target="blank"
          className="project"
          id="project-6"
        >
          <img
            width="48"
            height="48"
            src={peliculas}
            alt="Aplicaci??n de peliculas"
            className="imageProyect"
          />
          <p
            style={{
              color: `${newColorTextRed}`,
            }}
            className="project-titl active-project-titl"
          >
            Peliculas top JavaScript
          </p>
        </a>
      </div>
      <a
        href="https://www.dropbox.com/s/g3tuolmmomm3h2h/Profile.pdf?dl=0"
        target="blank"
      >
        <button
          style={{
            background: `${newBackgroundHeaderDark}`,
          }}
          className="button-cv active-button-cv"
          id="button"
        >
          C V >
        </button>
      </a>
    </ProyectsStyled>
  );
}

export default Proyects;
