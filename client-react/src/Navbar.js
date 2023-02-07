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
// CONDITIONAL RENDER INSIDE THE NAV SO THAT THEY CANT CLICK THINGS WITHOUT AN ID
// WE NEED TO PUT ID INTO SHUPPING AND PACKING AND GET THE ID FROM SOMEWHERE THAT WE DESIGN FROM STATE -> BECAUSE THIS IS WHERE WE STORE INFO FROM DATABASE SO THIS IS WHERE IS WILL BE ORIGINALLY LOCATED, MOVE STATE INTO APP JS SO IT HAS ACCESS TO HOME AND NAVBAR BECAUSE NO WAT TI PUSH UP THE TREE ONLY CLIMB DOWN.

// REACT IS HANDICAPPED


export default function Navbar() {
  const id = true
  return (<nav className="nav">
    <Link to="/" className="site-title">Farming App</Link>
    <ul>
          <CustomLink to="/planting">Planting</CustomLink>
        {id && <>
        <CustomLink to="/harvest">Harvest</CustomLink>  
        <CustomLink to="/packing">Packing</CustomLink>
        <CustomLink to="/shipping">Shipping</CustomLink>
        </>}
        <CustomLink to="/login">Login</CustomLink>

    </ul>
  </nav>
  );
}

