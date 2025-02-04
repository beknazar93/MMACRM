import React, { useState, useEffect } from 'react';
import { fetchClients, addClient } from '../../api/API'; // Импортируем функции для работы с API
import ClientFilter from './ClientFilter'; // Импортируем компонент фильтрации

function ClientPayment() {
  const [clients, setClients] = useState([]); // Состояние для списка клиентов
  const [selectedClient, setSelectedClient] = useState(null); // Состояние для выбранного клиента
  const [confirmRenewal, setConfirmRenewal] = useState(false); // Состояние для подтверждения продления
  const [filters, setFilters] = useState({
    name: '', // Фильтр по имени клиента
    trainer: '', // Фильтр по тренеру
    sport_category: '', // Фильтр по спортивной категории
    day: '', // Фильтр по дню
    month: '', // Фильтр по месяцу
    year: '' // Фильтр по году
  });

  // Массив месяцев для выбора при продлении оплаты
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  // Эффект для загрузки списка клиентов при монтировании компонента
  useEffect(() => {
    const loadClients = async () => {
      try {
        const data = await fetchClients(); // Загружаем данные клиентов
        setClients(data); // Сохраняем данные в состояние
      } catch (error) {
        alert("Ошибка загрузки данных. Попробуйте позже."); // Ошибка загрузки
      }
    };
    loadClients(); // Загружаем клиентов
  }, []); // Пустой массив зависимостей, означает, что эффект сработает только при монтировании

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

  // Функция для продления оплаты
  const handleRenewal = async (client) => {
    // Определяем следующий месяц
    const nextMonthIndex = months.indexOf(client.month) + 1;
    const nextMonth = nextMonthIndex === 12 ? months[0] : months[nextMonthIndex]; // Если текущий месяц — декабрь, начинаем с января
    const updatedClient = {
      ...client, // Копируем все данные клиента
      month: nextMonth, // Обновляем месяц
      year: nextMonth === "Январь" ? client.year + 1 : client.year, // Если следующий месяц январь, увеличиваем год
    };

    const confirm = window.confirm(`Вы уверены, что хотите продлить оплату для ${client.name} на месяц ${nextMonth}?`); // Запрос подтверждения от пользователя
    if (!confirm) return; // Если пользователь не подтвердил, выходим из функции

    try {
      await addClient(updatedClient); // Отправляем обновленные данные клиента в API для сохранения
      alert(`Оплата продлена для ${client.name} на ${nextMonth} ${updatedClient.year}`); // Уведомление об успешном продлении
    } catch (error) {
      alert("Ошибка при продлении оплаты. Попробуйте снова."); // Ошибка при продлении оплаты
    }
  };

  return (
    <div className='client-list'>

      {/* Компонент фильтрации */}
      <ClientFilter
        filters={filters} // Передаем текущие фильтры в компонент
        setFilters={setFilters} // Функция для обновления фильтров
        trainers={["Машрапов Тилек", "Мойдунов Мирлан", "Асанбаев Эрлан", "Анарбаев Акжол",
    "Минбаев Сулайман", "Калмамат Уулу Акай", "Маматжанов Марлен", "Лукас Крабб",
    "Тажибаев Азамат", "Азизбек Уулу Баяман", "Тургунов Ислам", "Медербек Уулу Сафармурат",
    "Пазылов Кутман", "Жумалы Уулу Ариет",]} // Пример списка тренеров
        sports={["ММА", "Кулату", "Бокс", "Борьба", "Тхэквондо", "Самбо", "Греко-римская борьба", "Кроссфит", "Дзюдо", "Кикбокс"]} // Пример списка спортивных категорий
        months={months} // Массив месяцев для фильтрации
        years={["2025"]} // Пример списка годов для фильтрации
        days={Array.from({ length: 31 }, (_, i) => (i + 1).toString())} // Массив дней для фильтрации
      />

      <div className="client-list__cards">
        {filteredClients.slice().reverse().map(client => ( // Маппируем отфильтрованных клиентов на карточки
          <div key={client.id} className="client-card"> {/* Карточка для каждого клиента */}
            <p className="client-card__name">{client.name}</p> {/* Имя клиента */}
            <p className="client-card__name">{client.day} {client.month} {client.year}</p> {/* Дата (день, месяц, год) */}

            {/* Кнопка для продления оплаты */}
            <button
              className="client-card__details-button"
              onClick={() => handleRenewal(client)} // При клике вызываем функцию продления оплаты
            >
              Продлить оплату
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ClientPayment;
