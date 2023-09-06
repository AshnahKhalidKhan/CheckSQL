import './App.css';

function App() {
  return (
    <div>
      <div className = 'Title'>
        <h1>LazyCheX or CheckSQL</h1>
      </div>
      <div style = {{width: '100%', textAlign: 'center', margin: 'auto'}}>
        <input type = 'file' defaultValue = 'Answer file goes here' style = {{textAlign: 'center', margin: 'auto'}}></input>
        <input type = 'file' defaultValue = 'Submission file goes here' style = {{textAlign: 'center', margin: 'auto'}}></input>
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
