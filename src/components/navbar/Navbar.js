import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTicketAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span className='logo'>Etickets</span>

        <div className='headerList'>
          <div className='headerListItem'>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </NavLink>
          </div>

          <div className='headerListItem'>
            <NavLink to="/tickets">
              <FontAwesomeIcon icon={faTicketAlt} />
              <span>Tickets</span>
            </NavLink>
          </div>

          <div className='headerListItem'>
            <NavLink to="/info">
              <FontAwesomeIcon icon={faInfoCircle} />
              <span>Info</span>
            </NavLink>
          </div>
        </div>

        <div className='navItems'>
          <NavLink to='/register'>
            <button className='navButton'>Register</button>
          </NavLink>
          <NavLink to="/login">
            <button className='navButton'>Login</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;








