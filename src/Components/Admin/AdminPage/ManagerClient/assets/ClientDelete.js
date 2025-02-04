import React, { useEffect, useState } from 'react'; // Импортируем необходимые хуки React
import { fetchClients, deleteClient } from '../../api/API'; // Импортируем функции для работы с API
import FilterComponent from './ClientFilter'; // Компонент для фильтрации клиентов

function ClientDelete() {
  const [clients, setClients] = useState([]); // Состояние для хранения списка клиентов
  const [loading, setLoading] = useState(true); // Состояние для отслеживания загрузки данных
  const [error, setError] = useState(null); // Состояние для ошибки, если не удается загрузить данные
  const [filters, setFilters] = useState({ // Состояние для фильтров
    name: '',
    trainer: '',
    sport_category: '',
    day: '',
    month: '',
    year: ''
  });

  // Списки тренеров, категорий спорта, месяцев, лет и дней для фильтрации
  const trainers = [ // Массив возможных тренеров для фильтрации
    "Машрапов Тилек", "Мойдунов Мирлан", "Асанбаев Эрлан", "Анарбаев Акжол",
    "Минбаев Сулайман", "Калмамат Уулу Акай", "Маматжанов Марлен", "Лукас Крабб",
    "Тажибаев Азамат", "Азизбек Уулу Баяман", "Тургунов Ислам", "Медербек Уулу Сафармурат",
    "Пазылов Кутман", "Жумалы Уулу Ариет",
  ];
  const sports = ["ММА", "Кулату", "Бокс", "Борьба", "Тхэквондо", "Самбо", "Греко-римская борьба", "Кроссфит", "Дзюдо", "Кикбокс"];
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const years = Array.from({ length: 1 }, (_, i) => 2025 - i); // Массив последних 3 лет
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString()); // Массив дней от 1 до 31

  const [selectedClient, setSelectedClient] = useState(null); // Состояние для выбранного клиента (для модального окна)
  
  // Функция для обработки клика по имени клиента
  const handleDetailsClick = (client) => {
    setSelectedClient(client); // Устанавливаем выбранного клиента
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setSelectedClient(null); // Сбрасываем выбранного клиента
  };

  // Загружаем список клиентов при монтировании компонента
  useEffect(() => {
    const loadClients = async () => {
      try {
        setLoading(true); // Начинаем загрузку
        const clientsData = await fetchClients(); // Получаем данные клиентов из API
        setClients(clientsData); // Сохраняем полученные данные в состояние
      } catch (error) {
        setError("Ошибка при загрузке данных клиентов."); // Если ошибка — выводим сообщение
        console.error(error); // Логируем ошибку
      } finally {
        setLoading(false); // Завершаем процесс загрузки
      }
    };

    loadClients(); // Вызываем функцию загрузки клиентов
  }, []); // Пустой массив зависимостей, означает, что код сработает только при монтировании компонента

  // Функция для удаления клиента
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Вы уверены, что хотите удалить этого клиента?"); // Подтверждение удаления
    if (!confirmDelete) return; // Если пользователь отменил, не удаляем

    try {
      await deleteClient(id); // Выполняем удаление клиента через API
      alert("Клиент успешно удалён!"); // Показать сообщение об успешном удалении
      // Обновляем список клиентов после удаления
      const updatedClients = clients.filter(client => client.id !== id);
      setClients(updatedClients); // Сохраняем обновленный список клиентов
    } catch (error) {
      alert("Ошибка при удалении клиента. Попробуйте снова."); // Если ошибка при удалении — выводим сообщение
    }
  };

  // Фильтрация клиентов по заданным фильтрам
  const filteredClients = clients.filter((client) => {
    return (
      (!filters.name || client.name.toLowerCase().includes(filters.name.toLowerCase())) && // Фильтруем по имени
      (!filters.trainer || client.trainer === filters.trainer) && // Фильтруем по тренеру
      (!filters.sport_category || client.sport_category === filters.sport_category) && // Фильтруем по категории спорта
      (!filters.day || client.day === filters.day) && // Фильтруем по дню
      (!filters.month || client.month === filters.month) && // Фильтруем по месяцу
      (!filters.year || client.year === filters.year) // Фильтруем по году
    );
  });

  // Если данные ещё загружаются, отображаем сообщение
  if (loading) return <div>Загрузка...</div>;
  // Если произошла ошибка при загрузке, показываем сообщение
  if (error) return <div>{error}</div>;

  // Если нет клиентов, показываем сообщение
  if (!Array.isArray(clients) || clients.length === 0) {
    return <p>Нет клиентов для отображения.</p>;
  }

  return (
    <div className="client-list">
      {/* Компонент фильтрации, передаем фильтры и функцию обновления фильтров */}
      <FilterComponent
        filters={filters}
        setFilters={setFilters}
        trainers={trainers}
        sports={sports}
        months={months}
        years={years}
        days={days}
      />

      {/* Отображение списка клиентов */}
      <div className="client-list__cards">
        {filteredClients.slice().reverse().map((client) => (
          <div className="client-card" key={client.id}>
            <p className="client-card__name">{client.name}</p>
              {/* Кнопка для удаления клиента */}
              <button
                className="client-card__details-button"
                onClick={() => handleDelete(client.id)}
              >
                Удалить
              </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientDelete;