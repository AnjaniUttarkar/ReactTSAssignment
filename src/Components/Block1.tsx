import React, { CSSProperties } from "react";


interface Block1Props {
  onTextAreaChange: (num: number) => void;
  onShow: () => void;
  selectedLabel: string;
  userThoughts: string;
  onUserThoughtsChange: (thoughts: string) => void; 
}

const Block1: React.FC<Block1Props> = ({
  onTextAreaChange,
  onShow,
  selectedLabel,
  userThoughts,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onTextAreaChange(parseInt(e.target.value, 10));
  };
  const divStyle: CSSProperties = {
    position: "relative",
    width: "30%",
    height: "90%",
    border: "3px solid black",
    backgroundColor: "rgb(22, 218, 38)",
    margin: "auto", 
    transform: "translate(-110%, -450%)",
    msOverflowStyle: "none",
  scrollbarWidth: "none",
  WebkitOverflowScrolling: "auto"
  };

  const btnStyle: CSSProperties = {
    position: "absolute",
    top: "10px",
    left: "30%",
    transform: "translateX(-50%)",
    zIndex: 1,
  };

  const canvasStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(22, 218, 38)",
  };


  return (
    <>
      <div className="block1Container" style={divStyle}>
        <canvas className="block1Canvas" style={canvasStyle}></canvas>
        <button
          id="viewButton"
          type="button"
          className="btn btn-secondary btn-lg"
          onClick={onShow}
          style={btnStyle}
        >
          Click To view Text Area
        </button>
        <h3>Here is what User has to say : </h3>
        <p>{userThoughts}</p>

        {selectedLabel && <h2>Selected: {selectedLabel}</h2>}

        <div className="moveUp">
          <label className="text" htmlFor="texts"> Choose number of Text Areas : </label>

          <select name="texts" id="texts" onChange={handleChange}>
            {Array.from({ length: 11 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default Block1;
