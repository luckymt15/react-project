import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";    
import "./App.css";
import React from "react";
import Home from './components/home';


export default function App () {
  return (
    <>
      <Home />
    </>
  );
}
