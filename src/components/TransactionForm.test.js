import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TransactionForm from './TransactionForm';

describe('TransactionForm', () => {
  test('input fields update correctly', () => {
    render(<TransactionForm onAddTransaction={() => {}} />);

    const descriptionInput = screen.getByLabelText(/description/i);
    const amountInput = screen.getByLabelText(/amount/i);

    fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
    fireEvent.change(amountInput, { target: { value: '100' } });

    expect(descriptionInput.value).toBe('Test Description');
    expect(amountInput.value).toBe('100');
  });

  test('addTransaction function is called with correct data on submit', () => {
    const mockAddTransaction = jest.fn();
    render(<TransactionForm onAddTransaction={mockAddTransaction} />);

    const descriptionInput = screen.getByLabelText(/description/i);
    const amountInput = screen.getByLabelText(/amount/i);
    const form = screen.getByRole('button', { name: /add transaction/i });

    fireEvent.change(descriptionInput, { target: { value: 'Salary' } });
    fireEvent.change(amountInput, { target: { value: '2000' } });
    fireEvent.click(form);

    expect(mockAddTransaction).toHaveBeenCalledWith({
      description: 'Salary',
      amount: 2000,
    });
  });

  test('form does not submit if description is empty', () => {
    const mockAddTransaction = jest.fn();
    render(<TransactionForm onAddTransaction={mockAddTransaction} />);

    const amountInput = screen.getByLabelText(/amount/i);
    const form = screen.getByRole('button', { name: /add transaction/i });

    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.click(form);

    expect(mockAddTransaction).not.toHaveBeenCalled();
  });

  test('form does not submit if amount is empty', () => {
    const mockAddTransaction = jest.fn();
    render(<TransactionForm onAddTransaction={mockAddTransaction} />);

    const descriptionInput = screen.getByLabelText(/description/i);
    const form = screen.getByRole('button', { name: /add transaction/i });

    fireEvent.change(descriptionInput, { target: { value: 'Bonus' } });
    fireEvent.click(form);

    expect(mockAddTransaction).not.toHaveBeenCalled();
  });

  test('input fields are cleared after successful submission', () => {
    const mockAddTransaction = jest.fn();
    render(<TransactionForm onAddTransaction={mockAddTransaction} />);

    const descriptionInput = screen.getByLabelText(/description/i);
    const amountInput = screen.getByLabelText(/amount/i);
    const form = screen.getByRole('button', { name: /add transaction/i });

    fireEvent.change(descriptionInput, { target: { value: 'Test' } });
    fireEvent.change(amountInput, { target: { value: '50' } });
    fireEvent.click(form);

    expect(descriptionInput.value).toBe('');
    expect(amountInput.value).toBe('');
  });
});
