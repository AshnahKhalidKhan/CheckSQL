import "./FileInput.css";
import React, {useState, useRef} from 'react';
import Button from '@mui/material/Button';
import UploadFileIcon from '@mui/icons-material/UploadFileRounded';
import FileUploadedIcon from '@mui/icons-material/TaskRounded';

function FileInput({onFileSelect, uniqueKeyPropToDifferentiateInputs, clearContent})
{
  const fileReference = useRef(null);
  const [fileSelected, setFileSelected] = useState(false);
  const [fileName, setFileName] = useState('');

  const buttonClickedSoSelectFile = () =>
  {
    fileReference.current.click()
  }

  const handleFileChange = (event) =>
  {
    const file = event.target.files[0];
    // ^event.target refers to the input element, and .files is an array containing the selected files. We assume there's only one selected file ([0]).

    if (file != null && file != undefined)
    {
      const reader = new FileReader();
      // We set up an onload event handler for the reader. When the file is successfully loaded, this handler is called.
      reader.onload = (e) =>
      {
        const fileContent = e.target.result;
        // ^Inside the onload handler, we access the file's content using e.target.result. This content is in the form of a string.
        const lines = fileContent.split('\n'); // Split content into lines
        clearContent(); // Clear content before adding new lines
        for (const line of lines)
        {
          let processedLine = line.toLowerCase();
          if (processedLine.startsWith("--") == false && processedLine.length !== 0)
          {
            const charArray = processedLine.split("");
            let newLine = "";
            for (let i = 0; i < processedLine.length; i++)
            {
              switch (charArray[i])
              {
                case ' ':
                {
                  if (newLine.charAt(newLine.length - 1) !== ' ')
                  {
                    if (i + 1 < processedLine.length && (charArray[i + 1] === ')' || charArray[i + 1] === ','))
                    {
                      i++;
                    }
                    newLine += charArray[i];
                  }
                  break;
                }
                case '<':
                {
                  if (i - 1 >= 0 && charArray[i - 1] !== ' ')
                  {
                    newLine += ' ';
                  }
                  newLine += charArray[i];
                  if (i + 1 < processedLine.length && charArray[i + 1] !== ' ' && charArray[i + 1] !== '=')
                  {
                    newLine += ' ';
                  }
                  break;
                }
                case '>':
                {
                  if (i - 1 >= 0 && charArray[i - 1] !== ' ')
                  {
                    newLine += ' ';
                  }
                  newLine += charArray[i];
                  if (i + 1 < processedLine.length && charArray[i + 1] !== ' ' && charArray[i + 1] !== '=')
                  {
                    newLine += ' ';
                  }
                  break;
                }
                case '=':
                {
                  if (i - 1 >= 0 && charArray[i - 1] !== ' ' && charArray[i - 1] !== '>' && charArray[i - 1] !== '<')
                  {
                    newLine += ' ';
                  }
                  newLine += charArray[i];
                  if (i + 1 < processedLine.length && charArray[i + 1] !== ' ')
                  {
                    newLine += ' ';
                  }
                  break;
                }
                case ',':
                {
                  newLine += charArray[i];
                  if (i + 1 < processedLine.length && charArray[i + 1] !== ' ')
                  {
                    newLine += ' ';
                  }
                  break;
                }
                case '(':
                {
                  newLine += charArray[i];
                  if (i + 1 < processedLine.length && charArray[i + 1] === ' ')
                  {
                    i++;
                  }
                  break;
                }
                default:
                {
                  newLine += charArray[i];
                }
              }
            }
            processedLine = newLine;
            onFileSelect(processedLine);
          }
        }
      };
      reader.readAsText(file); //readAsText works like Java wala Scanner
      setFileSelected(true);
      setFileName(file.name);
    }
  };

  return (
    <div>
      <input className = "HiddenInput" type = "file" accept = ".txt" onChange = {handleFileChange} key = {uniqueKeyPropToDifferentiateInputs} ref = {fileReference}/>
      <Button className = "InputButton" onClick = {buttonClickedSoSelectFile}>
        <UploadFileIcon className = "UploadFileIcon"/>
        <span className = "InputButtonText">Choose New File</span>
        {fileSelected ? <FileUploadedIcon className = "FileUploadedIcon"/> : null}
        {fileSelected ? <span className = "InputButtonText">{fileName}</span> : null}
      </Button>
    </div>
  );
}

export default FileInput;