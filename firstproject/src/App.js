import "./App.css";
import Profile from "./profile/profile";
import Taswira from "./logo.svg";

function App() {
  const handleName = (x) => {
    alert(x);
    console.log("ok");
  };
  return (
    <>
      <Profile
        handleName={handleName}
        fullName="Oussama"
        bio="nothing"
        profession="amel yawmi"
      >
        {" "}
        <img src={Taswira} alt="tof" width="50px" />
      </Profile>
      <Profile
        handleName={handleName}
        fullName="Youssef"
        bio="nothing"
        profession="ostedh"
      >
        {" "}
      </Profile>
      <Profile handleName={handleName} fullName="x" profession="y">
        {" "}
      </Profile>
    </>
  );
}

export default App;
