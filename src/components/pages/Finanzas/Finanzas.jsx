// Finanzas.jsx
import { useState, useEffect } from "react";
import TransactionForm from "./TransactionsFrom";
import TransactionList from "./TransactionsList";
import Stats from "./Stats";
import FloatingChart from "./FloatingChart";
import "./style.css"

const Finanzas = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("transactions"));
    if (saved) setTransactions(saved);
  }, []);
  
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div className="finance-page">
      <h1>Control de Finanzas</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
      <Stats transactions={transactions} />

      {/* Contenedor para el gráfico */}
      <div className="floating-chart-container">
        {/*<FloatingChart transactions={transactions} />*/}
      </div>
    </div>
  );
};

export default Finanzas;