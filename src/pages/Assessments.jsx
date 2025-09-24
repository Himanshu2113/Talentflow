import { useState } from "react";

export default function Assessments() {
  const [questions, setQuestions] = useState([]);
  const [q, setQ] = useState("");

  function addQ() {
    if (!q.trim()) return;
    setQuestions([...questions, q]);
    setQ("");
  }

  return (
    <div>
      <h2>Assessments</h2>

      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Enter question"
      />
      <button onClick={addQ}>Add Question</button>

      <h3>Preview</h3>
      <ol>
        {questions.map((qq, i) => (
          <li key={i}>{qq}</li>
        ))}
      </ol>
    </div>
  );
}
