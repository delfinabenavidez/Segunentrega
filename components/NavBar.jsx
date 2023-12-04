import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/category/cart">Cart</Link>
      <Link to="/category/catalog">Catalog</Link>
    </nav>
  );
}

export default NavBar;
