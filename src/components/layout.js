import styled from "styled-components";

const LayoutStyled = styled.main`
  display: grid;
  min-block-size: 100vh;
  max-inline-size: 100%;
  grid-template-columns: 100%;
  grid-template-rows: 7vh auto auto auto auto 6vh;
  grid-template-areas: "header" "profile" 'skills' "proyects" "social" "footer";
  overflow: hidden;
  box-sizing: border-box;
`;

function Layout({ children, newBackgroundDark }) {
  return (
    <LayoutStyled
      style={{
        background: `${newBackgroundDark}`,
      }}
    >
      {children}
    </LayoutStyled>
  );
}

export default Layout;
