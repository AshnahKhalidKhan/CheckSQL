// FileInput.js
import React, { useState } from 'react';

function FileInput({ onFileSelect }) {
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
        onFileSelect(fileContent);
      };

      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".txt" onChange={handleFileChange} />
    </div>
  );
}

export default FileInput;