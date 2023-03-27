import "./jobformpage.css";
import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";

export default function Jobs() {
  let [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(data);

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

        <section id="jobs-listing"></section>
      </section>
    </main>
  );
}
