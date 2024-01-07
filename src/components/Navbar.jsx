import TABS from "./Tabs";
import "./Navbar.css";
import Tab from "./Tab";
import { useState } from "react";

function Navbar(props) {
  try {
    const [current, setCurrent] = useState("home");
    return (
      <>
        <nav id="navbar">
          {TABS.map((item, index) => {
            return <Tab key={index} current={current} setCurrent={setCurrent} name={item} />;
          })}
        </nav>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Navbar;
