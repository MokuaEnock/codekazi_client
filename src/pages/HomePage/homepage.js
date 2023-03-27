import "./homepage.css";
import React, { useState, useEffect } from "react";

import { BiSearch } from "react-icons/bi";
import JobCard from "../../components/JobCard/jobcard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function HomePage() {
  const [latestJobs, setLatestJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs/latest")
      .then((res) => res.json())
      .then((data) => {
        setLatestJobs(data).catch((error) => console.error(error));
      });
  }, []);

  console.log(latestJobs);

  return (
    <main id="home-page">
      <section id="home-page-1">
        <h3>Welcome to jobless corner, where the idle meet.</h3>
        <p>Find jobs in any field you desire.</p>
        <form>
          <input type="text" placeholder="Search job title or keyword" />
          <button type="submit">
            <BiSearch id="icon" />
          </button>
        </form>
      </section>

      <section id="home-page-2">
        <h4>Recently updated</h4>
        <div id="home-page-2-cont">
          {latestJobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              description={job.description}
              company={job.company}
              salary={job.education_level}
              date={job.location}
              type={job.employment_type}
            />
          ))}
        </div>
        <div id="home-page-2-foot">
          <Link to="/link">
            View more <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
