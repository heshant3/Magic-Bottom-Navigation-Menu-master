import React, { useState } from "react";
import {
  BsFillBagCheckFill,
  BsFillHouseFill,
  BsFillChatSquareFill,
  BsClockFill,
  BsGearFill,
} from "react-icons/bs";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(0);

  const menus = [
    {
      icon: <BsFillHouseFill size={25} />,
      name: "Home",
    },
    {
      icon: <BsFillBagCheckFill size={25} />,
      name: "Orders",
    },
    {
      icon: <BsFillChatSquareFill size={25} />,
      name: "Chat",
    },
    {
      icon: <BsClockFill size={25} />,
      name: "History",
    },
    {
      icon: <BsGearFill size={25} />,
      name: "Settings",
    },
  ];

  return (
    <div className="navigation">
      <ul>
        {menus.map((val, index) => {
          return (
            <li
              onClick={() => setSelected(index)}
              key={index}
              className={index === selected ? "active" : ""}
            >
              <div className="icon">
                <BsFillHouseFill size={25} />
              </div>
              <div className="name">{"ff"}</div>
            </li>
          );
        })}
        <div className="menu-bg" />
      </ul>
    </div>
  );
}

export default App;
