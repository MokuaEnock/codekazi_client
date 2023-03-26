import "./jobcard.css";
import { FaBuilding } from "react-icons/fa";

export default function JobCard() {
  return (
    <div className="card">
      <div className="card-head">
        <FaBuilding id="job-icon" />
        <p>Transtal Ltd.</p>
      </div>
      <h4>Software Engineer</h4>
      <p>
        We are looking for a passionate sodtware developer who is ambitious to
        develop scalable systems.
      </p>
      <span>
        <p>Mid Level</p>
        <p>Mid Level</p>
        <p>Mid Level</p>
      </span>
      <div className="card-buttons">
        <button className="button-apply">Apply</button>
        <button className="button-save">Save</button>
      </div>
    </div>
  );
}
