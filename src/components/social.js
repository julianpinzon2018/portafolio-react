import styled from "styled-components";
import Github from "./icons/github";
import Gmail from "./icons/gmail";
import Twitter from "./icons/twitter";
import Linkedin from "./icons/linkedin";
import Instagram from "./icons/instagram";
import Button from "./user";

const SocialStyled = styled.div`
  grid-area: social;

  display: grid;
  align-items: center;
  justify-content: center;
  padding-inline: 1rem;
  padding-block: 1rem;

  overflow: hidden;
  block-size: 87vh;
  box-sizing: border-box;
  overflow: hidden;

  .redes-title-caja {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
  .redes-title {
    font-size: 3rem;
    margin: 0;
    color: var(--purple);
    border-bottom: 0.2rem solid var(--main-white);
  }
  .redes-title-text {
    font-size: 1.4rem;
    margin: 0;
    color: var(--main-white);
    padding: 1rem;
  }

  .redes-caja {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr, 1fr, 1fr, 1fr, 1fr;
    justify-content: center;
    flex-direction: column;
    padding-block-end: 1rem;
    block-size: 100%;
    inline-size: 40vw;
    overflow-y: auto;
    overflow-x: hidden;
    padding-inline: 1rem;
    ::-webkit-scrollbar {
      width: 5px;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: gray;

      border-radius: 5px;
    }
  }
  .name-red {
    font-size: 1.7rem;
  }

  @media screen and (max-width: 980px) {
    .redes-title {
      font-size: 2rem;
    }
    .name-red {
      font-size: 1.5rem;
    }
    .redes-caja {
      inline-size: 60vw;
    }
  }
  @media screen and (max-width: 768px) {
    .red-caja img {
      width: 2rem;
      height: 2rem;
    }
    .redes-title-text {
      font-size: 1rem;
    }
    .redes-title {
      font-size: 1.7rem;
    }
    .name-red {
      font-size: 1.1rem;
    }
    .redes-caja {
      inline-size: 80vw;
    }
  }
`;

function Social({ newBackgroundHeaderDark, newColorTextRed }) {
  return (
    <SocialStyled path="/social">
      <div className="redes-title-caja" id="redes-title-caja">
        <h2
          style={{
            color: `${newBackgroundHeaderDark}`,
          }}
          class="redes-title active-redes-title"
          id="redes-title"
        >
          Let's work together...
        </h2>
        <p class="redes-title-text " id="redes-title-text">
          How do you take your coffee?
        </p>
      </div>
      <div class="redes-caja" id="redes-caja">
        <Button
          newColorTextRed={newColorTextRed}
          name="Instagram"
          icon={<Instagram />}
          link="https://www.instagram.com/julianpinzon2018/"
          id="instagram-caja"
        />
        <Button
          newColorTextRed={newColorTextRed}
          name="Github"
          link="https://github.com/julianpinzon2018"
          icon={<Github />}
          id="github-caja"
        ></Button>
        <Button
          newColorTextRed={newColorTextRed}
          name="Twitter"
          link="https://twitter.com/julianp15812718"
          id="twitter-caja"
          icon={<Twitter />}
        ></Button>
        <Button
          newColorTextRed={newColorTextRed}
          name="Gmail"
          link="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSXNhsCVZHPTQJNmwzhWLgJqCXQpkKsBmppMgQBHSBJhFjclmXTPvCNFktdfTCSXXCFtC"
          id="email-caja"
          icon={<Gmail />}
        ></Button>
        <Button
          newColorTextRed={newColorTextRed}
          name="Linkedin"
          link="https://www.linkedin.com/in/julian-pinz%C3%B3n-b29854237/"
          id="Linkedin-caja"
          icon={<Linkedin />}
        ></Button>
      </div>
    </SocialStyled>
  );
}

export default Social;
