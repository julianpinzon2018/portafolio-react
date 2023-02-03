import Layout from "./components/layout";
import Proyects from "./components/proyects";
import Footer from "./components/footer";
import Social from "./components/social";
import Header from "./components/header";
import Profile from "./components/profile";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const backgroundDark =
    "radial-gradient( 41.48% 11.48% at 2.38% 8.52%, #747de9 0%, rgba(255, 255, 255, 0) 100% ), linear-gradient(135deg, #72edf2 0%, #5151e5 100%)";
  const backgroundHeaderDark = "#310a90";
  const colorBotones = "#00aef7";
  const colorBotonesLetra = "#fff";
  const [newColorBotonesLetra, setColorBotonesLetra] =
    useState(colorBotonesLetra);
  const [newBackgroundDark, setColor] = useState(backgroundDark);
  const [newBackgroundHeaderDark, setBackgroundHeaderDark] =
    useState(backgroundHeaderDark);
  const [newColorBotones, setColorBotones] = useState(colorBotones);

  return (
    <Layout newBackgroundDark={newBackgroundDark}>
      <BrowserRouter>
        <Header
          setColor={setColor}
          newBackgroundDark={newBackgroundDark}
          setBackgroundHeaderDark={setBackgroundHeaderDark}
          newBackgroundHeaderDark={newBackgroundHeaderDark}
          newColorBotones={newColorBotones}
          setColorBotones={setColorBotones}
          newColorBotonesLetra={newColorBotonesLetra}
          setColorBotonesLetra={setColorBotonesLetra}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Profile
                setBackgroundHeaderDark={setBackgroundHeaderDark}
                newBackgroundHeaderDark={newBackgroundHeaderDark}
              />
            }
          />
          <Route
            path="/proyects"
            element={
              <Proyects newBackgroundHeaderDark={newBackgroundHeaderDark} />
            }
          />
          <Route
            path="/social"
            element={
              <Social newBackgroundHeaderDark={newBackgroundHeaderDark} />
            }
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </Layout>
  );
}

export default App;
