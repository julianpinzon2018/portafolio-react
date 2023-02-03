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
  padding-inline: 2rem;
  padding-block: 1rem;
  overflow: hidden;
  block-size: 87vh;
  box-sizing: border-box;

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
    display: flex;
    gap: 2rem;
    margin: 0;
    justify-content: center;
    flex-direction: column;
    padding-block-end: 1rem;
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

    .redes-caja {
      gap: 2rem;
    }
    .name-red {
      font-size: 1.1rem;
    }
  }
`;

function Social({ newBackgroundHeaderDark }) {
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
          name="Instagram"
          icon={<Instagram />}
          link="https://www.instagram.com/julianpinzon2018/"
          id="instagram-caja"
        />
        <Button
          name="Github"
          link="https://github.com/julianpinzon2018"
          icon={<Github />}
          id="github-caja"
        ></Button>
        <Button
          name="Twitter"
          link="https://twitter.com/julianp15812718"
          id="twitter-caja"
          icon={<Twitter />}
        ></Button>
        <Button
          name="Gmail"
          link="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbSXNhsCVZHPTQJNmwzhWLgJqCXQpkKsBmppMgQBHSBJhFjclmXTPvCNFktdfTCSXXCFtC"
          id="email-caja"
          icon={<Gmail />}
        ></Button>
        <Button
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
