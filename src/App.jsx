import Welcome from "./components/Welcome"
import Clock from "./components/Clock";
import LoginControl from "./components/LoginControl";
import Blog from "./components/Blog";
import Form from "./components/Form";
import Search from "./components/Search";
import List from "./components/List";
import { useState } from "react";


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

  const filterList = Post.filter((item) => {
    return item.title.toLocaleLowerCase().includes(searchTerm)
  });

  return (
    <>
    {/* <Clock /> */}
     {/* <Welcome user={userInfo}/> */}
     {/* <LoginControl /> */}
     {/* <Blog Post={Post}/> */}
     {/* <Form /> */}
     <Search searchTerm={searchTerm} handleSearch={handleSearch}/>
     <List list={filterList}/>
    </>
  )
};

export default App;
