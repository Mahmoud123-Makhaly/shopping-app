import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = ({ cartLength }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container d-flex">
        <Link href="/" className="navbar-brand m-auto m-lg-start">
          <Image src="/logo.png" width={150} height={40} className="d-inline-block align-top" alt="Logo" />
        </Link>

        <div className="collapse navbar-collapse d-flex flex-row flex-column flex-lg-row justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav ms-lg-auto">
    
            <li className="nav-item">
              <Link href="/cart" className="btn btn-primary">Cart {cartLength}</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
