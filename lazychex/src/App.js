// import "./App.css";
// import FileInput from "./Components/FileInput/FileInput";
// import QueryBox from "./Components/QueryBox/QueryBox";
// import React, {useState, useEffect} from "react";

// function App() {
//   /*
//     1. Create separate state variables constants.
//     2. Create function to set state variables ya kya????
//     3. Include the actual thang into the component"s div????
//   */
//   const [AnswerFileContent, setAnswerFileContent] = useState([]);
//   const [SubmissionFileContent, setSubmissionFileContent] = useState([]);
//   const [CorrectAnswers, setCorrectAnswers] = useState(0);

//   const handleAnswerFileSelect = (line) =>
//   {
//     setAnswerFileContent((previousLines) => [...previousLines, line]);
//   };
//   const handleSubmissionFileSelect = (line) =>
//   {
//     setSubmissionFileContent((previousLines) => [...previousLines, line]);
//   };

//   // Function to clear the content
//   const clearAnswerFileInputContent = () =>
//   {
//     setAnswerFileContent([]);
//   };

//   const clearSubmissionFileInputContent = () =>
//   {
//     setSubmissionFileContent([]);
//   };

//   const selectTickOrCross = (AnswerText, SubmissionText) =>
//   {
//     if (AnswerText == SubmissionText)
//     {
//       return "Tick.png";
//     }
//     else
//       return "Cross.png";
//   };

//   const toggleImage = (index) => {
//     const newAnswerFileContent = [...AnswerFileContent];
//     if (newAnswerFileContent[index] === "Tick.png") {
//       newAnswerFileContent[index] = "Cross.png";
//       setCorrectAnswers((count) => count - 1);
//     } else {
//       newAnswerFileContent[index] = "Tick.png";
//       setCorrectAnswers((count) => count + 1);
//     }
//     setAnswerFileContent(newAnswerFileContent);
//   };

//   useEffect(() =>
//   {
//     let correctAnswers = 0;
//     for (let index = 0; index < Math.min(AnswerFileContent.length, SubmissionFileContent.length); index++)
//     {
//       if (AnswerFileContent[index] !== "" && SubmissionFileContent[index] !== "" && AnswerFileContent[index] === SubmissionFileContent[index])
//       {
//         correctAnswers++;
//       }
//     }
//     setCorrectAnswers(correctAnswers);
//   }, [AnswerFileContent, SubmissionFileContent]);

//   // Define the number of rows based on the maximum lines between the two files.
//   const totalQuestions = Math.max(AnswerFileContent.length, SubmissionFileContent.length);

//   return (
//     <div>
//       <div className = "Title">
//         <h1>LazyCheX or CheckSQL</h1>
//       </div>
//       <div>
//         <h1>{CorrectAnswers}</h1>
//       </div>



//       <div className = "Section">
//         <div className = "MakeThemAppearSideBySideInSameLine">
//           <FileInput id = "AnswerFileInput" onFileSelect = {handleAnswerFileSelect} uniqueKeyPropToDifferentiateInputs = "AnswerFileInput" clearContent = {clearAnswerFileInputContent}/>
//         </div>
//         <div className = "MakeThemAppearSideBySideInSameLine">
//           <FileInput id = "SubmissionFileInput" onFileSelect = {handleSubmissionFileSelect} uniqueKeyPropToDifferentiateInputs = "SubmissionFileInput" clearContent = {clearSubmissionFileInputContent}/>
//         </div>
//       </div>

//       {/* THIS IS AN IMPORTANT COMMENT ---> We learned a lot from this, Ash.
//       {AnswerFileContent.map((line, index) =>
//         (
//           <QueryBox id = {`AnswerFileInputDisplay${index}`} fileContent = {line} key = {`AnswerFileInputDisplay${index}`}/>
//         )
//       )}
//       {SubmissionFileContent.map((line, index) =>
//         (
//           <QueryBox id = {`SubmissionFileInputDisplay${index}`} fileContent = {line} key = {`SubmissionFileInputDisplay${index}`}/>
//         )
//       )} */}

//       <table>
//         <thead>
//           <th className = "EqualWidthColumns">
//             Answer File
//           </th>
//           <th className = "EqualWidthColumns">
//             Submission File
//           </th>
//           <th className = "ColumnWithOneFifthWidthOfTable">
//             Mark
//           </th>
//         </thead>
//         <tbody>
//           {Array.from({length: totalQuestions}).map((_, index) =>
//             (
//               <tr key = {`row${index}`}>
//                 <td>
//                   <QueryBox id = {`AnswerFileInputDisplay${index}`} fileContent = {AnswerFileContent[index] || ""} key = {`AnswerFileInputDisplay${index}`}/>
//                 </td>
//                 <td>
//                   <QueryBox id = {`SubmissionFileInputDisplay${index}`} fileContent = {SubmissionFileContent[index] || ""} key = {`SubmissionFileInputDisplay${index}`}/>
//                 </td>
//                 <td>
//                   <img src = {selectTickOrCross(AnswerFileContent[index], SubmissionFileContent[index])} onClick={() => toggleImage(index)}/>
//                 </td>
//               </tr>
//             )
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import FileInput from "./Components/FileInput/FileInput";
import QueryBox from "./Components/QueryBox/QueryBox";

function App() {
  const [AnswerFileContent, setAnswerFileContent] = useState([]);
  const [SubmissionFileContent, setSubmissionFileContent] = useState([]);
  const [CorrectAnswers, setCorrectAnswers] = useState(0);

  const handleAnswerFileSelect = (line) => {
    setAnswerFileContent((previousLines) => [...previousLines, line]);
  };

  const handleSubmissionFileSelect = (line) => {
    setSubmissionFileContent((previousLines) => [...previousLines, line]);
  };

  const clearAnswerFileInputContent = () => {
    setAnswerFileContent([]);
  };

  const clearSubmissionFileInputContent = () => {
    setSubmissionFileContent([]);
  };

  const selectTickOrCross = (AnswerText, SubmissionText) => {
    if (AnswerText === SubmissionText) {
      return "Tick.png";
    } else {
      return "Cross.png";
    }
  };

  // Function to toggle image source
  const toggleImage = (index) => {
    const newAnswerFileContent = [...AnswerFileContent];
    if (newAnswerFileContent[index] === "Tick.png") {
      newAnswerFileContent[index] = "Cross.png";
    } else {
      newAnswerFileContent[index] = "Tick.png";
    }
    setAnswerFileContent(newAnswerFileContent);
  };

  useEffect(() => {
    let correctAnswers = 0;
    for (
      let index = 0;
      index <
      Math.min(AnswerFileContent.length, SubmissionFileContent.length);
      index++
    ) {
      if (
        AnswerFileContent[index] !== "" &&
        SubmissionFileContent[index] !== "" &&
        AnswerFileContent[index] === SubmissionFileContent[index]
      ) {
        correctAnswers++;
      }
    }
    setCorrectAnswers(correctAnswers);
  }, [AnswerFileContent, SubmissionFileContent]);

  const totalQuestions = Math.max(
    AnswerFileContent.length,
    SubmissionFileContent.length
  );

  return (
    <div>
      <div className="Title">
        <h1>LazyCheX or CheckSQL</h1>
      </div>
      <div>
        <h1>{CorrectAnswers}</h1>
      </div>

      <div className="Section">
        <div className="MakeThemAppearSideBySideInSameLine">
          <FileInput
            id="AnswerFileInput"
            onFileSelect={handleAnswerFileSelect}
            uniqueKeyPropToDifferentiateInputs="AnswerFileInput"
            clearContent={clearAnswerFileInputContent}
          />
        </div>
        <div className="MakeThemAppearSideBySideInSameLine">
          <FileInput
            id="SubmissionFileInput"
            onFileSelect={handleSubmissionFileSelect}
            uniqueKeyPropToDifferentiateInputs="SubmissionFileInput"
            clearContent={clearSubmissionFileInputContent}
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th className="EqualWidthColumns">Answer File</th>
            <th className="EqualWidthColumns">Submission File</th>
            <th className="ColumnWithOneFifthWidthOfTable">Mark</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: totalQuestions }).map((_, index) => (
            <tr key={`row${index}`}>
              <td>
                <QueryBox
                  id={`AnswerFileInputDisplay${index}`}
                  fileContent={AnswerFileContent[index] || ""}
                  key={`AnswerFileInputDisplay${index}`}
                />
              </td>
              <td>
                <QueryBox
                  id={`SubmissionFileInputDisplay${index}`}
                  fileContent={SubmissionFileContent[index] || ""}
                  key={`SubmissionFileInputDisplay${index}`}
                />
              </td>
              <td>
                <img
                  src={selectTickOrCross(
                    AnswerFileContent[index],
                    SubmissionFileContent[index]
                  )}
                  onClick={() => toggleImage(index)}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
