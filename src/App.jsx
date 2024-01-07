import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Chat from "./pages/Chat";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App(props) {
  try {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/chat" exact element={<Chat />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default App;
