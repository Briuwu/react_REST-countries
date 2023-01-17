import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const Home = React.lazy(() => import("./pages/Home"));
const VisitedCountry = React.lazy(() => import("./pages/VisitedCountry"));

function App() {
  return (
    <>
      <Header />
      <AnimatePresence>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/country/:name"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <VisitedCountry />
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
