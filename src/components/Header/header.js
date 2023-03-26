import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Jobs</Link>

        <span>
          <Link>Home</Link>
          <Link>Jobs</Link>
          <Link>Post</Link>
        </span>
        <Link></Link>
      </nav>
    </header>
  );
}
