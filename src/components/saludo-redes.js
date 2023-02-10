import styled from "styled-components";

const SaludoRedesStyled = styled.div`
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

  @media screen and (max-width: 980px) {
    .redes-title {
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 768px) {
    .redes-title-text {
      font-size: 1rem;
    }
    .redes-title {
      font-size: 1.7rem;
    }
  }
`;

function SaludoRedes({ newBackgroundHeaderDark }) {
  return (
    <SaludoRedesStyled>
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
    </SaludoRedesStyled>
  );
}

export default SaludoRedes;
