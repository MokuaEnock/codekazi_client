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

  // const handleCancel = () => {
  //   navigate(`/jobs/${id}`);
  // };

  return (
    <main id="update-job">
      <div>
        <h1>Update Job</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title || job.title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={description || job.description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <br />
          <label>
            Company:
            <input
              type="text"
              value={company || job.company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </label>
          <br />
          <label>
            Location:
            <input
              type="text"
              value={location || job.location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </label>
          <br />
          <label>
            Salary Range:
            <input
              type="text"
              value={salaryRange || job.salary_range}
              onChange={(event) => setSalaryRange(event.target.value)}
            />
          </label>
          <br />
          <label>
            Employment Type:
            <input
              type="text"
              value={employmentType || job.employment_type}
              onChange={(event) => setEmploymentType(event.target.value)}
            />
          </label>
          <br />
          <label>
            Education Level:
            <input
              type="text"
              value={educationLevel || job.education_level}
              onChange={(event) => setEducationLevel(event.target.value)}
            />
          </label>
          <br />
          <label>
            Years of Experience:
            <input
              type="text"
              value={yearsOfExperience || job.years_of_experience}
              onChange={(event) => setYearsOfExperience(event.target.value)}
            />
          </label>
          <br />
          {/* <label>
            Category:
            <select
              value={category || job.category.name}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option disabled selected>
                Select a category
              </option>
              <option value="1">Accounting</option>
              <option value="2">Marketing</option>
              <option value="3">Engineering</option>
              <option value="4">Sales</option>
              <option value="5">IT Support</option>
            </select>
          </label>
          <br />
          <label>
            Active:
            <input
              type="checkbox"
              checked={isActive || job.is_active}
              onChange={(event) => setIsActive(event.target.checked)}
            />
          </label>
          <br />
          <label>
            Expires At:
            <input
              type="datetime-local"
              value={expiresAt || job.expires_at}
              onChange={(event) => setExpiresAt(event.target.value)}
            />
          </label> */}
          <br />
          <button type="submit">Update Job</button>
        </form>
      </div>
    </main>
  );
}
