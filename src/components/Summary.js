import React from 'react';

const Summary = ({ transactions }) => {
  const income = transactions
    ? transactions
        .filter(t => t.amount > 0)
        .reduce((acc, t) => acc + t.amount, 0)
    : 0;

  const expenses = transactions
    ? transactions
        .filter(t => t.amount < 0)
        .reduce((acc, t) => acc + t.amount, 0)
    : 0;

  const balance = income + expenses;

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Income: {income}</p>
      <p>Total Expenses: {expenses}</p>
      <p>Balance: {balance}</p>
    </div>
  );
};

export default Summary;
