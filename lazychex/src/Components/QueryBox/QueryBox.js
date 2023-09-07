import './QueryBox.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function QueryBox() {
    return (
        <div className = 'QueryBox'>
            {/* <h1 style = {{}}>Something something</h1> */}
            {/* <input id = 'AnswerFileInput' type = 'file' placeholder = 'Answer file goes here' style = {{}}></input> */}
            <Button
  component="label"
  variant="contained"
  startIcon={<CloudUploadIcon />}
  href="#file-upload"
>
  Upload a file
  <VisuallyHiddenInput type="file" />
</Button>
            <h1 >Something something</h1>
        </div>
    );
}

export default QueryBox;