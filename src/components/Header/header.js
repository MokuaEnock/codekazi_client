import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Jobs</Link>

        <span>
          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/post">Post</Link>
        </span>
        <Link></Link>
      </nav>
    </header>
  );
}
