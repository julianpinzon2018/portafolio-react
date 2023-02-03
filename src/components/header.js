import styled from "styled-components";

import { NavLink } from "react-router-dom";

const HeaderStyled = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  box-shadow: 0 2px 0 rgb(0 0 0 / 40%);
  z-index: 2;
  padding-inline: 1rem;
  overflow: hidden;
  .burn {
    color: var(--white);
    background: var(--dark);
    border: none;
    font-size: 1rem;
    line-height: 0;
    border-radius: 50%;
    font-weight: bold;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    outline: 0;
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.5),
      -5px -5px 10px 0 rgba(255, 255, 255, 0.3);
    position: relative;
  }
  .burn:before {
    border: 2px solid white;
    content: "";
    background-color: var(--dark);
    z-index: -1;
    position: absolute;
    left: -7px;
    top: -7px;
    bottom: -7px;
    right: -7px;
    border-radius: 50%;
  }
  .burn:active {
    box-shadow: inset 10px 10px 10px 0 rgba(0, 0, 0, 0.5),
      inset -10px -10px 10px 0 rgba(255, 255, 255, 0.3);
  }
  .contenIndices {
    display: flex;
    gap: 1rem;
  }
  .indices {
    color: var(--white);
    background-color: transparent;
    block-size: 3.2rem;
    inline-size: 6.2rem;
    border-radius: 90px;
    border: none;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;

    text-decoration: none;
  }
  .active {
    background-color: var(--dark);
  }
  .indices:hover {
    transition: 0.5s;
    transform: scale(1.2);
    background-color: var(--dark);
  }
  @media screen and (max-width: 768px) {
    .burn {
      font-size: 0.5rem;
      width: 1rem;
      height: 1rem;
      box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.5),
        -5px -5px 10px 0 rgba(255, 255, 255, 0.3);
    }
    .burn:before {
      border: 1.5px solid;
      left: -5px;
      top: -5px;
      bottom: -5px;
      right: -5px;
    }
    .burn:active {
      box-shadow: inset 5px 5px 5px 0 rgba(0, 0, 0, 0.5),
        inset -5px -5px 5px 0 rgba(255, 255, 255, 0.3);
    }
    .contenIndices {
      display: flex;
      gap: 0.2rem;
    }

    .indices {
      block-size: 2.2rem;
      inline-size: 4.2rem;
      font-size: 1.2rem;
    }
  }
`;
function Header({
  setColor,
  newBackgroundDark,
  setBackgroundHeaderDark,
  newBackgroundHeaderDark,
  newColorBotones,
  setColorBotones,
  newColorBotonesLetra,
  setColorBotonesLetra,
}) {
  const handleClick = () => {
    newBackgroundDark ===
    "radial-gradient( 41.48% 11.48% at 2.38% 8.52%, #747de9 0%, rgba(255, 255, 255, 0) 100% ), linear-gradient(135deg, #72edf2 0%, #5151e5 100%)"
      ? setColor("#081b33")
      : setColor(
          "radial-gradient( 41.48% 11.48% at 2.38% 8.52%, #747de9 0%, rgba(255, 255, 255, 0) 100% ), linear-gradient(135deg, #72edf2 0%, #5151e5 100%)"
        );

    newBackgroundHeaderDark === "#310a90"
      ? setBackgroundHeaderDark("#FF8906")
      : setBackgroundHeaderDark("#310a90");

    newColorBotones === "#00aef7"
      ? setColorBotones("#FF8906")
      : setColorBotones("#00aef7");

    newColorBotonesLetra === "#fff"
      ? setColorBotonesLetra("#310a90")
      : setColorBotonesLetra("#fff");
  };

  return (
    <HeaderStyled
      style={{
        background: `${newBackgroundHeaderDark}`,
        color: `${newColorBotonesLetra}`,
      }}
    >
      <button className="burn" id="burn" onClick={handleClick} />
      <nav className="contenIndices">
        <NavLink exact to="/" activeClassName="active" className="indices">
          About
        </NavLink>
        <NavLink
          exact
          to="/proyects"
          activeClassName="active"
          className="indices"
        >
          Work
        </NavLink>
        <NavLink
          exact
          to="/social"
          activeClassName="active"
          className="indices"
        >
          Contact
        </NavLink>
      </nav>
    </HeaderStyled>
  );
}

export default Header;
