import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <ul className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </ul>

  );
}



export default function Navbar() {
  const id = true;
  return (<nav className="nav">
    <Link to="/" className="site-title">AgriTrace</Link>
    <ul className="nav-layout">
      <CustomLink to="/login">Login</CustomLink>
      <CustomLink to="/planting">Plant</CustomLink>


    </ul>
  </nav>
  );
}

