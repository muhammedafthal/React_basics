import Welcome from "./components/Welcome"
import Clock from "./components/Clock";

function App() {
  const userInfo = {
    firstname: "Muhammed",
    lastname: "Afthal"
  };
  return (
    <>
    <Clock />
     {/* <Welcome user={userInfo}/> */}
    </>
  )
};

export default App;
