import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './index';

describe('Card Component', () => {
  test('renders card for person with person details', () => {
    const person = 'John Snow';
    const slug = 'john-snow';
    const house = 'House Stark';

    render(<Card person={person} slug={slug} house={house} />);

    const linkElement = screen.getByRole('link', { name: new RegExp(person, 'i') });
    const imageElement = screen.getByAltText(`${person}'s image'`);
    const houseElement = screen.getByText(`of ${house}`);

    expect(linkElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(houseElement).toBeInTheDocument();
  });

  test('renders card for house with house details', () => {
    const slug = 'stark';
    const house = 'House Stark';

    render(<Card slug={slug} house={house} />);

    const linkElement = screen.getByRole('link', { name: new RegExp(house, 'i') });
    const imageElement = screen.getByAltText('char');
    const houseElement = screen.getByText(house);

    expect(linkElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(houseElement).toBeInTheDocument();
  });
});
