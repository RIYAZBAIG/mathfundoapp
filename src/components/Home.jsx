import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NumberComp } from "./NumberComp";
import { Tables } from "./Tabels";
import { Square } from "./Square";
import { NumSquare } from "./NumSquare";
import { TopNav } from "./TopNav";
import { Geo } from "./Geo";
import { Todos } from "./Todos";
import { SmartyShop } from "./SmartyShop";

export const Home = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <TopNav />
        <Routes>
          <Route path="/number" element={<NumberComp />} />
          <Route path="/square" element={<Square />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/numbersquare" element={<NumSquare />} />
          <Route path="/geo" element={<Geo />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/smartyshop" element={<SmartyShop />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
