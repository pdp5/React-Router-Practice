import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="home" to="/">
        Home
      </Link>
      <Link className="blue-color" to="/blue">
        Blue
      </Link>
      <Link className="green-color" to="/green">
        Green
      </Link>
      <Link className="red-color" to="/red">
        Red
      </Link>
    </nav>
  );
};

export default Navbar;
