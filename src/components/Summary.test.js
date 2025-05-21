import React from 'react';
import { render, screen } from '@testing-library/react';
import Summary from './Summary';

describe('Summary', () => {
  test('calculates and displays total income, expenses, and balance correctly', () => {
    const transactions = [
      { description: 'Salary', amount: 5000 },
      { description: 'Rent', amount: -1200 },
      { description: 'Groceries', amount: -150 },
      { description: 'Bonus', amount: 300 },
    ];
    render(<Summary transactions={transactions} />);

    expect(screen.getByText(/Total Income: 5300/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Expenses: -1350/i)).toBeInTheDocument();
    expect(screen.getByText(/Balance: 3950/i)).toBeInTheDocument();
  });

  test('displays correctly with empty transactions', () => {
    render(<Summary transactions={[]} />);
    expect(screen.getByText(/Total Income: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Expenses: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Balance: 0/i)).toBeInTheDocument();
  });

  test('displays correctly with only income transactions', () => {
    const transactions = [
      { description: 'Salary', amount: 5000 },
      { description: 'Freelance', amount: 750 },
    ];
    render(<Summary transactions={transactions} />);
    expect(screen.getByText(/Total Income: 5750/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Expenses: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Balance: 5750/i)).toBeInTheDocument();
  });

  test('displays correctly with only expense transactions', () => {
    const transactions = [
      { description: 'Rent', amount: -1200 },
      { description: 'Utilities', amount: -200 },
    ];
    render(<Summary transactions={transactions} />);
    expect(screen.getByText(/Total Income: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Expenses: -1400/i)).toBeInTheDocument();
    expect(screen.getByText(/Balance: -1400/i)).toBeInTheDocument();
  });

  test('displays correctly with null transactions', () => {
    render(<Summary transactions={null} />);
    expect(screen.getByText(/Total Income: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Expenses: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Balance: 0/i)).toBeInTheDocument();
  });

  test('displays correctly with undefined transactions', () => {
    render(<Summary transactions={undefined} />);
    expect(screen.getByText(/Total Income: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Total Expenses: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/Balance: 0/i)).toBeInTheDocument();
  });
});
