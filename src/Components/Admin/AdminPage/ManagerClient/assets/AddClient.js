import React, { useState } from 'react'; // Импортируем React и хук useState для управления состоянием компонента.
import { addClient } from '../../api/API'; // Импортируем функцию addClient для добавления нового клиента через API.

function AddClient() {
  // Хук состояния для хранения данных формы клиента.
  const [formData, setFormData] = useState({
    name: "",         // Имя клиента
    email: "",        // Email клиента
    phone: "",        // Телефон клиента
    stage: "",        // Этап, на котором находится клиент
    trainer: "",      // Тренер, назначенный клиенту
    sport_category: "", // Вид спорта, которым занимается клиент
    year: "",         // Год
    month: "",        // Месяц
    day: "",          // День
    comment: "",      // Комментарий к клиенту
    payment: "",      // Статус оплаты (оплачено/не оплачено)
    price: "",        // Цена за услуги
  });

  // Массивы с данными для различных полей формы.
  const trainers = [ // Массив возможных тренеров для фильтрации
    "Машрапов Тилек", "Мойдунов Мирлан", "Асанбаев Эрлан", "Анарбаев Акжол",
    "Минбаев Сулайман", "Калмамат Уулу Акай", "Маматжанов Марлен", "Лукас Крабб",
    "Тажибаев Азамат", "Азизбек Уулу Баяман", "Тургунов Ислам", "Медербек Уулу Сафармурат",
    "Пазылов Кутман", "Жумалы Уулу Ариет",
  ];
  const sports = ["ММА", "Кулату", "Бокс", "Борьба", "Тхэквондо", "Самбо", "Греко-римская борьба", "Кроссфит", "Дзюдо", "Кикбокс"];
  const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const years = Array.from({ length: 1 }, (_, i) => 2025 - i); // Два последних года для выбора
  const days = Array.from({ length: 31 }, (_, i) => i + 1); // Массив с числами от 1 до 31 для дней месяца

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault(); // Отменяем стандартное поведение формы, чтобы не обновлялась страница при отправке.

    try {
      // Вызов API для добавления клиента с переданными данными
      await addClient(formData); 
      alert("Клиент добавлен успешно!"); // Сообщение об успешном добавлении клиента
      setFormData({ // Очистка данных формы после успешного добавления
        name: "",
        email: "",
        phone: "",
        stage: "",
        trainer: "",
        sport_category: "",
        year: "",
        month: "",
        day: "",
        comment: "",
        payment: "",
        price: "",
      });
    } catch (error) {
      // Обработка ошибок, если не удалось добавить клиента
      alert("Ошибка при добавлении клиента. Проверьте данные и повторите попытку.");
    }
  };

  return (
    // Основной элемент формы с классом "client-form"
    <form className="client-form" onSubmit={handleSubmit}>
      <div className="client-form__grid"> {/* Контейнер для размещения всех элементов формы в сетке */}
        {/* Поля ввода для каждого атрибута клиента */}
        
        {/* Поле для имени клиента */}
        <div className="client-form__group">
          <input
            className="client-form__input"
            type="text" name="name"
            placeholder="Имя"
            value={formData.name} // Привязка значения к состоянию formData
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} // Обновление значения имени при изменении
          />
        </div>

        {/* Поле для телефона */}
        <div className="client-form__group">
          <input
            className="client-form__input"
            type="tel"
            placeholder="Телефон"
            value={formData.phone} // Привязка значения к состоянию formData
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })} // Обновление значения телефона при изменении
          />
        </div>

        {/* Поле для email */}
        <div className="client-form__group">
          <input
            className="client-form__input"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        {/* Поле для этапа */}
        <div className="client-form__group">
          <input
            className="client-form__input"
            type="text"
            placeholder="Этап"
            value={formData.stage}
            onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
          />
        </div>

        {/* Селект для выбора тренера */}
        <div className="client-form__group">
          <select
            className="client-form__select"
            value={formData.trainer}
            onChange={(e) => setFormData({ ...formData, trainer: e.target.value })}
          >
            <option value="">Выберите тренера</option>
            {trainers.map((trainer, index) => ( // Маппинг тренеров из массива
              <option key={index} value={trainer}>{trainer}</option>
            ))}
          </select>
        </div>

        {/* Селект для выбора вида спорта */}
        <div className="client-form__group">
          <select
            className="client-form__select"
            value={formData.sport_category}
            onChange={(e) => setFormData({ ...formData, sport_category: e.target.value })}
          >
            <option value="">Выберите вид спорта</option>
            {sports.map((sport, index) => (
              <option key={index} value={sport}>{sport}</option>
            ))}
          </select>
        </div>

        {/* Поля для даты (месяц, год, день) */}
        <div className="client-form__group">
          <select
            className="client-form__select"
            value={formData.month}
            onChange={(e) => setFormData({ ...formData, month: e.target.value })}
          >
            <option value="">Месяц</option>
            {months.map((month, index) => (
              <option key={index} value={month}>{month}</option>
            ))}
          </select>
        </div>

        <div className="client-form__group">
          <select
            className="client-form__select"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          >
            <option value="">Год</option>
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="client-form__group">
          <select
            className="client-form__select"
            value={formData.day}
            onChange={(e) => setFormData({ ...formData, day: e.target.value })}
          >
            <option value="">День</option>
            {days.map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>

        {/* Поле для цены */}
        <div className="client-form__group">
          <input
            className="client-form__input"
            type="number"
            placeholder="Цена"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
        </div>

        {/* Селект для статуса оплаты */}
        <div className="client-form__group">
          <select
            className="client-form__select"
            value={formData.payment}
            onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
          >
            <option value="">Оплата</option>
            <option value="Оплачено">Оплачено</option>
            <option value="Не оплачено">Не оплачено</option>
          </select>
        </div>

        {/* Поле для комментариев */}
        <div className="client-form__group">
          <textarea
            className="client-form__textarea"
            placeholder="Комментарий"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          />
        </div>
      </div>

      {/* Кнопка отправки формы */}
      <button className="client-form__button" type="submit">Добавить клиента</button>
    </form>
  );
}

export default AddClient;