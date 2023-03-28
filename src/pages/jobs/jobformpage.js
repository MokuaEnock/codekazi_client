import "./jobformpage.css";
import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import Pagination from "../../components/pagination/pagination";
import JobCard from "../../components/JobCard/jobcard";

export default function Jobs() {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(8);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://codekazi-production.up.railway.app/jobs")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(data);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = data?.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main id="job-page">
      <section id="job-page-1">
        <form id="search-jobs">
          <input
            type="text"
            placeholder="Search for jobs, locations and description."
          />
          <button type="submit">
            <BiSearch />
          </button>
        </form>
        <div id="categories">
          <span>Software Engineering</span>
          <span>Software Engineering</span>
          <span>Software Engineering</span>
          <span>Software Engineering</span>
          <span>Software Engineering</span>
        </div>
      </section>

      <section id="job-page-2">
        <span>
          <h2>Todays jobs</h2>
          <p>Discover top paying and latest jobs</p>
        </span>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <section id="jobs-listing">
            {currentJobs?.map((job) => (
              <JobCard
                key={job.id}
                id={job.id}
                title={job.title}
                description={job.description}
                company={job.company}
                salary={job.education_level}
                date={job.location}
                type={job.employment_type}
              />
            ))}
          </section>
        )}

        <Pagination
          jobsPerPage={jobsPerPage}
          totalJobs={data?.length}
          paginate={paginate}
        />
      </section>
    </main>
  );
}
