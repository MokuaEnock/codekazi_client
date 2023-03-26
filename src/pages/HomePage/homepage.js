import "./homepage.css";
import { BiSearch } from "react-icons/bi";

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

      <section id="home-page-2">1</section>
      <section id="home-page-3">2</section>
    </main>
  );
}
