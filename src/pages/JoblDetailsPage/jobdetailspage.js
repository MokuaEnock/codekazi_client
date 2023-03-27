import "./jobdetailspage.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  let [id] = useParams();
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
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>{job.company}</p>
      <p>{job.education_level}</p>
      <p>{job.location}</p>
      <p>{job.employment_type}</p>
    </main>
  );
}
