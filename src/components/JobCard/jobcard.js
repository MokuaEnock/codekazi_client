import "./jobcard.css";
import { FaBuilding } from "react-icons/fa";

export default function JobCard({
  description,
  title,
  company,
  salary,
  date,
  type,
}) {
  return (
    <div className="card">
      <div className="card-head">
        <FaBuilding id="job-icon" />
        <p>{company}</p>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <span>
        <p>{salary}</p>
        <p>{date}</p>
        <p>{type}</p>
      </span>
      <div className="card-buttons">
        <button className="button-apply">Save</button>
        <button className="button-save">View</button>
      </div>
    </div>
  );
}
