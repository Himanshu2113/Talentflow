import { useEffect, useState } from "react";

export default function Candidates() {
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("/api/candidates").then(r => r.json()).then(setCandidates);
  }, []);

  // add candidate
  function addCandidate() {
    if (!name || !email) return alert("Name & Email required");
    fetch("/api/candidates", {
      method: "POST",
      body: JSON.stringify({ name, email, stage: "applied" })
    })
      .then(r => r.json())
      .then(c => setCandidates([...candidates, c]));
    setName("");
    setEmail("");
  }

  // move stage
  function changeStage(id, stage) {
    setCandidates(candidates.map(c =>
      c.id === id ? { ...c, stage } : c
    ));
  }

  return (
    <div>
      <h2>Candidates</h2>

      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={addCandidate}>Add</button>

      <ul>
        {candidates.map(c => (
          <li key={c.id}>
            {c.name} ({c.email}) - 
            <select value={c.stage} onChange={e => changeStage(c.id, e.target.value)}>
              <option>applied</option>
              <option>screen</option>
              <option>tech</option>
              <option>offer</option>
              <option>hired</option>
              <option>rejected</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}
