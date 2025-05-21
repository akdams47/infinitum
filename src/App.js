import React, { useState } from 'react';
import './App.css';
import './Finance.css'; // Import custom styles
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import Summary from './components/Summary';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Finance Tracker</h1>
      </header>
      <main>
        <Summary transactions={transactions} />
        <TransactionForm onAddTransaction={addTransaction} />
        <TransactionList transactions={transactions} />
      </main>
    </div>
  );
}

export default App;
