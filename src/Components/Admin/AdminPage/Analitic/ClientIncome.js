// import React, { useState, useEffect } from "react";
// import { fetchTotalIncome } from "../api/API"; // Импортируем API-функцию

// const ClientIncome = () => {
//   const [filters, setFilters] = useState({
//     trainer: "",
//     sport_category: "",
//     day: "",
//     month: "",
//     year: "",
//     payment: "",
//   });
//   const [totalIncome, setTotalIncome] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const trainers = [ // Массив возможных тренеров для фильтрации
//     "Машрапов Тилек", "Мойдунов Мирлан", "Асанбаев Эрлан", "Анарбаев Акжол",
//     "Минбаев Сулайман", "Калмамат Уулу Акай", "Маматжанов Марлен", "Лукас Крабб",
//     "Тажибаев Азамат", "Азизбек Уулу Баяман", "Тургунов Ислам", "Медербек Уулу Сафармурат",
//     "Пазылов Кутман", "Жумалы Уулу Ариет",
//   ];
//   const sports = ["Кулату", "Бокс", "Борьба", "Тхэквондо", "Самбо", "Греко-римская борьба", "Кроссфит", "Дзюдо", "Кикбокс"];
//   const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//   const years = Array.from({ length: 1 }, (_, i) => 2025 - i);
//   const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
//   const paymentStatuses = ["Оплачено", "Не оплачено"];

//   useEffect(() => {
//     const loadIncome = async () => {
//       const areFiltersEmpty = Object.values(filters).every((value) => value === "");
//       if (areFiltersEmpty) {
//         setTotalIncome(0);
//         return;
//       }

//       setLoading(true);
//       try {
//         const income = await fetchTotalIncome(filters);
//         setTotalIncome(income);
//       } catch (err) {
//         setError("Ошибка загрузки данных.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadIncome();
//   }, [filters]);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   if (error) return <p>{error}</p>;

//   return (
//     <div className="total-income">
//       <h1>Общий доход</h1>

//       {/* Фильтры */}
//       <div className="total-income__filters">
//         <select name="trainer" value={filters.trainer} onChange={handleFilterChange}>
//           <option value="">Тренера</option>
//           {trainers.map((trainer) => (
//             <option key={trainer} value={trainer}>{trainer}</option>
//           ))}
//         </select>

//         <select name="sport_category" value={filters.sport_category} onChange={handleFilterChange}>
//           <option value="">Спорт</option>
//           {sports.map((sport) => (
//             <option key={sport} value={sport}>{sport}</option>
//           ))}
//         </select>

//         <select name="day" value={filters.day} onChange={handleFilterChange}>
//           <option value="">День</option>
//           {days.map((day) => (
//             <option key={day} value={day}>{day}</option>
//           ))}
//         </select>

//         <select name="month" value={filters.month} onChange={handleFilterChange}>
//           <option value="">Месяц</option>
//           {months.map((month) => (
//             <option key={month} value={month}>{month}</option>
//           ))}
//         </select>

//         <select name="year" value={filters.year} onChange={handleFilterChange}>
//           <option value="">Год</option>
//           {years.map((year) => (
//             <option key={year} value={year}>{year}</option>
//           ))}
//         </select>

//         <select name="payment" value={filters.payment} onChange={handleFilterChange}>
//           <option value="">Оплата</option>
//           {paymentStatuses.map((status) => (
//             <option key={status} value={status}>{status}</option>
//           ))}
//         </select>
//       </div>

//       {/* Общий доход */}
//       <div className="income-result">
//         <h2>{loading ? "Загрузка..." : `${totalIncome} сом`}</h2>
//       </div>
//     </div>
//   );
// };

// export default ClientIncome;

import React, { useState, useEffect } from "react";
import { fetchTotalIncome } from "../api/API"; // Импортируем API-функцию

const ClientIncome = () => {
  const [filters, setFilters] = useState({
    trainer: "",
    sport_category: "",
    day: "",
    month: "",
    year: "",
    payment: "",
  });
  const [totalIncome, setTotalIncome] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const trainers = [
    "Машрапов Тилек", "Мойдунов Мирлан", "Асанбаев Эрлан", "Анарбаев Акжол",
    "Минбаев Сулайман", "Калмамат Уулу Акай", "Маматжанов Марлен", "Лукас Крабб",
    "Тажибаев Азамат", "Азизбек Уулу Баяман", "Тургунов Ислам", "Медербек Уулу Сафармурат",
    "Пазылов Кутман", "Жумалы Уулу Ариет",
  ];
  const sports = ["Кулату", "Бокс", "Борьба", "Тхэквондо", "Самбо", "Греко-римская борьба", "Кроссфит", "Дзюдо", "Кикбокс"];
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const years = Array.from({ length: 1 }, (_, i) => 2025 - i);
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const paymentStatuses = ["Оплачено", "Не оплачено"];

  useEffect(() => {
    const loadIncome = async () => {
      const areFiltersEmpty = Object.values(filters).every((value) => value === "");
      if (areFiltersEmpty) {
        setTotalIncome(0);
        return;
      }

      setLoading(true);
      try {
        const income = await fetchTotalIncome(filters);
        setTotalIncome(income);
      } catch (err) {
        setError("Ошибка загрузки данных.");
      } finally {
        setLoading(false);
      }
    };

    loadIncome();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const calculatedIncome = (totalIncome * 0.6).toFixed(2); // 60% от общего дохода

  if (error) return <p>{error}</p>;

  return (
    <div className="total-income">
      <h1>Общий доход</h1>

      {/* Фильтры */}
      <div className="total-income__filters">
        <select name="trainer" value={filters.trainer} onChange={handleFilterChange}>
          <option value="">Тренера</option>
          {trainers.map((trainer) => (
            <option key={trainer} value={trainer}>{trainer}</option>
          ))}
        </select>

        <select name="sport_category" value={filters.sport_category} onChange={handleFilterChange}>
          <option value="">Спорт</option>
          {sports.map((sport) => (
            <option key={sport} value={sport}>{sport}</option>
          ))}
        </select>

        <select name="day" value={filters.day} onChange={handleFilterChange}>
          <option value="">День</option>
          {days.map((day) => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>

        <select name="month" value={filters.month} onChange={handleFilterChange}>
          <option value="">Месяц</option>
          {months.map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>

        <select name="year" value={filters.year} onChange={handleFilterChange}>
          <option value="">Год</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <select name="payment" value={filters.payment} onChange={handleFilterChange}>
          <option value="">Оплата</option>
          {paymentStatuses.map((status) => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
      </div>

      {/* Общий доход */}
      <div className="income-result">
        <h2>{loading ? "Загрузка..." : `${totalIncome} сом`}</h2>
        <h3>60%: {loading ? "Загрузка..." : `${calculatedIncome} сом`}</h3>
      </div>
    </div>
  );
};

export default ClientIncome;
