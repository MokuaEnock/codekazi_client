import "./homepage.css";
import { BiSearch } from "react-icons/bi";
import JobCard from "../../components/JobCard/jobcard";

export default function HomePage() {
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
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </section>
      <section id="home-page-3">2</section>
    </main>
  );
}
