const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      {transactions.map((t) => (
        <div key={t.id} className={`transaction ${t.type}`}>
          <div>{t.date}</div>
          <div>${t.amount.toFixed(2)}</div>
          <div>{t.description}</div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;