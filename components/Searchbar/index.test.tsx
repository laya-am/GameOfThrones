import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Searchbar from './index';

describe('Searchbar Component', () => {
  const testData = [
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { title: 'Some Title' }, // Object without a name property
    null, // Null entry
    'Not an object' // Non-object entry
  ];

  test('renders search input and button', () => {
    const mockSetData = jest.fn();

    render(<Searchbar data={testData} setData={mockSetData} />);

    const inputElement =  screen.getByTestId('searchInput');
    const buttonElement = screen.getByRole('button', { name: /search/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('filters data based on search query', () => {
    const mockSetData = jest.fn();

    render(<Searchbar data={testData} setData={mockSetData} />);

    const inputElement =  screen.getByTestId('searchInput');
    const buttonElement = screen.getByRole('button', { name: "search" });

    // Mock user input and submit the form
    fireEvent.change(inputElement, { target: { value: 'john' } });
    fireEvent.click(buttonElement);

    // Expect the function to have been called with the filtered data
    expect(mockSetData).toHaveBeenCalledWith([{ name: 'John Doe' }]);
  });

});
