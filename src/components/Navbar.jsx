import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Profile</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/work">Work</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/interests">Interests</Link></li>
      <li><Link to="/education">Education</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
