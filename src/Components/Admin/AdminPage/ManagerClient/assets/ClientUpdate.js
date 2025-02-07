import React, { useState, useEffect } from 'react';
import { fetchClients, updateClient } from '../../api/API';  // Импортируем функции для работы с клиентами
import ClientFilter from './ClientFilter'; // Импортируем компонент фильтрации

function ClientUpdate() {
  // Состояния компонента
  const [clients, setClients] = useState([]); // Список клиентов
  const [loading, setLoading] = useState(true); // Состояние загрузки данных
  const [error, setError] = useState(null); // Состояние ошибки при загрузке
  const [filters, setFilters] = useState({
    name: '',
    trainer: '',
    sport_category: '',
    day: '',
    month: '',
    year: ''
  }); // Состояние фильтров для поиска клиентов
  const [editId, setEditId] = useState(null); // Идентификатор клиента для редактирования
  const [formData, setFormData] = useState({}); // Данные формы для редактирования
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние модального окна для редактирования

  // Данные для выбора
  const trainers = [ // Массив возможных тренеров для фильтрации
    "Машрапов Тилек", "Мойдунов Мирлан", "Асанбаев Эрлан", "Анарбаев Акжол",
    "Минбаев Сулайман", "Калмамат Уулу Акай", "Маматжанов Марлен", "Лукас Крабб",
    "Тажибаев Азамат", "Азизбек Уулу Баяман", "Тургунов Ислам", "Медербек Уулу Сафармурат",
    "Пазылов Кутман", "Жумалы Уулу Ариет",
  ];
  const sports = ["ММА", "Кулату", "Бокс", "Борьба", "Тхэквондо", "Самбо", "Греко-римская борьба", "Кроссфит", "Дзюдо", "Кикбокс"];
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]; // Массив месяцев
  const years = Array.from({ length: 1 }, (_, i) => 2025 - i); // Массив годов для выбора
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString()); // Массив дней для выбора

  // Загружаем клиентов при первой загрузке компонента
  useEffect(() => {
    const loadClients = async () => {
      try {
        const clientsData = await fetchClients(); // Получаем данные клиентов
        setClients(clientsData); // Сохраняем данные клиентов
      } catch (error) {
        setError('Ошибка загрузки данных клиентов.'); // Обработка ошибки при загрузке
      } finally {
        setLoading(false); // Завершаем загрузку
      }
    };
    loadClients(); // Вызываем функцию загрузки
  }, []); // Пустой массив зависимостей означает, что эффект сработает один раз при монтировании компонента

  // Фильтрация клиентов на основе выбранных фильтров
  const filteredClients = clients.filter((client) => {
    return (
      (!filters.name || client.name.toLowerCase().includes(filters.name.toLowerCase())) && // Фильтрация по имени
      (!filters.trainer || client.trainer === filters.trainer) && // Фильтрация по тренеру
      (!filters.sport_category || client.sport_category === filters.sport_category) && // Фильтрация по спортивной категории
      (!filters.day || client.day === filters.day) && // Фильтрация по дню
      (!filters.month || client.month === filters.month) && // Фильтрация по месяцу
      (!filters.year || client.year === filters.year) // Фильтрация по году
    );
  });

  // Функция для открытия формы редактирования
  const handleEditClick = (client) => {
    setEditId(client.id); // Устанавливаем ID клиента для редактирования
    setFormData(client); // Заполняем форму данными клиента
    setIsModalOpen(true); // Открываем модальное окно для редактирования
  };

  // Обновляем данные формы при изменении полей
  const handleChange = (e) => {
    const { name, value } = e.target; // Извлекаем имя и значение из измененного поля
    setFormData((prevData) => ({
      ...prevData, // Сохраняем старые данные
      [name]: value, // Обновляем данные для конкретного поля
    }));
  };

  // Сохраняем изменения клиента
  const handleSave = async () => {
    try {
      await updateClient(editId, formData); // Отправляем обновленные данные на сервер
      alert("Данные клиента успешно обновлены!"); // Сообщение об успешном обновлении
      setEditId(null); // Сбрасываем ID редактируемого клиента
      setIsModalOpen(false); // Закрываем модальное окно
      setClients((prevClients) =>
        prevClients.map((client) =>
          client.id === editId ? { ...client, ...formData } : client // Обновляем данные в списке клиентов
        )
      );
    } catch (error) {
      alert("Ошибка при обновлении данных клиента."); // Обработка ошибки
    }
  };

  // Отмена редактирования
  const handleCancel = () => {
    setEditId(null); // Сбрасываем ID редактируемого клиента
    setIsModalOpen(false); // Закрываем модальное окно
  };

  return (
    <div className="client-list">
      <ClientFilter
        filters={filters} // Передаем текущие фильтры
        setFilters={setFilters} // Функция для обновления фильтров
        trainers={trainers} // Передаем список тренеров
        sports={sports} // Передаем список спортивных категорий
        months={months} // Передаем список месяцев
        years={years} // Передаем список годов
        days={days} // Передаем список дней
      />

      {/* Обработка состояния загрузки и ошибки */}
      {loading ? (
        <div className="client-list__loading">Загрузка...</div> // Отображаем сообщение при загрузке
      ) : error ? (
        <div className="client-list__error">Ошибка: {error}</div> // Отображаем ошибку, если она есть
      ) : (
        <div className="client-list__cards">
          {/* Отображение списка клиентов с фильтрацией */}
          {filteredClients.slice().reverse().map((client) => (
            <div key={client.id} className="client-card">
              <p className="client-card__name">{client.name}</p> {/* Отображаем имя клиента */}
              <button onClick={() => handleEditClick(client)} className="client-card__details-button ">
                Изменить
              </button> {/* Кнопка для редактирования клиента */}
            </div>
          ))}
        </div>
      )}

      {/* Модальное окно для редактирования клиента */}
      {isModalOpen && (
        <div className="client-update__modal-overlay">
          <div className="client-update__modal">
            <h2 className="client-update__modal-title">Редактирование клиента</h2> {/* Заголовок модального окна */}
            {/* Форма для редактирования данных клиента */}
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
              placeholder="Имя"
              className="client-update__input"
            />
            <input
              type="tel"
              pattern="[0-9]{10}" title="Введите номер телефона длиной из 10 цифр"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              placeholder="Телефон"
              className="client-update__input"
            />
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              placeholder="Email"
              className="client-update__input"
            />
            <input
              type="text"
              name="stage"
              value={formData.stage || ""}
              onChange={handleChange}
              placeholder="Stage"
              className="client-update__input"
            />


            {/* Селекторы для тренера, спортивной категории, года, месяца, дня и статуса оплаты */}
            <select
              name="trainer"
              value={formData.trainer || ""}
              onChange={handleChange}
              className="client-update__select"
            >
              <option value="">Выберите тренера</option>
              {trainers.map((trainer) => (
                <option key={trainer} value={trainer}>
                  {trainer}
                </option>
              ))}
            </select>

            <select
              name="sport_category"
              value={formData.sport_category || ""}
              onChange={handleChange}
              className="client-update__select"
            >
              <option value="">Выберите категорию</option>
              {sports.map((sport) => (
                <option key={sport} value={sport}>
                  {sport}
                </option>
              ))}
            </select>

            <select
              name="year"
              value={formData.year || ""}
              onChange={handleChange}
              className="client-update__select"
            >
              <option value="">Год</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <select
              name="month"
              value={formData.month || ""}
              onChange={handleChange}
              className="client-update__select"
            >
              <option value="">Месяц</option>
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            <select
              name="day"
              value={formData.day || ""}
              onChange={handleChange}
              className="client-update__select"
            >
              <option value="">День</option>
              {days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>

            <select
              name="payment"
              value={formData.payment || ""}
              onChange={handleChange}
              className="client-update__select"
            >
              <option value="">Выберите статус оплаты</option>
              <option value="Оплачено">Оплачено</option>
              <option value="Не оплачено">Не оплачено</option>
            </select>

            <input
              type="number"
              name="price"
              value={formData.price || ""}
              onChange={handleChange}
              placeholder="Цена"
              className="client-update__input"
            />
            <textarea
              name="comment"
              value={formData.comment || ""}
              onChange={handleChange}
              placeholder="Комментарий"
              className="client-update__textarea"
            />
            <div className="client-update__actions">
              {/* Кнопки для сохранения или отмены */}
              <button onClick={handleSave} className="client-update__button client-update__button--save">
                Сохранить
              </button>
              <button onClick={handleCancel} className="client-update__button client-update__button--cancel">
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientUpdate;
