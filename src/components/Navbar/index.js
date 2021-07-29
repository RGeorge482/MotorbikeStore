import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <div>
      <Nav>
        <NavLink to='/'>MegaMotors</NavLink>
        <NavIcon onClick={toggle}>
          <p>Store</p>
          <Bars />
        </NavIcon>

      </Nav>

    </div>
  )
}

export default Navbar;
