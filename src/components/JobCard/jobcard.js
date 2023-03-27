import "./jobcard.css";
import { FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function JobCard({
  id,
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
        <Link className="button-apply" to={`/jobs/${id}/update`}>
          Update
        </Link>
        <Link className="button-save" to={`/jobs/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
}
