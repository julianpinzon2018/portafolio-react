import styled from "styled-components";
import Redes from "./redes";
import SaludoRedes from "./saludo-redes";
import Correo from "./correo";

const SocialStyled = styled.div`
  grid-area: social;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow: hidden;
  block-size: 87vh;
  box-sizing: border-box;
  gap: 1rem;
  overflow: hidden;
`;

function Social({ newBackgroundHeaderDark, newColorTextRed, setModal }) {
  return (
    <SocialStyled path="/social">
      <SaludoRedes newBackgroundHeaderDark={newBackgroundHeaderDark} />
      <Correo setModal={setModal} />
      <Redes />
    </SocialStyled>
  );
}

export default Social;
