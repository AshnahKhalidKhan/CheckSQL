import './App.css';
import QueryBox from './Components/QueryBox/QueryBox';

function App() {
  return (
    <div>
      <div className = 'Title'>
        <h1>LazyCheX or CheckSQL</h1>
      </div>
      <QueryBox/>
      <div style = {{width: '100%', textAlign: 'center', margin: 'auto'}}>
        
        {/* <label for = 'AnswerFileInput'></label>
        <input id = 'AnswerFileInput' type = 'file' placeholder = 'Answer file goes here' style = {{textAlign: 'center', margin: 'auto'}}></input>
        <label for = 'AnswerFileInput'>Heyyyyyy</label>
        <input id = 'SubmissionFileInput' type = 'file' placeholder = 'Submission file goes here' style = {{textAlign: 'center', margin: 'auto'}}></input> */}
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
