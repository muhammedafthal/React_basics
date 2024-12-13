import Welcome from "./components/Welcome"
import Clock from "./components/Clock";
import LoginControl from "./components/LoginControl";
import Blog from "./components/Blog";
import Form from "./components/Form";

function App() {
  const userInfo = {
    firstname: "Muhammed",
    lastname: "Afthal"
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
    }
  ];

  
  return (
    <>
    {/* <Clock /> */}
     {/* <Welcome user={userInfo}/> */}
     {/* <LoginControl /> */}
     {/* <Blog Post={Post}/> */}
     <Form />
    </>
  )
};

export default App;
