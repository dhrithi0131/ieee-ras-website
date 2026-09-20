import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import CursorWhisper from "./components/CursorWhisper";

import Home from "./pages/Home";
import About from "./pages/About";
import Domains from "./pages/Domains";
import Events from "./pages/Events";
import Join from "./pages/Join";

function App() {
  const location = useLocation();

  return (
    <>
      <CursorWhisper />

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />

          <Route
            path="/about"
            element={
              <PageTransition>
                <About />
              </PageTransition>
            }
          />

          <Route
            path="/domains"
            element={
              <PageTransition>
                <Domains />
              </PageTransition>
            }
          />

          <Route
            path="/events"
            element={
              <PageTransition>
                <Events />
              </PageTransition>
            }
          />

          <Route
            path="/join"
            element={
              <PageTransition>
                <Join />
              </PageTransition>
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;