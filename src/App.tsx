/* eslint-disable react/no-children-prop */
import React, { useState, useEffect, ChangeEvent } from "react";
import Block1 from "./Components/Block1";
import Block2 from "./Components/Block2";
import Base from "./Components/Base";
import "./App.css";
import assignmentImage from "./images/assignmentImage.jpg";
import { loremIpsum } from "react-lorem-ipsum";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App: React.FC = () => {
  const [numTextAreas, setNumTextAreas] = useState<number>(1);
  const [content, setContent] = useState<string[]>([]);
  const [visible, setVisibility] = useState<boolean>(false);
  const [selectedLabel, setSelectedLabel] = useState<string>("");
  const [userThoughts, setUserThoughts] = useState<string>("");

  useEffect(() => {
    setContent(
      Array(numTextAreas)
        .fill("")
        .map(() => loremIpsum({ p: 2 }).join("\n"))
    );
  }, [numTextAreas]);

  const handleTextAreaChange = (num: number) => {
    setNumTextAreas(num);
  };

  const handleVisible = () => {
    setVisibility(!visible);
  };

  const handleSelectedLabelChange = (label: string) => {
    setSelectedLabel(label);
  };

  const handleUserThoughtsChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setUserThoughts(event.target.value);
  };

  const ImageStyle = {
    width: "20%",
    height: "50%",
    border: "3px solid black",
    margin: "auto",
    transform: "translate(-100%,-250%)",
  };

  return (
    <>
      <Base children={null} />
      <Block1
        onTextAreaChange={handleTextAreaChange}
        onShow={handleVisible}
        selectedLabel={selectedLabel}
        userThoughts={userThoughts}
        onUserThoughtsChange={(thoughts: React.SetStateAction<string>) =>
          setUserThoughts(thoughts)
        }
      />
      {visible && (
        <Block2
          numTextAreas={numTextAreas}
          content={content}
          setContent={setContent}
          subText="Following are User's views on the company"
          textArray={[
            "Hexagon",
            "Dell",
            "Providence",
            "S&P Global",
            "PWC",
            "Sapient",
            "Deloitte",
            "IBM",
            "DBS",
            "VISA",
            "FactSet",
          ]}
          onSelectedLabelChange={handleSelectedLabelChange}
          userThoughts={userThoughts}
          onUserThoughtsChange={handleUserThoughtsChange}
        />
      )}

      <img className="img" style={ImageStyle} src={assignmentImage} alt="/" />
    </>
  );
};

export default App;
