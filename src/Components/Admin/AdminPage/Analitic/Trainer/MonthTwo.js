import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { fetchTotalTrainer } from "../../api/API";

const getPreviousMonthAndYear = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
  return { month: months[date.getMonth()], year: date.getFullYear().toString() };
};

const trainers = [
  "Машрапов Тилек", "Мойдунов Мирлан", "Асанбаев Эрлан", "Анарбаев Акжол",
  "Минбаев Сулайман", "Калмамат Уулу Акай", "Маматжанов Марлен", "Лукас Крабб",
  "Тажибаев Азамат", "Азизбек Уулу Баяман", "Тургунов Ислам", "Медербек Уулу Сафармурат",
  "Пазылов Кутман", "Жумалы Уулу Ариет"
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#ff0000", "#00C49F", "#0088FE"];

const MonthTwo = () => {
  const [filters, setFilters] = useState(getPreviousMonthAndYear());
  const [totalIncomes, setTotalIncomes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadIncome = async () => {
      setLoading(true);
      try {
        const incomes = await Promise.all(
          trainers.map(async (trainer) => {
            const income = await fetchTotalTrainer({
              trainer,
              month: filters.month,
              year: filters.year
            });
            return { name: trainer, value: income };
          })
        );
        setTotalIncomes(incomes);
      } catch (err) {
        setError("Ошибка загрузки данных.");
      } finally {
        setLoading(false);
      }
    };

    loadIncome();
  }, [filters]);

  // Вычисляем общую сумму доходов
  const totalIncome = totalIncomes.reduce((acc, curr) => acc + curr.value, 0);

  // Если ошибка, показываем сообщение
  if (error) return <p>{error}</p>;

  // Рассчитываем проценты для каждого тренера
  const dataWithPercentages = totalIncomes.map((entry) => {
    const percentage = totalIncome > 0 ? ((entry.value / totalIncome) * 100).toFixed(2) : 0;
    return { ...entry, percentage };
  });

  return (
    <div className="trainer-income">
      <h1 className="trainer-income__title" style={{ fontSize: "18px" }}>
        Доход тренеров за {filters.month} {filters.year}
      </h1>
      <select
        value={filters.month}
        onChange={(e) => setFilters({ ...filters, month: e.target.value })}
        style={{ fontSize: "14px", padding: "4px" }}
      >
        {[
          "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
          "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ].map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <PieChart width={300} height={300}>
          <Pie
            data={dataWithPercentages}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={110}
            fill="#8884d8"
            dataKey="value"
          >
            {dataWithPercentages.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            content={({ payload }) => {
              if (payload && payload.length) {
                const { name, value, percentage } = payload[0].payload;
                return (
                  <div style={{
                    fontSize: "12px",
                    color: 'black',
                    fontWeight: 'bold'
                  }}>
                    <strong>{name}</strong>
                    <p>Доход: {value}</p>
                    <p>Процент: {percentage}%</p>
                  </div>
                );
              }
              return null;
            }}
            contentStyle={{ fontSize: "12px" }}
          />
        </PieChart>
      )}
    </div>
  );
};

export default MonthTwo;
