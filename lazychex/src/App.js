import './App.css';
import FileInput from './Components/FileInput/FileInput';
import QueryBox from './Components/QueryBox/QueryBox';
import React, { useState } from 'react';

function App() {
  /*
    1. Create separate state variables constants.
  */
  const [AnswerFileContent, setAnswerFileContent] = useState([]);
  const [SubmissionFileContent, setSubmissionFileContent] = useState([]);

  const handleAnswerFileSelect = (line) =>
  {
    setAnswerFileContent((previousLines) => [...previousLines, line]);
  };
  const handleSubmissionFileSelect = (line) =>
  {
    setSubmissionFileContent((previousLines) => [...previousLines, line]);
  };

  return (
    <div>
      <div className = 'Title'>
        <h1>LazyCheX or CheckSQL</h1>
      </div>
      <FileInput id = 'AnswerFileInput' onFileSelect = {handleAnswerFileSelect} uniqueKeyPropToDifferentiateInputs = 'AnswerFileInput'/>
      {AnswerFileContent.map((line, index) =>
        (
          <QueryBox id = {`AnswerFileInputDisplay${index}`} fileContent = {line} key = {`AnswerFileInputDisplay${index}`}/>
        )
      )}
      <FileInput id = 'SubmissionFileInput' onFileSelect = {handleSubmissionFileSelect} uniqueKeyPropToDifferentiateInputs = 'SubmissionFileInput'/>
      {SubmissionFileContent.map((line, index) =>
        (
          <QueryBox id = {`SubmissionFileInputDisplay${index}`} fileContent = {line} key = {`SubmissionFileInputDisplay${index}`}/>
        )
      )}




      <div className = 'Section'>
        <div className = 'MakeThemAppearSideBySideInSameLine'>
          <FileInput id = 'AnswerFileInput' onFileSelect = {handleAnswerFileSelect} uniqueKeyPropToDifferentiateInputs = 'AnswerFileInput'/>
        </div>
        <div className = 'MakeThemAppearSideBySideInSameLine'>
          <FileInput id = 'SubmissionFileInput' onFileSelect = {handleSubmissionFileSelect} uniqueKeyPropToDifferentiateInputs = 'SubmissionFileInput'/>
        </div>
      </div>





      <table style = {{width: '100%'}}>
        <thead>
          <th style = {{colspan: 2}}>
            Answer File
          </th>
          <th>
            Mark
          </th>
          <th style = {{colspan: 2}}>
            Submission File
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            </td>
            <td>
            <img src = "Tick.png"></img>
            </td>
            <td>
              jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            </td>
          </tr>
          <tr>
            <td>
              jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            </td>
            <td>
            <img src = "Cross.png"></img>
            </td>
            <td>
              jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
