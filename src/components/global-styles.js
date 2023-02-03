import { createGlobalStyle } from "styled-components";
const GlobalStylesStyled = createGlobalStyle`
    :root {
    --main-white: #f0f0f0;
    --main-red: #be3144;
    --main-blue: #45567d;
    --main-gray: #303841;
    --gradient: radial-gradient( 41.48% 11.48% at 2.38% 8.52%, #747de9 0%, rgba(255, 255, 255, 0) 100% ), linear-gradient(135deg, #72edf2 0%, #5151e5 100%);
    --purple: #310a90;
    --dark:  #00aef7;
    --gren: #42e2b8;
    --white: #ffffff;
    --white-menu: rgba(255, 255, 255, 0.2);
  }
body {
  font-family: Indie Flower;
}
`;

export default GlobalStylesStyled;
