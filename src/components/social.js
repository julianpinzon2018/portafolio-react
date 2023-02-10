import styled from "styled-components";
import Redes from "./redes";
import SaludoRedes from "./saludo-redes";
import Correo from "./correo";

const SocialStyled = styled.div`
  grid-area: social;

  padding: 1rem;
  block-size: 87vh;
  box-sizing: border-box;
  gap: 1rem;
  overflow: hidden;
  .socialContenedor {
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    block-size: 100%;
    ::-webkit-scrollbar {
      width: 5px;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: gray;

      border-radius: 5px;
    }
  }
`;

function Social({
  newBackgroundHeaderDark,

  setModal,
}) {
  return (
    <SocialStyled>
      <div className="socialContenedor">
        <SaludoRedes newBackgroundHeaderDark={newBackgroundHeaderDark} />
        <Correo setModal={setModal} />
        <Redes />
      </div>
    </SocialStyled>
  );
}

export default Social;
