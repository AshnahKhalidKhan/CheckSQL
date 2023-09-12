import './App.css';
import FileInput from './Components/FileInput/FileInput';
import QueryBox from './Components/QueryBox/QueryBox';
import React, { useState } from 'react';

function App() {
  /*
    1. Create separate state variables constants.
    2. Create function to set state variables ya kya????
    3. Include the actual thang into the component's div????
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
        <h1>LazyCheX or CheckSQL or find a name Ash</h1>
      </div>
      <div className = 'Section'>
        <div className = 'MakeThemAppearSideBySideInSameLine'>
          <FileInput id = 'AnswerFileInput' onFileSelect = {handleAnswerFileSelect} uniqueKeyPropToDifferentiateInputs = 'AnswerFileInput'/>
        </div>
        <div className = 'MakeThemAppearSideBySideInSameLine'>
          <FileInput id = 'SubmissionFileInput' onFileSelect = {handleSubmissionFileSelect} uniqueKeyPropToDifferentiateInputs = 'SubmissionFileInput'/>
        </div>
      </div>

      {AnswerFileContent.map((line, index) =>
          (
            <QueryBox id = {`AnswerFileInputDisplay${index}`} fileContent = {line} key = {`AnswerFileInputDisplay${index}`}/>
          )
        )}
        {SubmissionFileContent.map((line, index) =>
          (
            <QueryBox id = {`SubmissionFileInputDisplay${index}`} fileContent = {line} key = {`SubmissionFileInputDisplay${index}`}/>
          )
        )}




      <table style = {{width: '100%'}}>
        <thead>
          <th style = {{colspan: 2}}>
            Answer File
          </th>
          <th>
            Submission File
          </th>
          <th style = {{colspan: 2}}>
            Mark
          </th>
        </thead>
        <tbody>

        



          <tr>
            <td>
              jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            </td>
            <td>
              jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            </td>
            <td>
            <img src = "Tick.png"></img>
            </td>
          </tr>
          <tr>
            <td>
              jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            </td>
            <td>
              jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
            </td>
            <td>
            <img src = "Cross.png"></img>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
