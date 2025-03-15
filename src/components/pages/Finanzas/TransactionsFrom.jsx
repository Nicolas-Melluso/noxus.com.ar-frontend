import { useState } from "react";

const TransactionForm = ({ addTransaction }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("expense"); // "income" o "expense"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description || !date) return;

    addTransaction({
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      description,
      date,
    });

    // Resetear formulario
    setAmount("");
    setDescription("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
       <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monto"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="expense">Gasto</option>
        <option value="income">Entra</option>
      </select>
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default TransactionForm;