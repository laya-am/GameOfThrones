import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './index';
import '@testing-library/jest-dom';

// Mock Next.js Link

jest.mock('next/link', () => {
  const MockLink = ({ children, href }) => {
    return <a href={href}>{children}</a>;
  };

  MockLink.displayName = 'NextLink'; // Provide a displayName

  return MockLink;
});

describe('Navbar Component', () => {
  test('renders Navbar with links to Houses, Persons, and Quotes', () => {
    render(<Navbar />);

    const housesLink = screen.getByRole('link', { name: /Houses/i });
    expect(housesLink).toBeInTheDocument();
    expect(housesLink).toHaveAttribute('href', '/houses');

    const personsLink = screen.getByRole('link', { name: /Persons/i });
    expect(personsLink).toBeInTheDocument();
    expect(personsLink).toHaveAttribute('href', '/persons');

    const quotesLink = screen.getByRole('link', { name: /Quotes/i });
    expect(quotesLink).toBeInTheDocument();
    expect(quotesLink).toHaveAttribute('href', '/quotes');
  });
});