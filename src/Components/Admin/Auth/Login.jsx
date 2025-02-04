import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Индикация загрузки
  const navigate = useNavigate();

  
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Сброс ошибок перед новым запросом

    try {
      // Отправляем запрос на вход
      const response = await axios.post(
        "https://testosh.pythonanywhere.com/login/",
        {
          username,
          password,
        }
      );


      // Сохраняем токены в локальное хранилище
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      // Запрашиваем профиль пользователя для получения роли и имени
      const profileResponse = await axios.get(
        "https://testosh.pythonanywhere.com/profile/",
        {
          headers: {
            Authorization: `Bearer ${response.data.access}`,
          },
        }
      );

      const userRole = profileResponse.data.role;
      const managerName = profileResponse.data.username; // Имя менеджера

      // Сохраняем имя менеджера
      localStorage.setItem("manager_name", managerName);

      // Перенаправляем в зависимости от роли
      switch (userRole) {
        case "admin":
          navigate("/admin/AdminPanel");
          break;
        case "client_manager":
          navigate("/admin/AdminManager");
          break;
        case "product_manager":
          navigate("/admin/AdminProduct");
          break;
        // case "hr_manager":
        //   navigate("/admin/hr-managerDashboard");
        //   break;
        // case "employee":
        //   navigate("/admin/employeeDashboard");
        //   break;
        default:
          setError("Неизвестная роль пользователя");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setError("Неверное имя пользователя или пароль.");
      } else {
        setError("Ошибка подключения к серверу. Попробуйте позже.");
      }
      console.error("Ошибка входа:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
<form onSubmit={handleLogin} className="login-form">
  <h2 className="login-form__title">Вход в CRM MMA</h2>
  {error && <p className="login-form__error">{error}</p>}
  
  <input
    type="text"
    placeholder="Имя пользователя"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    required
    className="login-form__input"
  />
  
  <div className="login-form__password-container">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="Пароль"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="login-form__input"
    />
    <button
      type="button"
      className="login-form__password-toggle"
      onClick={(e) => {
        e.preventDefault();
        setShowPassword((prev) => !prev);
      }}
    >
      {showPassword ? "Скрыть" : "Показать"}
    </button>
  </div>

  <button type="submit" className="login-form__submit" disabled={loading}>
    {loading ? "Вход..." : "Войти"}
  </button>
  
  <Link to="register" className="login-form__link">
    <p>Если еще нет аккаунта?</p>
  </Link>
</form>

  );
};

export default Login;
