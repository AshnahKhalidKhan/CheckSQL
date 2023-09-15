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
//   const [Mark, setMark] = useState([]);
//   const [CorrectAnswers, setCorrectAnswers] = useState(0);

//   const handleAnswerFileSelect = (line) =>
//   {
//     setAnswerFileContent((previousLines) => [...previousLines, line]);
//   };

//   const handleSubmissionFileSelect = (line) =>
//   {
//     setSubmissionFileContent((previousLines) => [...previousLines, line]);
//   };

//   const clearAnswerFileInputContent = () =>
//   {
//     setAnswerFileContent([]);
//   };

//   const clearSubmissionFileInputContent = () =>
//   {
//     setSubmissionFileContent([]);
//   };

//   const totalQuestions = Math.max(AnswerFileContent.length, SubmissionFileContent.length); // Define the number of rows based on the maximum lines between the two files.

//   useEffect(() =>
//   {
//     let countingCorrectAnswers = 0;
//     for (let index = 0; index < totalQuestions; index++)
//     {
//       if (AnswerFileContent[index] !== "" && SubmissionFileContent[index] !== "" && AnswerFileContent[index] === SubmissionFileContent[index])
//       {
//         countingCorrectAnswers++;
//       }
//     }
//     setCorrectAnswers(countingCorrectAnswers);
//   }, [AnswerFileContent, SubmissionFileContent])

// useEffect(() => {
//   let correctAnswers = 0;
//   let newMark = [];

//   for (let index = 0; index < Math.min(AnswerFileContent.length, SubmissionFileContent.length); index++) {
//     if (AnswerFileContent[index] === SubmissionFileContent[index]) {
//       correctAnswers++;
//       newMark[index] = "Tick.png";
//     } else {
//       newMark[index] = "Cross.png";
//     }
//   }
//   setCorrectAnswers(correctAnswers);
//   setMark(newMark);
// }, [AnswerFileContent, SubmissionFileContent]);

//   const selectTickOrCross = (AnswerText, SubmissionText) =>
//   {
//     if (AnswerText == SubmissionText)
//     {
//       return "Tick.png";
//     }
//     else
//       return "Cross.png";
//   };

//   const changeFromTickToCrossAndFromCrossToTick = (index) =>
//   {
//     if (document.getElementById(`Mark${index}`).src.endsWith("Tick.png"))
//     // Alternately, I can try this: if (img.src == "http://localhost:3000/Tick.png")
//     {
//       document.getElementById(`Mark${index}`).src = "Cross.png";
//       let countingCorrectAnswers = CorrectAnswers - 1;
//       setCorrectAnswers(countingCorrectAnswers);
//     }
//     else
//     {
//       document.getElementById(`Mark${index}`).src = "Tick.png";
//       let countingCorrectAnswers = CorrectAnswers + 1;
//       setCorrectAnswers(countingCorrectAnswers);
//     }
// let newMark = [...Mark];
//     let newCount = CorrectAnswers;

//     if (newMark[index] === "Tick.png") {
//       newMark[index] = "Cross.png";
//       newCount -= 1;
//     } else {
//       newMark[index] = "Tick.png";
//       newCount += 1;
//     }

//     setMark(newMark);
//     setCorrectAnswers(newCount);
//   };

//   return (
//     <div>
//       <div className = "Title">
//         <h1>LazyCheX or CheckSQL</h1>
//       </div>
//       <div>
//         <h1>Total Questions: {totalQuestions}</h1>
//         <h1>Correct Answers: {CorrectAnswers}</h1>
//         <h1>Out of 6: {}</h1>
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
//                   <img id = {`Mark${index}`} src = {Mark[index])} onClick = {() => changeFromTickToCrossAndFromCrossToTick(index)}/>
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