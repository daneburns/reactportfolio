import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project"
import Contact from "./components/Contact"
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Project}/>
        <Route exact path="/contact" component={Contact}/>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
