import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Jobs</Link>
      <Link to="/candidates">Candidates</Link>
      <Link to="/assessments">Assessments</Link>
    </nav>
  );
}
