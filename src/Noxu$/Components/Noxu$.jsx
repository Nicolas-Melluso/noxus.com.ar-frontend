// Noxu$.jsx
import { useState } from "react";
import TransactionForm from "./TransactionsFrom";
import TransactionList from "./TransactionsList";
import Stats from "./Stats";
import "../Css/Noxu$.css"

const Noxu$ = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div className="finance-page">
      <h1>Control de Finanzas</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
      <Stats transactions={transactions} />
    </div>
  );
};

export default Noxu$;