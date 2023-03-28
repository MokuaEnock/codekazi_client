import "./update.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Update() {
  let { id } = useParams();
  const [job, setJob] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://codekazi-production.up.railway.app/jobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedJob = {
      title,
      description,
      company,
      location,
      salary_range: salaryRange,
      employment_type: employmentType,
      education_level: educationLevel,
      years_of_experience: yearsOfExperience,
    };

    fetch(`https://codekazi-production.up.railway.app/jobs/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(`/jobs/${id}`);
      })
      .catch((error) => console.error(error));
  };

  return (
    <main id="update-job">
      <h3>Update Job</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Job title</p>
          <input
            type="text"
            value={title || job.title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>

        <label>
          <p>Job description</p>
          <textarea
            value={description || job.description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>

        <label>
          <p>Hiring company</p>
          <input
            type="text"
            value={company || job.company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </label>

        <label>
          <p>Job location</p>
          <input
            type="text"
            value={location || job.location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>

        <label>
          <p>Salary range</p>
          <input
            type="text"
            value={salaryRange || job.salary_range}
            onChange={(event) => setSalaryRange(event.target.value)}
          />
        </label>

        <label>
          <p>Eployment type</p>
          <input
            type="text"
            value={employmentType || job.employment_type}
            onChange={(event) => setEmploymentType(event.target.value)}
          />
        </label>

        <label>
          <p>Education level</p>
          <input
            type="text"
            value={educationLevel || job.education_level}
            onChange={(event) => setEducationLevel(event.target.value)}
          />
        </label>

        <label>
          <p>Years of experience</p>
          <input
            type="text"
            value={yearsOfExperience || job.years_of_experience}
            onChange={(event) => setYearsOfExperience(event.target.value)}
          />
        </label>

        <button type="submit">Update Job</button>
      </form>
    </main>
  );
}
