import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { fetchTotalTrainer } from "../api/API";

const getCurrentMonthAndYear = () => {
  const date = new Date();
  const months = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", 
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
  return { month: months[date.getMonth()], year: date.getFullYear().toString() };
};

const sports = ["Кулату", "Бокс", "Борьба", "Тхэквондо", "Самбо", "Греко-римская борьба", "Кроссфит", "Дзюдо", "Кикбокс"];

const Sport = () => {
  const [filters, setFilters] = useState(getCurrentMonthAndYear());
  const [incomeData, setIncomeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadIncome = async () => {
      setLoading(true);
      try {
        const incomes = await Promise.all(
          sports.map(async (sport) => {
            const income = await fetchTotalTrainer({
              sport_category: sport,
              month: filters.month,
              year: filters.year
            });
            return { sport, income };
          })
        );
        setIncomeData(incomes);
      } catch (err) {
        setError("Ошибка загрузки данных.");
      } finally {
        setLoading(false);
      }
    };
    
    loadIncome();
  }, [filters]);

  if (error) return <p>{error}</p>;

  return (
    <div className="sport-income">
      <h1 className="sport-income__title">Доход по категориям спорта за {filters.month} {filters.year}</h1>
      <select
        value={filters.month}
        onChange={(e) => setFilters({ ...filters, month: e.target.value })}
      >
        {["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
          "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"].map((m) => (
          <option key={m} value={m}>{m}</option>
        ))}
      </select>
      <div className="sport-income__chart">
        {loading ? <p>Загрузка...</p> : (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={incomeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="sport" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="income" fill="#8884d8" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Sport;