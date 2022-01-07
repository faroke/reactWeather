import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Header";
import { router } from "./config/router";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {router.map((route, index) => {
            return(<Route key={index} path={route.url} element={route.component}/>);
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
