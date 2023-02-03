import styled from "styled-components";
import fotoProfile from "../images/foto1.jpg";

const ProfileStyled = styled.div`
  grid-area: profile;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: 1rem;
  block-size: 87vh;
  box-sizing: border-box;
  overflow: hidden;

  .contenPresentacion {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8rem;
  }
  .presentacion {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .foto {
    border-radius: 50%;
    overflow: hidden;
  }
  .saludoName {
    font-size: 4rem;
    margin: 0;
  }
  .saludoOficio {
    color: var(--white);
    font-size: 2.8rem;
  }
  @media screen and (max-width: 980px) {
    .contenPresentacion {
      gap: 2rem;
    }
    .saludoName {
      font-size: 3rem;
    }
    .saludoOficio {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    .contenPresentacion {
      flex-direction: column-reverse;
    }
    .foto {
      width: 278px;
      height: 278px;
    }
    .saludoName {
      color: var(--purple);
      font-size: 3rem;
      margin: 0;
    }
    .saludoOficio {
      color: var(--white);
      font-size: 2.2rem;
    }
  }
`;

function Profile({ newBackgroundHeaderDark }) {
  return (
    <ProfileStyled id="profile">
      <div className="contenPresentacion">
        <div className="presentacion">
          <h1
            style={{
              color: `${newBackgroundHeaderDark}`,
            }}
            className="saludoName"
          >
            Hey I am Julian
          </h1>
          <h2 className="saludoOficio">a web developer</h2>
        </div>
        <img
          className="foto"
          src={fotoProfile}
          width="378"
          height="378"
          alt=""
        />
      </div>
    </ProfileStyled>
  );
}

export default Profile;
