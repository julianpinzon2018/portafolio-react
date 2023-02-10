import styled from "styled-components";

const FooterStyled = styled.div`
  grid-area: footer;
  background-color: var(--main-gray);
  padding: 1rem;
  color: var(--main-white);
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  border-top: 4px solid var(--main-white);

  .created {
    margin: 0;
  }

  .firma {
    text-decoration: none;
    color: var(--main-white);
  }
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <p className="created">
        © Created for
        <a
          className="firma"
          id="firma"
          href="https://github.com/julianpinzon2018"
          target="blank"
        >
          &#160;Julian Pinzón
        </a>
      </p>
    </FooterStyled>
  );
}

export default Footer;
