import { useParams } from "react-router-dom";
import "../css/CodingQuestions.css";

function CodingQuestions() {

  const { language } = useParams();

  const questions = {
    java: [
      "1. What is Java?",
      "2. Explain OOP concepts.",
      "3. Difference between JDK, JRE and JVM.",
      "4. What is inheritance?",
      "5. What is polymorphism?"
    ],

    python: [
      "1. What is Python?",
      "2. Difference between list and tuple.",
      "3. What is a dictionary?",
      "4. What are lambda functions?",
      "5. Explain decorators."
    ],

    "c-programming": [
      "1. What is a pointer?",
      "2. Explain malloc().",
      "3. Difference between structure and union.",
      "4. What is recursion?",
      "5. Explain storage classes."
    ],

    sql: [
      "1. What is SQL?",
      "2. Difference between DELETE and TRUNCATE.",
      "3. Explain JOIN types.",
      "4. What is a Primary Key?",
      "5. What is a Foreign Key?"
    ],

    "html---css": [
      "1. What is Semantic HTML?",
      "2. Difference between id and class.",
      "3. What is Flexbox?",
      "4. What is Grid?",
      "5. Difference between inline and block elements."
    ],

    javascript: [
      "1. What is JavaScript?",
      "2. Difference between let, var and const.",
      "3. Explain closures.",
      "4. What are promises?",
      "5. Explain async/await."
    ]
  };

  return (
    <div className="questions-page">

      <h1>{language.toUpperCase()} Interview Questions</h1>

      <div className="question-list">

        {questions[language]?.map((question, index) => (

          <div className="question-card" key={index}>
            {question}
          </div>

        ))}

      </div>

    </div>
  );
}

export default CodingQuestions;