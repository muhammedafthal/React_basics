import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome"
import Clock from "./components/Clock";
import LoginControl from "./components/LoginControl";
import Blog from "./components/Blog";

import Form from "./components/Form";
import Search from "./components/Search";
import WelcomeDialog from "./components/WelcomeDialog";

import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./List/List";

import Counter from "./components/Counter";
import ArrayProps from "./components/ArrayProps";
import Toggle from "./components/Toggle";
import AddNew from "./components/AddNew";
import UsageCounter from "./components/UsageCounter";

import Movies from "./components/Movies";
import Switch from "./components/Switch";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Settings from "./pages/Settings";




function App() {

  const userInfo = {
    firstname: "Muhammed",
    lastname: "Afthal"
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  };

  const Post = [

    {
      id:1,
      title:"Hello World",
      content:"Welcome To Learning React"
    },
    {
      id:2,
      title:"Installation",
      content:"You Can Install React From npm"
    },
    {
      id:3,
      title:"Run App",
      content:"You Can Run React App With npm Start"
    },
    {
      id:4,
      title:"Build Components",
      content:"You Can Build Components From React App"
    },
    {
      id:5,
      title:"Define States",
      content:"You Can Define States In React App"
    },
    {
      id:6,
      title:"React Hooks",
      content:"You Can Use Hooks In React App"
    },
    {
      id:7,
      title:"Form Handling",
      content:"You Can Do Form Handling From React App"
    }
  ];

  const fruits = ["apple", "banana", "orange"];

  const filterList = Post.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchTerm)
  });

  const arr = ["KannurSquad", "Dhrishyam", "KGF", "Marco", "Qalb"];

  return (
    <>
    {/* <Clock /> */}

     {/* <Welcome user={userInfo}/> */}

     {/* <LoginControl /> */}

     {/* <Blog Post={Post}/> */}

     {/* <Form /> */}

     {/* <Search searchTerm={searchTerm} handleSearch={handleSearch}/>
     <List list={filterList}/> */}

     {/* <WelcomeDialog /> */}

      {/* <Header />
      <div className="app-body">
        <List />
      </div>
      <Footer /> */}

      {/* <Counter /> */}

      {/* <ArrayProps fruitList={fruits} /> */}

      {/* <Toggle /> */}

      {/* <AddNew /> */}

      {/* <UsageCounter /> */}

      {/* <Movies list={arr}/> */}

      <Switch />

      {/* <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/settings" element={<Settings />} /> 
      </Routes>
    </Router> */}

    </>
  )
};

export default App;
