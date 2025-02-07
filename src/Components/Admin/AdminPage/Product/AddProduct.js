import { useState } from "react";
import { addProduct } from "../api/Product";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    product_price: "",
    product_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(productData);  // Передаем только данные без количества
      alert("Продукт успешно добавлен!");
      setProductData({ name: "", product_price: "", product_date: "" });
    } catch (error) {
      alert("Ошибка при добавлении продукта.");
    }
  };

  return (
<form onSubmit={handleSubmit} className="product-form">
  <input
    type="text"
    name="name"
    autocomplete="off"
    placeholder="Название"
    value={productData.name}
    onChange={handleChange}
    required
    className="product-form__input"
  />
  <input
    type="number"
    name="product_price"
    autocomplete="off"
    placeholder="Цена товара"
    value={productData.product_price}
    onChange={handleChange}
    required
    className="product-form__input"
  />
  <input
    type="date"
    name="product_date"
    value={productData.product_date}
    onChange={handleChange}
    required
    className="product-form__input"
  />
  <button type="submit" className="product-form__button">Добавить</button>
</form>

  );
};

export default AddProduct;
