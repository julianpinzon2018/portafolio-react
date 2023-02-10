import styled from "styled-components";

const OverlayStyled = styled.div`
  backdrop-filter: blur(10px) !important;
  position: fixed !important;
  inset: 0 !important;
  z-index: 2;
`;

function Overlay({ children }) {
  return <OverlayStyled>{children}</OverlayStyled>;
}

export default Overlay;
