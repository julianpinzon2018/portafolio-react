import styled from "styled-components";

const ButtonStyled = styled.div`
  .red-caja {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  .red-caja img {
    width: 4rem;
    height: 4rem;
  }
  .red-caja:hover {
    transition-duration: 0.5s;
    transform: translate(1.5rem);
  }

  .cajon-red {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.5);
    inline-size: 40rem;
    max-block-size: auto;

    border-radius: 0.5rem;
    box-shadow: rgba(240, 46, 170, 0.4) -5px 5px,
      rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px,
      rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
  }
  .name-red {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
  }

  @media screen and (max-width: 980px) {
    .cajon-red {
      inline-size: 30rem;
      /* block-size: 2.5rem; */
    }
    .redes-caja {
      gap: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    .cajon-red {
      inline-size: 18rem;
      /* block-size: 1.5rem; */
    }

    .name-red {
      font-size: 1rem;
    }
  }
`;

function Button({ icon, name, link, id }) {
  return (
    <ButtonStyled as={"a"}>
      <a href={link} target="blank" className="red-caja" id={id}>
        <div className="cajon-red">
          <p className="name-red">{name}</p>
          {icon}
        </div>
      </a>
    </ButtonStyled>
  );
}

export default Button;
