import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";
import { useState, useEffect } from "react";
import "./style.css"

const FloatingChart = ({ transactions }) => {
  const [monthlyData, setMonthlyData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  // Agrupa transacciones por mes
  useEffect(() => {
    if (!transactions.length) return;

    const grouped = transactions.reduce((acc, t) => {
      const month = new Date(t.date).toLocaleString('default', { month: 'short' });
      acc[month] = acc[month] || { month, income: 0, expense: 0 };
      acc[month][t.type] += t.amount;
      return acc;
    }, {});

    setMonthlyData(Object.values(grouped));
  }, [transactions]);

  // Agrupa por categoría (si existe el campo)
  useEffect(() => {
    if (!transactions.length) return;

    const grouped = transactions.reduce((acc, t) => {
      const category = t.category || "General";
      acc[category] = acc[category] || { category, total: 0 };
      acc[category].total += t.amount;
      return acc;
    }, {});

    setCategoryData(Object.values(grouped));
  }, [transactions]);

  return (
    <div className="floating-chart">
      <h3 className="chart-title">Estadísticas</h3>
      <div className="chart-container">
        {/* Gráfico de barras mensual */}
        <BarChart width={300} height={200} data={monthlyData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="income" fill="#4CAF50" name="Ingresos" />
          <Bar dataKey="expense" fill="#F44336" name="Gastos" />
        </BarChart>

        {/* Gráfico de torta por categoría */}
        <PieChart width={250} height={200}>
          <Pie
            data={categoryData}
            dataKey="total"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={60}
          >
            <Cell fill="#8884d8" />
            <Cell fill="#82ca9d" />
            <Cell fill="#ffc658" />
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default FloatingChart;