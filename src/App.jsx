import Welcome from "./components/Welcome"
import Clock from "./components/Clock";
import LoginControl from "./components/LoginControl";

function App() {
  const userInfo = {
    firstname: "Muhammed",
    lastname: "Afthal"
  };
  return (
    <>
    {/* <Clock /> */}
     {/* <Welcome user={userInfo}/> */}
     <LoginControl />
    </>
  )
};

export default App;
