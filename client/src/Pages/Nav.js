import { Link } from 'react-router-dom';
function Nav() {
  return (
    <nav>
      <img src="/images/titans.jpg" alt="" class="image" />
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Nav;