import React, { useState, ChangeEvent, CSSProperties, useMemo } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface Block2Props {
  numTextAreas: number;
  content: string[];
  setContent: React.Dispatch<React.SetStateAction<string[]>>;
  subText: string;
  textArray: string[];
  onSelectedLabelChange: (label: string) => void;
  userThoughts: string;
  onUserThoughtsChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Block2: React.FC<Block2Props> = ({ numTextAreas, content, setContent, subText, textArray, onSelectedLabelChange, userThoughts, onUserThoughtsChange }) => {
  const [selectedRadio, setSelectedRadio] = useState<number | null>(null);

  const showSubText = useMemo(() => Array(numTextAreas).fill(false), [numTextAreas]);
  const [showSubTextState, setShowSubTextState] = useState<boolean[]>(showSubText);

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>, index: number) => {
    const newContent = [...content];
    newContent[index] = event.target.value;
    setContent(newContent);
  };

  const handleRadioChange = (index: number) => {
    const newIndex = selectedRadio === index ? null : index;
    setSelectedRadio(newIndex);
    onSelectedLabelChange(newIndex !== null ? textArray[newIndex] : "");
  };

  const toggleSubText = (index: number) => {
    const newShowSubText = [...showSubTextState];
    newShowSubText[index] = !newShowSubText[index];
    setShowSubTextState(newShowSubText);
  };

  const radioStyle: CSSProperties = {
    marginBottom: '10px',
    marginRight: '5px',
  };

  const radioLabel: CSSProperties = {
    marginRight: '50px',
    display: 'flex',
    flexDirection: 'column',
  };

  const containerStyle: CSSProperties = {
    width: '15cm',
    height: '20cm',
    border: '3px solid black',
    backgroundColor: 'rgb(22, 218, 38)',
    margin: 'auto',
    transform: 'translate(10%, -350%)',
    overflow: 'auto',
    padding: '10px',
    boxSizing: 'border-box',
  };

  const radioButtons = useMemo(() => (
    Array.from({ length: numTextAreas }, (_, index) => (
      <div key={index}>
        <label className="radioLabel" style={radioLabel}>
          {textArray[index]}
          <input
            type="radio"
            className="radioButton" style={radioStyle}
            id="radioBut"
            onChange={() => handleRadioChange(index)}
            checked={selectedRadio === index}
          />
        </label>
        <br />
        {selectedRadio === index && (
          <>
            <textarea
              value={content[index]}
              onChange={(event) => handleOnChange(event, index)}
              rows={8}
              cols={70}
            />
            <br />
            <button onClick={() => toggleSubText(index)}>
              Click Here to view Sub Text
            </button>
            {showSubTextState[index] && (
              <>
                <br />
                <textarea
                  value={`${subText}\n\n${userThoughts}`}
                  readOnly
                  rows={4}
                  cols={70}
                />
              </>
            )}
            <br />
          </>
        )}
      </div>
    ))
  ), [numTextAreas, textArray, selectedRadio, content, subText, userThoughts, showSubTextState]);

  return (
    <div className="block2Container" style={containerStyle}>
      {radioButtons}
      <h1>You have {numTextAreas} text Areas</h1>
      <textarea
        className="inputText"
        value={userThoughts}
        onChange={onUserThoughtsChange}
        placeholder="Leave your Thoughts Here."
        rows={4}
        cols={70}
      />
    </div>
  );
};

export default Block2;
