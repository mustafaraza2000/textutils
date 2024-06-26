//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [btnColor, setBtnColor] = useState("primary");
  const [currentPage, setCurrentPage] = useState("home");

  const showAlert = (message, type) => {
    setAlert({
      mesg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - DarkMode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils -LightMode";
    }
  };

  let toggleModeGreen = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "green";
      document.body.style.color = "white";
      showAlert("Green mode has been enabled", "success");
      setBtnColor("success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      setBtnColor("primary");
    }
  };
  return (
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        toggleModeGreen={toggleModeGreen}
      />
      <Alert alert={alert}></Alert>

      <div className="container">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter text to analyse below"
                mode={mode}
                btnColor={btnColor}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
