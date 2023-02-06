import Layout from "./components/layout";
import Proyects from "./components/proyects";
import Footer from "./components/footer";
import Social from "./components/social";
import Header from "./components/header";
import Profile from "./components/profile";
import Skills from "./components/skills";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const backgroundDark = "#081b33";
  const backgroundHeaderDark = "#FF8906";
  const colorBotones = "#FF8906";
  const colorBotonesLetra = "#fff";
  const colorTextRed = "#081b33";
  const [newColorTextRed, setColorTextRed] = useState(colorTextRed);
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
          setColorTextRed={setColorTextRed}
          newColorTextRed={newColorTextRed}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Profile newBackgroundHeaderDark={newBackgroundHeaderDark} />
            }
          />

          <Route
            path="/proyects"
            element={
              <Proyects
                newBackgroundHeaderDark={newBackgroundHeaderDark}
                newColorTextRed={newColorTextRed}
              />
            }
          />

          <Route
            path="/skills"
            element={
              <Skills
                newBackgroundHeaderDark={newBackgroundHeaderDark}
                newColorTextRed={newColorTextRed}
              />
            }
          />

          <Route
            path="/social"
            element={
              <Social
                newBackgroundHeaderDark={newBackgroundHeaderDark}
                newColorTextRed={newColorTextRed}
              />
            }
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </Layout>
  );
}

export default App;
