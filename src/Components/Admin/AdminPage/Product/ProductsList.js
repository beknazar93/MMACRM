import { useState, useEffect } from "react";
import { fetchProducts, deleteProduct } from "../api/Product"; // Импортируем функцию удаления

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        alert("Ошибка загрузки списка продуктов.");
      }
    };
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await deleteProduct(id); // Удаляем продукт
      setProducts(products.filter((product) => product.id !== id)); // Обновляем список после удаления
    } catch (error) {
      alert("Ошибка при удалении продукта.");
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="product-list">
  <h2 className="product-list__title">Список продуктов</h2>
  <table className="product-list__table">
    <thead>
      <tr className="product-list__table-header">
        <th>Название</th>
        <th>Цена</th>
        <th>Дата добавления</th>
        <th>Количество</th>
        <th>Статус</th>
        <th>Цена продажи</th>
        <th>Дата продажи</th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody>
      {products.map((product) => (
        <tr className="product-list__table-row" key={product.id}>
          <td>{product.name}</td>
          <td>{product.product_price}</td>
          <td>{product.product_date}</td>
          <td>{product.product_quantity}</td>
          <td>{product.status ? "Активен" : "Неактивен"}</td>
          <td>{product.price_selling || "Не задана"}</td>
          <td>{product.date_selling || "Не продан"}</td>
          <td>
            <button
              onClick={() => handleDelete(product.id)}
              disabled={loading}
              className="product-list__delete-button"
            >
              {loading ? "Удаление..." : "Удалить"}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


  );
};

export default ProductList;
