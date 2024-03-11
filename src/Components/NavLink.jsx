import { Link } from "react-router-dom";

export default function NavLink({ linkDestination, linkName }) {
  return (
    <>
      <li>
        <Link to={`${linkDestination}`}>
          <button className="navlink-button">{linkName}</button>
        </Link>
      </li>
    </>
  );
}
