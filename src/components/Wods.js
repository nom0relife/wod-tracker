import React from "react";
import Wodbox from "./Wodbox";

function Wods({ wods, setWods }) {
  return (
    <>
      <div className="wods">
        {wods.map((wod) => (
          <Wodbox
            setWods={setWods}
            wods={wods}
            wod={wod}
            wodName={wod.name}
            wodTime={wod.time}
            wodComment={wod.comment}
          />
        ))}
      </div>
    </>
  );
}

export default Wods;
