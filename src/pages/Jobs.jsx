// import { useEffect, useState } from "react";

// export default function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const [title, setTitle] = useState("");

//   // fetch jobs
//   useEffect(() => {
//     fetch("/api/jobs").then(r => r.json()).then(setJobs);
//   }, []);

//   // add job
//   function addJob() {
//     if (!title.trim()) return alert("Title required");
//     fetch("/api/jobs", {
//       method: "POST",
//       body: JSON.stringify({ title, status: "active" })
//     })
//       .then(r => r.json())
//       .then(j => setJobs([...jobs, j]));
//     setTitle("");
//   }

//   // toggle archive
//   function toggleStatus(id) {
//     setJobs(jobs.map(j =>
//       j.id === id ? { ...j, status: j.status === "active" ? "archived" : "active" } : j
//     ));
//   }

//   return (
//     <div>
//       <h2>Jobs</h2>

//       <input
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//         placeholder="Job title"
//       />
//       <button onClick={addJob}>Add</button>

//       <ul>
//         {jobs.map(j => (
//           <li key={j.id}>
//             {j.title} ({j.status})
//             <button onClick={() => toggleStatus(j.id)}>
//               {j.status === "active" ? "Archive" : "Unarchive"}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("/api/jobs").then(r => r.json()).then(setJobs);
  }, []);

  function addJob() {
    if (!title.trim()) return alert("Title required");
    fetch("/api/jobs", {
      method: "POST",
      body: JSON.stringify({ title, status: "active" })
    })
      .then(r => r.json())
      .then(j => setJobs([...jobs, j]));
    setTitle("");
  }

  function toggleStatus(id) {
    setJobs(jobs.map(j =>
      j.id === id ? { ...j, status: j.status === "active" ? "archived" : "active" } : j
    ));
  }

  function onDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(jobs);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);
    setJobs(items);
  }

  return (
    <div className="container">
      <h2>Jobs</h2>
      <div>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Job title"
        />
        <button onClick={addJob}>Add</button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="jobs">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {jobs.map((j, index) => (
                <Draggable key={j.id} draggableId={j.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span>{j.title} ({j.status})</span>
                      <button onClick={() => toggleStatus(j.id)}>
                        {j.status === "active" ? "Archive" : "Unarchive"}
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
