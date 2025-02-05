import logo from "./assets/logo.png";
import "./App.css";
import Travel from "./Components/Travel";

function App() {
  return (
    <>
      <div>
        <img src={logo} className="logo" alt="App logo" />
      </div>
      <h1 className="text-iron">Iron Travels</h1>
      <h3 className="text-iron">Tailored Travel Plans for Ironhackers</h3>

      {<Travel />}
    </>
  );
}

export default App;
