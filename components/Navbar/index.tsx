import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <ul>
        <Link href="/houses">
            <li>Houses</li>
        </Link>
        <Link href="/persons">
            <li>Persons</li>
        </Link>
        <Link href="/quotes">
            <li>Quotes</li>
        </Link>
    </ul>
  )
}
