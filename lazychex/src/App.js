/*
  THINGS TO DO:
  - Doughnut chart for Scores
  - Doughnut chart for Correct Answes
  - Sticky navbar
  - Logo
  - Golden Ratio on screen
  - Golden Ratio text sizes
*/


import "./App.css";
import FileInput from "./Components/FileInput/FileInput";
import QueryBox from "./Components/QueryBox/QueryBox";
import React, {useState, useEffect} from "react";

function App() {
  const [AnswerFileContent, setAnswerFileContent] = useState([]);
  const [SubmissionFileContent, setSubmissionFileContent] = useState([]);
  const [Mark, setMark] = useState([]);
  const [CorrectAnswers, setCorrectAnswers] = useState(0);
  const [OutOfSix, setOutOfSix] = useState(0);

  const TotalQuestions = AnswerFileContent.length;
  const TotalLines = Math.max(AnswerFileContent.length, SubmissionFileContent.length); // maximum lines between the two files

  const handleAnswerFileSelect = (line) =>
  {
    setAnswerFileContent((previousLines) => [...previousLines, line]);
  };

  const handleSubmissionFileSelect = (line) =>
  {
    setSubmissionFileContent((previousLines) => [...previousLines, line]);
  };

  const clearAnswerFileInputContent = () =>
  {
    setAnswerFileContent([]);
  };

  const clearSubmissionFileInputContent = () =>
  {
    setSubmissionFileContent([]);
  };

  useEffect(() =>
  {
    if (TotalQuestions == 0)
    {
      setOutOfSix(0);
    }
    else
    {
      setOutOfSix(((CorrectAnswers/TotalQuestions)*6).toFixed(2));
    }
  }, Mark);

  useEffect(() =>
  {
    let countingCorrectAnswers = 0;
    let newMark = [];
    for (let index = 0; index < TotalLines; index++)
    {
      console.log(SubmissionFileContent[index].length, AnswerFileContent[index].length)
      if (AnswerFileContent[index] !== "" && SubmissionFileContent[index] !== "" && AnswerFileContent[index] === SubmissionFileContent[index])
      {
        countingCorrectAnswers++;
        newMark[index] = "Tick.png";
      }
      else
      {
        newMark[index] = "Cross.png";
      }
    }
    setCorrectAnswers(countingCorrectAnswers);
    setMark(newMark);
  }, [AnswerFileContent, SubmissionFileContent])

  const changeFromTickToCrossAndFromCrossToTick = (index) =>
  {
    let newMark = [...Mark];
    let newCount;
    if (newMark[index] === "Tick.png")
    {
      newMark[index] = "Cross.png";
      newCount = CorrectAnswers - 1;
    }
    else
    {
      newMark[index] = "Tick.png";
      newCount = CorrectAnswers + 1;
    }
    setMark(newMark);
    setCorrectAnswers(newCount);
  };

  return (
    <div>
      <div className = "Title">
        <h1>LazyCheX or CheckSQL</h1>
      </div>

      <div className = "Section">
        <h1 className = "Scoreboard">Correct Answers: <span style = {{color: 'green'}}>{CorrectAnswers}/{TotalQuestions}</span></h1>
        <h1 className = "Scoreboard">Score: <span style = {{color: 'green'}}>{OutOfSix}/6</span></h1>
      </div>
      <div className = "Section">
        <div className = "MakeThemAppearSideBySideInSameLine">
          <FileInput id = "AnswerFileInput" onFileSelect = {handleAnswerFileSelect} uniqueKeyPropToDifferentiateInputs = "AnswerFileInput" clearContent = {clearAnswerFileInputContent}/>
        </div>
        <div className = "MakeThemAppearSideBySideInSameLine">
          <FileInput id = "SubmissionFileInput" onFileSelect = {handleSubmissionFileSelect} uniqueKeyPropToDifferentiateInputs = "SubmissionFileInput" clearContent = {clearSubmissionFileInputContent}/>
        </div>
      </div>

      {/* THIS IS AN IMPORTANT COMMENT ---> We learned a lot from this, Ash.
      {AnswerFileContent.map((line, index) =>
        (
          <QueryBox id = {`AnswerFileInputDisplay${index}`} fileContent = {line} key = {`AnswerFileInputDisplay${index}`}/>
        )
      )}
      {SubmissionFileContent.map((line, index) =>
        (
          <QueryBox id = {`SubmissionFileInputDisplay${index}`} fileContent = {line} key = {`SubmissionFileInputDisplay${index}`}/>
        )
      )} */}

      <table>
        <thead>
          <th className = "EqualWidthColumns">
            Answer File
          </th>
          <th className = "EqualWidthColumns">
            Submission File
          </th>
          <th className = "ColumnWithOneFifthWidthOfTable">
            Mark (Click to change)
          </th>
        </thead>
        <tbody>
          {Array.from({length: TotalLines}).map((_, index) =>
            (
              <tr key = {`row${index}`}>
                <td>
                  <QueryBox id = {`AnswerFileInputDisplay${index}`} fileContent = {AnswerFileContent[index] || ""} key = {`AnswerFileInputDisplay${index}`}/>
                </td>
                <td>
                  <QueryBox id = {`SubmissionFileInputDisplay${index}`} fileContent = {SubmissionFileContent[index] || ""} key = {`SubmissionFileInputDisplay${index}`}/>
                </td>
                <td>
                  <img id = {`Mark${index}`} src = {Mark[index]} onClick = {() => changeFromTickToCrossAndFromCrossToTick(index)}/>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;