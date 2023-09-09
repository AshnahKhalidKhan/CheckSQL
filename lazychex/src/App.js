import './App.css';
import FileInput from './Components/FileInput/FileInput';
import QueryBox from './Components/QueryBox/QueryBox';
import React, { useState } from 'react';

function App() {
  const [fileContent, setFileContent] = useState('');

  const handleFileSelect = (content) => {
    setFileContent(content);
  };

  return (
    <div>
      <div className = 'Title'>
        <h1>LazyCheX or CheckSQL</h1>
      </div>
      <FileInput onFileSelect={handleFileSelect} />
      <QueryBox fileContent={fileContent} />
      <div style = {{width: '100%', textAlign: 'center', margin: 'auto'}}>
        
        {/* <label for = 'AnswerFileInput'></label>
        <input id = 'AnswerFileInput' type = 'file' placeholder = 'Answer file goes here' style = {{textAlign: 'center', margin: 'auto'}}></input>
        <label for = 'AnswerFileInput'>Heyyyyyy</label>
        <input id = 'SubmissionFileInput' type = 'file' placeholder = 'Submission file goes here' style = {{textAlign: 'center', margin: 'auto'}}></input> */}
      </div>
      {/* <table style = {{width: '100%'}}>
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
      </table> */}
    </div>
  );
}

export default App;
