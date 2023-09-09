// FileInput.js
import React, { useState } from 'react';

function FileInput({ onFileSelect }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;
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
