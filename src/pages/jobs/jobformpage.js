import "./jobformpage.css";

import { BiSearch } from "react-icons/bi";

export default function Jobs() {
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
      </section>
    </main>
  );
}
