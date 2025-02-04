// Общий API компонент - api.js
import axios from "axios";  // Импортируем библиотеку axios для работы с HTTP-запросами
const BASE_URL = "https://testosh.pythonanywhere.com/api";  // Устанавливаем базовый URL для API

// Функция для получения токена авторизации из localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem("access");  // Получаем токен авторизации из localStorage
  return { Authorization: `Bearer ${token}` };  // Формируем заголовки с токеном для авторизации
};


// Код для получения клиентов
export const fetchClients = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/clients/`, {
      headers: getAuthHeaders(),  // Отправляем запрос с авторизационным токеном
    });
    return response.data;  // Возвращаем данные ответа (список клиентов)
  } catch (error) {
    throw new Error("Ошибка загрузки данных клиентов.");  // Если ошибка, генерируем исключение
  }
};

// Функция для добавления клиента
export const addClient = async (clientData) => {
  const token = localStorage.getItem("access");  // Получаем токен из localStorage
  try {
    const response = await axios.post("https://testosh.pythonanywhere.com/api/clients/", clientData, {
      headers: { Authorization: `Bearer ${token}` },  // Заголовки с токеном авторизации
    });
    return response.data;  // Возвращаем данные, полученные от сервера (добавленный клиент)
  } catch (error) {
    console.error("Ошибка при добавлении клиента:", error);  // Логируем ошибку в консоль
    throw error;  // Пробрасываем ошибку дальше для обработки в компоненте
  }
};

// Функция для удаления клиента по ID
export const deleteClient = async (id) => {
  const token = localStorage.getItem("access");  // Получаем токен из localStorage
  try {
    const response = await axios.delete(`https://testosh.pythonanywhere.com/api/clients/${id}/`, {
      headers: { Authorization: `Bearer ${token}` },  // Заголовки с токеном авторизации
    });
    return response.data;  // Возвращаем данные ответа от сервера
  } catch (error) {
    console.error("Ошибка при удалении клиента:", error);  // Логируем ошибку в консоль
    throw error;  // Пробрасываем ошибку дальше
  }
};

// Функция для изменения данных клиента
export const updateClient = async (id, updatedData) => {
  const token = localStorage.getItem("access");  // Получаем токен из localStorage
  try {
    const response = await axios.put(`${BASE_URL}/clients/${id}/`, updatedData, {
      headers: { Authorization: `Bearer ${token}` },  // Заголовки с токеном авторизации
    });
    return response.data;  // Возвращаем обновленные данные клиента
  } catch (error) {
    console.error("Ошибка при изменении данных клиента:", error);  // Логируем ошибку в консоль
    throw error;  // Пробрасываем ошибку дальше
  }
};

// Функция для подсчёта общего дохода
export const fetchTotalIncome = async (filters) => {
  try {
    const clients = await fetchClients();

    const filteredClients = clients.filter((client) => {
      return (
        (!filters.trainer || client.trainer === filters.trainer) &&
        (!filters.sport_category || client.sport_category === filters.sport_category) &&
        (!filters.day || client.day === filters.day) &&
        (!filters.month || client.month === filters.month) &&
        (!filters.year || client.year === filters.year) &&
        (!filters.payment || client.payment === filters.payment)
      );
    });

    const totalIncome = filteredClients.reduce((sum, client) => {
      if (!client.price || typeof client.price !== "string") return sum;

      const cleanedPrice = client.price.replace(/[^0-9.]/g, "");
      const numericPrice = parseFloat(cleanedPrice);

      return sum + (isNaN(numericPrice) ? 0 : numericPrice);
    }, 0);

    return totalIncome;
  } catch (error) {
    throw new Error("Ошибка загрузки данных.");
  }
};

export const fetchTotalTrainer = async (filters) => {
  try {
    const clients = await fetchClients(); // Получаем список клиентов

    // Фильтруем клиентов по всем параметрам
    const filteredClients = clients.filter((client) => {
      return (
        (!filters.trainer || client.trainer === filters.trainer) &&
        (!filters.sport_category || client.sport_category === filters.sport_category) &&
        (!filters.day || client.day === filters.day) &&
        (!filters.month || client.month === filters.month) &&
        (!filters.year || client.year === filters.year) &&
        (!filters.payment || client.payment === filters.payment)
      );
    });

    // Рассчитываем общий доход
    const totalIncome = filteredClients.reduce((sum, client) => {
      if (!client.price || typeof client.price !== "string") return sum;

      // Очищаем строку от ненужных символов (например, валюты или запятых)
      const cleanedPrice = client.price.replace(/[^0-9.]/g, "");
      const numericPrice = parseFloat(cleanedPrice);

      return sum + (isNaN(numericPrice) ? 0 : numericPrice);
    }, 0);

    // Возвращаем итоговую сумму
    return totalIncome;
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
    throw new Error("Ошибка загрузки данных.");
  }
};

