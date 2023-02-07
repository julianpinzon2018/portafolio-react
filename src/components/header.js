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
  padding: 1rem;
  overflow: hidden;
  .boton {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lblSwitch {
    display: inline-block;
    width: 55px;
    height: 30px;
    background: #aaa;
    border-radius: 100px;
    position: relative;
    cursor: pointer;
  }
  #btn-switch:checked ~ .lblSwitch {
    background: var(--gradient);
  }
  #btn-switch:checked ~ .lblSwitch::after {
    left: 28px;
  }
  .lblSwitch::after {
    position: absolute;
    content: "";
    width: 22px;
    height: 22px;
    background: #fff;
    border-radius: 100px;
    top: 4px;
    left: 5px;
    transition: 0.3s;
  }
  #btn-switch {
    display: none;
  }

  .contenIndices {
    text-align: center;
    text-transform: uppercase;
  }
  .contenIndices * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
  }

  .indices {
    display: inline-block;
    list-style: outside none none;
    margin: 1rem;

    padding: 0.3em 0.3em;
    color: rgba(255, 255, 255, 0.5);
    position: relative;
    text-decoration: none;
    font-size: 1.2rem;
  }
  .active {
    color: #ffffff;
  }

  .contenIndices .indices:before,
  .contenIndices .indices:after {
    height: 3px;
    position: absolute;
    content: "";
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
    background-color: var(--main-white);
    width: 0;
  }

  .contenIndices .indices:before {
    top: 0;
    left: 0;
  }
  .contenIndices .indices:after {
    bottom: 0;
    right: 0;
  }
  .contenIndices .indices:hover {
    color: #ffffff;
  }
  .contenIndices .indices:hover:before,
  .contenIndices .active::before,
  .contenIndices .indices:hover:after,
  .contenIndices .active::after {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .contenIndices {
      display: flex;
      gap: 0.2rem;
    }

    .indices {
      font-size: 1rem;
      padding: 0.3em 0;
      margin: 0.1rem;
    }
  }
`;
function Header({
  setColor,
  newBackgroundDark,
  setBackgroundHeaderDark,
  newBackgroundHeaderDark,

  newColorBotonesLetra,
  setColorBotonesLetra,
  setColorTextRed,
  newColorTextRed,
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

    newColorBotonesLetra === "#fff"
      ? setColorBotonesLetra("#310a90")
      : setColorBotonesLetra("#fff");

    newColorTextRed === "#310a90"
      ? setColorTextRed("#081b33")
      : setColorTextRed("#310a90");
  };

  return (
    <HeaderStyled
      style={{
        background: `${newBackgroundHeaderDark}`,
        color: `${newColorBotonesLetra}`,
      }}
    >
      <div className="boton">
        <input type="checkbox" id="btn-switch" onClick={handleClick} />
        <label for="btn-switch" className="lblSwitch"></label>
      </div>
      <nav className="contenIndices">
        <NavLink exact to="/" activeClassName="active" className="indices ">
          About
        </NavLink>

        <NavLink
          exact
          to="/skills"
          activeClassName="active"
          className="indices"
        >
          Skills
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
