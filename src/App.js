import "./App.css";
import { v4 as uuidv4 } from "uuid";
// import Wodbox from "./components/Wodbox";
import Wods from "./components/Wods";
import { useState } from "react";

function App() {
  const [wods, setWods] = useState([]);
  const [wodName, setWodName] = useState("");
  const [wodTime, setWodTime] = useState("");
  const [wodComment, setWodComment] = useState("");

  const pushWod = () => {
    if (wodName === "" || wodTime === "") {
      setWodName("");
      setWodTime("");
      setWodComment("");
      alert("Please give a value");
    } else {
      setWods([
        ...wods,
        {
          id: uuidv4(),
          name: wodName,
          time: wodTime,
          comment: wodComment,
        },
      ]);
      setWodName("");
      setWodTime("");
      setWodComment("");
    }
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 left-container">
            <div className="top-box">
              <h2>App name</h2>
            </div>

            <form className="middle-box">
              <h2>Insert Wod</h2>
              <input
                onChange={(e) => {
                  setWodName(e.target.value);
                }}
                placeholder="Enter your Wod"
                value={wodName}
                type="text"
                name=""
                id="wodName"
              />
              <input
                onChange={(e) => {
                  setWodTime(e.target.value);
                }}
                placeholder="Enter your time"
                value={wodTime}
                type="text"
                name=""
                id="wodTime"
              />

              <textarea
                value={wodComment}
                onChange={(e) => {
                  setWodComment(e.target.value);
                }}
                name=""
                id="wodComments"
                cols="56"
                rows="10"
              ></textarea>
              <input
                onClick={(e) => {
                  e.preventDefault();
                  pushWod();
                }}
                type="submit"
                value="Go"
              />
            </form>
          </div>

          <div className="col-9 right-container">
            <Wods
              wods={wods}
              setWods={setWods}
              wodName={wodName}
              wodTime={wodTime}
              wodComment={wodComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
