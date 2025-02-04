import React from 'react'; // Импортируем React для использования JSX

// Компонент фильтрации клиентов
const FilterComponent = ({ filters, setFilters, trainers, sports, months, years, days }) => {
  // Функция для обработки изменения фильтра
  const handleFilterChange = (e) => {
    const { name, value } = e.target; // Получаем имя и значение измененного поля
    setFilters({
      ...filters, // Копируем текущие фильтры
      [name]: value // Обновляем фильтр по имени
    });
  };

  return (
    <div className="filters"> {/* Обертка для всех элементов фильтра */}
      {/* Поле для поиска по имени клиента */}
      <input
        className="filters__input filters__input--text"
        type="text"
        name="name"
        placeholder="Поиск по имени"
        value={filters.name} // Значение поля "name" из фильтров
        onChange={handleFilterChange} // Обработчик изменения поля
      />

      {/* Выпадающий список для выбора тренера */}
      <select
        className="filters__input filters__input--select"
        name="trainer"
        value={filters.trainer} // Значение поля "trainer" из фильтров
        onChange={handleFilterChange} // Обработчик изменения поля
      >
        <option value="">Тренера</option> {/* Опция по умолчанию */}
        {trainers.map((trainer) => ( // Маппируем список тренеров на опции
          <option key={trainer} value={trainer}>
            {trainer}
          </option>
        ))}
      </select>

      {/* Выпадающий список для выбора спортивной категории */}
      <select
        className="filters__input filters__input--select"
        name="sport_category"
        value={filters.sport_category} // Значение поля "sport_category" из фильтров
        onChange={handleFilterChange} // Обработчик изменения поля
      >
        <option value="">Спорт</option> {/* Опция по умолчанию */}
        {sports.map((sport) => ( // Маппируем список видов спорта на опции
          <option key={sport} value={sport}>
            {sport}
          </option>
        ))}
      </select>

      {/* Выпадающий список для выбора дня */}
      <select
        className="filters__input filters__input--select"
        name="day"
        value={filters.day} // Значение поля "day" из фильтров
        onChange={handleFilterChange} // Обработчик изменения поля
      >
        <option value="">День</option> {/* Опция по умолчанию */}
        {days.map((day) => ( // Маппируем список дней на опции
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      {/* Выпадающий список для выбора месяца */}
      <select
        className="filters__input filters__input--select"
        name="month"
        value={filters.month} // Значение поля "month" из фильтров
        onChange={handleFilterChange} // Обработчик изменения поля
      >
        <option value="">Месяц</option> {/* Опция по умолчанию */}
        {months.map((month) => ( // Маппируем список месяцев на опции
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      {/* Выпадающий список для выбора года */}
      <select
        className="filters__input filters__input--select"
        name="year"
        value={filters.year} // Значение поля "year" из фильтров
        onChange={handleFilterChange} // Обработчик изменения поля
      >
        <option value="">Год</option> {/* Опция по умолчанию */}
        {years.map((year) => ( // Маппируем список лет на опции
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterComponent;