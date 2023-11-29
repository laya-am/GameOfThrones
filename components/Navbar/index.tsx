import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className='navbar bg-dark navbar-expand fixed-bottom' data-bs-theme="dark">
      <div className="container-fluid justify-content-center">
        <ul className='navbar-nav d-flex justify-content-center'>
          <li className='nav-item'>
            <Link href="/houses">
              <span className='nav-link'>Houses</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href="/persons">
              <span className='nav-link'>Persons</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href="/quotes">
              <span className='nav-link'>Quotes</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
