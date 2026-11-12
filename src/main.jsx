import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LocaleProvider } from "./hooks/useLocale";
import SiteLayout from "./layouts/SiteLayout";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./styles/index.css";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LocaleProvider>
      <HashRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<Home />} />
            <Route path="guide/:id" element={<Guide />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </LocaleProvider>
  </React.StrictMode>,
);
