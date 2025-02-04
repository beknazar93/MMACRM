import React, { useState } from "react"; // Импортируем React и хук useState для управления состоянием компонента
import AddClient from "./assets/AddClient"; // Импортируем компонент для добавления клиентов
import ClientsTable from "./assets/ClientsTable"; // Импортируем компонент для отображения списка клиентов
import ClientDelete from "./assets/ClientDelete"; // Импортируем компонент для удаления клиентов
import ClientUpdate from "./assets/ClientUpdate"; // Импортируем компонент для изменения данных клиента
import ClientPayment from "./assets/ClientPayment"; // Импортируем компонент для обработки продления (платежей) клиентов


const AdminManager = () => {
  const [activeSection, setActiveSection] = useState("clients"); // Состояние для отслеживания текущей активной секции, по умолчанию 'clients'

  const sections = { // Объект с секциями, где ключ - это название секции, а значение - JSX компонента для этой секции
    clients: <ClientsTable />, // Для секции "clients" отображается компонент ClientsTable
    other: <AddClient />, // Для секции "other" отображается компонент AddClient
    update: <ClientUpdate />, // Для секции "update" отображается компонент ClientUpdate
    payment: <ClientPayment />, // Для секции "payment" отображается компонент ClientPayment
    delete: <ClientDelete />, // Для секции "delete" отображается компонент ClientDelete
  };

  return (
    <div className="admin-container"> {/* Основной контейнер для панели администратора */}
      <div className="top-nav"> {/* Верхняя навигация для выбора секций */}
        {/* Каждая навигационная кнопка, при клике изменяет активную секцию */}
        <div
          className={`nav-item ${activeSection === "clients" ? "active" : ""}`} // Класс "active" добавляется, если секция активна
          onClick={() => setActiveSection("clients")} // При клике активируется секция "clients"
        >
          Список
        </div>
        <div
          className={`nav-item ${activeSection === "other" ? "active" : ""}`} // Класс "active" добавляется для секции "other"
          onClick={() => setActiveSection("other")} // При клике активируется секция "other" (добавление клиента)
        >
          Добавление
        </div>
        <div
          className={`nav-item ${activeSection === "update" ? "active" : ""}`} // Класс "active" добавляется для секции "update"
          onClick={() => setActiveSection("update")} // При клике активируется секция "update" (изменение клиента)
        >
          Изменение
        </div>
        <div
          className={`nav-item ${activeSection === "payment" ? "active" : ""}`} // Класс "active" добавляется для секции "payment"
          onClick={() => setActiveSection("payment")} // При клике активируется секция "payment" (продление)
        >
          Продление
        </div>
        <div
          className={`nav-item ${activeSection === "delete" ? "active" : ""}`} // Класс "active" добавляется для секции "delete"
          onClick={() => setActiveSection("delete")} // При клике активируется секция "delete" (удаление клиента)
        >
          Удаление
        </div>
      </div>
      <div className="main-content">{sections[activeSection]}</div> {/* Основной контент - рендерится в зависимости от активной секции */}
    </div>
  );
};
export default AdminManager; // Экспортируем компонент AdminPanel для использования в других частях приложения
