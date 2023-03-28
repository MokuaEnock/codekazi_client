import "./jobdetailspage.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";

export default function Detail() {
  let { id } = useParams();
  let [job, setJob] = useState(null);

  useEffect(() => {
    fetch(`https://codekazi-production.up.railway.app/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!job) {
    return (
      <main id="job-detail">
        <p>Wait for it ...</p>
      </main>
    );
  }
  return (
    <main id="job-detail">
      <section id="job-detail-head">
        <FaBuilding id="icon-b" />
        <span>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </span>

        <div>
          <button>Delete</button>
        </div>
      </section>

      <section id="job-detail-desc">
        <h4>Description</h4>
        <p>{job.description}</p>
      </section>

      <section id="job-detail-desc1">
        <h4>Information</h4>
        <div>
          <span>{job.education_level}</span>
          <span>{job.location}</span>
          <span>{job.employment_type}</span>
          <span>{job.salary_range}</span>
          <span>{job.years_of_experience} years.</span>
        </div>
      </section>
    </main>
  );
}
