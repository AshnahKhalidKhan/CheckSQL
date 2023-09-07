import './QueryBox.css';
import { CheckBox } from '@mui/icons-material';

function QueryBox() {
    return (
        <div className = 'QueryBox'>
            {/* <h1 style = {{}}>Something something</h1> */}
            <input id = 'AnswerFileInput' type = 'file' placeholder = 'Answer file goes here' style = {{textAlign: 'center', margin: 'auto'}}></input>
            <h1 >Something something</h1>
        </div>
    );
}

export default QueryBox;