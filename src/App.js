import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Header";
import { router } from "./utils/router";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          {router.map((route, index) => {
            return(<Route key={index} path={route.url} element={route.component}/>);
          })}
        </Route>
      </Routes>
  );
}

export default App;
