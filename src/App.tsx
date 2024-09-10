import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {TimePicker} from "react-wheel-time-picker"
import GithubLogo from "./assets/github.png";
import NpmLogo from "./assets/npm.svg"

// import CodeSnippet from "./components/CodeSnippet";

function App() {
  const [starthHourValue, setStartHourValue] = useState("00:00");
  const [endHourValue, setEndHourValue] = useState("00:00");
  const [is12Hours, setIs12Hours] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onChangehours = (timeValue: string) => {
    setStartHourValue(timeValue);
  };

  const onChangemins = (timeValue: string) => {
    setEndHourValue(timeValue);
  };

  const handleDarkModeSwitch = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const hancleClick12Hours = () => {
    setIs12Hours((prevState) => !prevState);
  };

  return (
    <div
      className="App"
      style={{
        width: "100%",
        height: "100vh",
        paddingTop: 20,
        backgroundColor: isDarkMode ? "#1d1d1d" : "#f6f6f6",
      }}
    >
      <button
        style={{ backgroundColor: isDarkMode ? "#f6f6f6" : "#e2e2e2" }}
        onClick={handleDarkModeSwitch}
      >
        Switch to {!isDarkMode ? "Dark" : "Light"} mode
      </button>
      <div style={{display:"flex", alignItems:"center", flexWrap:"wrap"}}>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <img src={reactLogo} className="logo react" alt="React logo" />
          <h1 style={{ color: isDarkMode ? "#fff" : "gray" }}>
            react-wheel-time-picker
          </h1>
        </div>
    
      </div>
      <h2 style={{ marginTop: 20, color: isDarkMode ? "#fff" : "" }}>
      🔥 A wheel style typescript time picker for React. 🔥
      </h2>
      <p className="read-the-docs"    >
        Written in typescript, with dark & light Mode, 12h or 24h, no moment.js or date.fns needed, zero dependencies, easy to integrate & easy
        to use...
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems:"center",
          flexWrap: "wrap",
        }}
      >
          <h3 style={{ color: isDarkMode ? "#fff" : "gray" }}>Demo</h3>
          <button
            style={{ backgroundColor: isDarkMode ? "#f6f6f6" : "#e2e2e2" }}
            onClick={hancleClick12Hours}
          >
            Switch to {!is12Hours ? "12H" : "24H"} format
          </button>
          <div
            style={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems:"center",
              width: "100%",
              height: 130,
              border: "1px dotted gray",
              boxShadow: "0px 1px 2px gray",
              borderRadius: 8,
              padding: 20,
            }}
          >
            <div style={{ width: 150 }}>
              <TimePicker
                use12Hours={is12Hours ? true : false}
                label="Start time"
                isDarkMode={isDarkMode}
                onChange={onChangehours}
                value={starthHourValue}
              />
            </div>
            <div style={{ width: 150 }}>
              <TimePicker
                use12Hours={is12Hours ? true : false}
                label="End time"
                isDarkMode={isDarkMode}
                onChange={onChangemins}
                value={endHourValue}
              />
            </div>
          </div>
       
      </div>
    
      <div style={{ height: 80 }} />
      <div style={{ display: "flex", alignItems: "center", position:"fixed", bottom:4 }}>
       <a title="Link to the repository" href="https://github.com/rodolphe37/react-wheel-time-picker" target="new" >
       <img className="link_logo" src={GithubLogo} width={60} height={60} />
       </a>
       <a title="Link to the npm package" href="https://www.npmjs.com/package/react-wheel-time-picker" target="new">
       <img className="link_logo" src={NpmLogo} width={40} height={40} />
       </a>
      </div>
    </div>
  );
}

export default App;
