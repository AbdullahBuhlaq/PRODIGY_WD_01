import { Link } from "react-router-dom";
import "./Tab.css";

function Tab({ name, current, setCurrent }) {
  try {
    return (
      <>
        <Link
          to={name}
          className={current == name ? "active " : ""}
          onClick={() => {
            setCurrent(name);
          }}
          onMouseOver={() => {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            console.log(randomColor);
            document.getElementById("navbar").style.backgroundColor = "#" + randomColor;
            document.getElementById("navbar").style.color = randomColor > 8388607 ? "black" : "white";
          }}
        >
          {name}
        </Link>
      </>
    );
  } catch (err) {
    console.log(err);
  }
}

export default Tab;
