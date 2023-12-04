import Link from 'next/link';
import React from 'react';
import styles from '../../src/styles/Navbar.module.css';

export default function Navbar() {
  return (
        <ul className={styles.navbar}>
          <li>
            <Link href="/houses" className={styles.navLink}>
              Houses
            </Link>
          </li>
          <li>
            <Link href="/persons" className={styles.navLink}>
              Persons
            </Link>
          </li>
          <li>
            <Link href="/quotes" className={styles.navLink}>
              Quotes
            </Link>
          </li>
        </ul>
  );
}
