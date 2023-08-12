import React from 'react';
import Header from './Components/Header';
import ThemeSwitcher from './Components/ThemeSwitcher';
import FormMaker from './Components/FormMaker';
import JSONdb from './Components/JSONdb';
import Forms from './Components/Forms';
import Form from './Components/Form';
import { Routes, Route } from "react-router-dom";

import "./App.css"
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from './Redux/store';
import cx from "classnames";


function App() {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <div
      className={cx("app", {
        marine_theme: theme === "marine",
        light_theme: theme === "light",
        dark_theme: theme === "dark",
      })}
    >
      <Header />
      <div className="main-container" >
        <ThemeSwitcher theme={theme} dispatch={dispatch}  />

        <Routes>
          <Route path="/"  Component={FormMaker} />
          <Route path="/forms" Component={Forms} />
          <Route path="/forms/:id" Component={Form} />
          <Route path="/forms/:id/edit" element={<Form context={"edit"} />} />
          <Route path="/jsondb" Component={JSONdb}  />
        </Routes>
      </div>
      
        
    </div>
  );
}

export default App;
