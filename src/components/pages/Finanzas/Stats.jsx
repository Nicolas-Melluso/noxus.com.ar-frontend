const Stats = ({ transactions }) => {
    const totalIncome = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
  
    const totalExpense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
  
    return (
      <div className="stats">
        <div>Ingresos totales: ${totalIncome.toFixed(2)}</div>
        <div>Gastos totales: ${totalExpense.toFixed(2)}</div>
        <div>Balance: ${totalIncome - totalExpense}</div>
      </div>
    );
  };
  
  export default Stats;