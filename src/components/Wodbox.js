import React from "react";
import { useState } from "react";
import { iconContext } from "react-icons";
import { FaMapPin } from "react-icons/fa";

function Wodbox({ wods, wod, setWods, wodName, wodTime, wodComment }) {
  const [active, setActive] = useState(true);

  const deleteHandler = () => {
    setWods(wods.filter((state) => state.id !== wod.id));
  };

  return (
    <>
      <div onClick={() => setActive(!active)} className="wodBox">
        <button onClick={deleteHandler}>x</button>
        <h2 className="p-0 m-0">
          <b>Wod</b>
        </h2>
        <p>{wodName}</p>
        <h2 className="p-0 m-0">
          <b>Time</b>
        </h2>
        <p>{wodTime}</p>
        <h2 className="p-0 m-0">
          <b>Comments</b>
        </h2>
        <p>{wodComment}</p>
        <div className={active ? "popModal hide" : "popModal"}>pasda</div>
      </div>
    </>
  );
}

export default Wodbox;
