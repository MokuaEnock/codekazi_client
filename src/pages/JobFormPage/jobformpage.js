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
          <span></span>
        </div>
      </section>
    </main>
  );
}
