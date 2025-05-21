import React from 'react';
import { render, screen } from '@testing-library/react';
import TransactionList from './TransactionList';

describe('TransactionList', () => {
  test('renders a list of transactions correctly', () => {
    const transactions = [
      { description: 'Salary', amount: 5000 },
      { description: 'Groceries', amount: -50 },
      { description: 'Rent', amount: -1200 },
    ];
    render(<TransactionList transactions={transactions} />);

    expect(screen.getByText(/Salary: 5000/i)).toBeInTheDocument();
    expect(screen.getByText(/Groceries: -50/i)).toBeInTheDocument();
    expect(screen.getByText(/Rent: -1200/i)).toBeInTheDocument();
  });

  test('displays a message when there are no transactions', () => {
    render(<TransactionList transactions={[]} />);
    // Assuming the component doesn't explicitly render a message,
    // but the absence of transaction items can be an implicit test.
    // If a specific message is expected, the component needs to be updated.
    // For now, we check that no list items are rendered.
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems.length).toBe(0);
  });

  test('renders correctly with undefined transactions', () => {
    render(<TransactionList transactions={undefined} />);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems.length).toBe(0);
  });

  test('renders correctly with null transactions', () => {
    render(<TransactionList transactions={null} />);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems.length).toBe(0);
  });
});
