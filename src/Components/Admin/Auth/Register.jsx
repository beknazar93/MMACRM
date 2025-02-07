import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const errorMessages = {
  "A user with that username already exists.":
    "Пользователь с таким именем уже существует.",
  "This email is already registered.": "Этот email уже зарегистрирован.",
  "Password must be at least 8 characters long.":
    "Пароль должен быть длиной не менее 8 символов.",
  "Ensure this field has at least 8 characters.":
    "Убедитесь, что это поле содержит не менее 8 символов.",
};

const translateError = (error) => {
  return errorMessages[error] || error; // Если перевод не найден, показываем оригинальный текст
};

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "employee",
  });

  const [errors, setErrors] = useState([]);
  const navigate = useNavigate(); // Используем хук для перенаправления

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors([]);
    try {
      await axios.post(
        "https://testosh.pythonanywhere.com/register/",
        formData
      );
      alert("Регистрация прошла успешно!"); // Уведомление об успешной регистрации
      navigate("/admin"); // Перенаправляем на страницу входа
    } catch (error) {
      if (error.response && error.response.data) {
        const serverErrors = error.response.data;
        const errorMessages = Object.entries(serverErrors).map(
          ([field, messages]) =>
            messages.map((msg) => translateError(msg)).join(", ")
        );
        setErrors(errorMessages);
      } else {
        setErrors(["Произошла неизвестная ошибка. Попробуйте позже."]);
      }
    }
  };

  return (
<form onSubmit={handleRegister} className="registration-form">
  <h2 className="registration-form__title">Регистрация</h2>
  {errors.length > 0 && (
    <div className="registration-form__errors">
      {errors.map((error, index) => (
        <p key={index}>{error}</p>
      ))}
    </div>
  )}
  <input
    type="text"
    name="username"
    placeholder="Имя пользователя"
    value={formData.username}
    onChange={handleInputChange}
    className="registration-form__input"
  />
  <input
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleInputChange}
    className="registration-form__input"
  />
  <input
    type="password"
    name="password"
    placeholder="Пароль"
    value={formData.password}
    onChange={handleInputChange}
    className="registration-form__input"
  />
  <select
    name="role"
    value={formData.role}
    onChange={handleInputChange}
    className="registration-form__select"
  >
    <option value="">Выберите Роль</option>
    <option value="admin">Администратор</option>
    <option value="client_manager">Менеджер по работе с клиентами</option>
    <option value="product_manager">Менеджер продукта</option>
    {/* <option value="hr_manager">HR-менеджер</option> */}
  </select>
  <button type="submit" className="registration-form__button">Регистрация</button>
  <Link to="/admin" className="registration-form__link">Уже есть аккаунт</Link>
</form>

  );
};

export default Register;