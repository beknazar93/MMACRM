import React, { useState, useEffect } from 'react'; // Импортируем React и хуки useState, useEffect для состояния и эффекта
import { fetchClients } from '../../api/API'; // Импортируем функцию для загрузки данных клиентов
import FilterComponent from './ClientFilter'; // Импортируем компонент для фильтрации клиентов

function ClientsTable() {
  const [clients, setClients] = useState([]); // Состояние для хранения списка клиентов
  const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки данных
  const [error, setError] = useState(null); // Состояние для обработки ошибок загрузки
  const [filters, setFilters] = useState({ // Состояние для фильтров
    name: '',
    trainer: '',
    sport_category: '',
    day: '',
    month: '',
    year: ''
  });

  const trainers = [ // Массив возможных тренеров для фильтрации
    "Машрапов Тилек", "Мойдунов Мирлан", "Асанбаев Эрлан", "Анарбаев Акжол",
    "Минбаев Сулайман", "Калмамат Уулу Акай", "Маматжанов Марлен", "Лукас Крабб",
    "Тажибаев Азамат", "Азизбек Уулу Баяман", "Тургунов Ислам", "Медербек Уулу Сафармурат",
    "Пазылов Кутман", "Жумалы Уулу Ариет",
  ];
  const sports = ["ММА", "Кулату", "Бокс", "Борьба", "Тхэквондо", "Самбо", "Греко-римская борьба", "Кроссфит", "Дзюдо", "Кикбокс"];
  const months = [ // Массив месяцев для фильтрации
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
  const years = Array.from({ length: 1 }, (_, i) => 2025 - i); // Массив годов (два последних года)
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString()); // Массив дней месяца (от 1 до 31)

  const [selectedClient, setSelectedClient] = useState(null); // Состояние для хранения выбранного клиента для отображения подробностей

  // Функция для отображения деталей клиента при клике на кнопку "Подробнее"
  const handleDetailsClick = (client) => {
    setSelectedClient(client); // Устанавливаем выбранного клиента в состояние
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setSelectedClient(null); // Обнуляем выбранного клиента
  };

  useEffect(() => { // Эффект для загрузки данных клиентов при монтировании компонента
    const loadClients = async () => { // Асинхронная функция для загрузки клиентов
      try {
        const clientsData = await fetchClients(); // Получаем данные клиентов из API
        setClients(clientsData); // Устанавливаем данные клиентов в состояние
      } catch (error) {
        setError('Ошибка загрузки данных клиентов.'); // В случае ошибки, устанавливаем сообщение об ошибке
      } finally {
        setLoading(false); // После загрузки, устанавливаем состояние загрузки в false
      }
    };
    loadClients(); // Вызываем функцию загрузки данных
  }, []); // Эффект с пустым массивом зависимостей, чтобы он выполнялся только один раз при монтировании компонента

  // Фильтрация списка клиентов на основе значений фильтров
  const filteredClients = clients.filter((client) => {
    return (
      (!filters.name || client.name.toLowerCase().includes(filters.name.toLowerCase())) && // Фильтрация по имени
      (!filters.trainer || client.trainer === filters.trainer) && // Фильтрация по тренеру
      (!filters.sport_category || client.sport_category === filters.sport_category) && // Фильтрация по категории спорта
      (!filters.day || client.day === filters.day) && // Фильтрация по дню
      (!filters.month || client.month === filters.month) && // Фильтрация по месяцу
      (!filters.year || client.year === filters.year) // Фильтрация по году
    );
  });

  return (
    <div className="client-list"> {/* Основной контейнер для списка клиентов */}
      <FilterComponent // Вставляем компонент фильтрации, передаем необходимые данные
        filters={filters} // Передаем состояние фильтров
        setFilters={setFilters} // Функция для обновления фильтров
        trainers={trainers} // Массив тренеров
        sports={sports} // Массив видов спорта
        months={months} // Массив месяцев
        years={years} // Массив годов
        days={days} // Массив дней месяца
      />
      <div className="client-list__cards">
        {filteredClients.slice().reverse().map((client) => (
          <div className="client-card" key={client.id}>
            <p className="client-card__name">{client.name}</p>
            <button
              className="client-card__details-button"
              onClick={() => handleDetailsClick(client)}
            >
              Подробнее
            </button>
          </div>
        ))}
      </div>


      {/* Модальное окно с деталями клиента */}
      {selectedClient && ( // Отображаем модальное окно, если выбран клиент
        <div className="client-modal">
          <div className="client-modal__content">
            <button className="client-modal__close" onClick={closeModal}>
              &times; {/* Кнопка для закрытия модального окна */}
            </button>
            <h2 className="client-modal__title">Детали клиента</h2> {/* Заголовок */}
            {/* Отображаем информацию о клиенте */}
            <p className="client-modal__item"><strong>Имя:</strong> {selectedClient.name}</p>
            <p className="client-modal__item"><strong>Email:</strong> {selectedClient.email}</p>
            <p className="client-modal__item"><strong>Телефон:</strong> {selectedClient.phone}</p>
            <p className="client-modal__item"><strong>Тренер:</strong> {selectedClient.trainer || "Не указан"}</p>
            <p className="client-modal__item"><strong>Категория спорта:</strong> {selectedClient.sport_category || "Не указано"}</p>
            <p className="client-modal__item"><strong>Месяц:</strong> {selectedClient.month || "Не указан"}</p>
            <p className="client-modal__item"><strong>Год:</strong> {selectedClient.year || "Не указан"}</p>
            <p className="client-modal__item"><strong>День:</strong> {selectedClient.day || "Не указан"}</p>
            <p className="client-modal__item"><strong>Комментарий:</strong> {selectedClient.comment || "Нет комментария"}</p>
            <p className={`client-modal__item client-modal__payment-status ${selectedClient.payment}`}>
              <strong>Статус оплаты:</strong> {selectedClient.payment}
            </p>
            <p className="client-modal__item"><strong>Цена:</strong> {selectedClient.price} сом</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientsTable; // Экспортируем компонент для использования в других частях приложения
