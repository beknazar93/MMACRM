import { useState, useEffect } from "react";
import { fetchProducts, sellProduct } from "../api/Product";

const ProductSell = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [priceSelling, setPriceSelling] = useState("");
  const [dateSelling, setDateSelling] = useState("");
  const [quantitySelling, setQuantitySelling] = useState("");  // Поле для количества
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка загрузки товаров:", error);
      }
    };
    loadProducts();
  }, []);

  const handleSell = async () => {
    if (!selectedProduct || !priceSelling || !dateSelling || !quantitySelling) {
      setMessage("Заполните все поля.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Продаем товар и уменьшаем количество
      await sellProduct(selectedProduct.id, priceSelling, dateSelling, quantitySelling);
      setMessage(`Товар "${selectedProduct.name}" успешно продан!`);
      setSelectedProduct(null);
      setPriceSelling("");
      setDateSelling("");
      setQuantitySelling("");  // Сброс количества
    } catch (error) {
      setMessage("Ошибка при продаже товара.");
    } finally {
      setLoading(false);
    }
  };

  return (
<div className="product-sell">
  <h2 className="product-sell__title">Продажа товара</h2>
  <select
    onChange={(e) => {
      const product = products.find((p) => p.id === Number(e.target.value));
      setSelectedProduct(product);
    }}
    value={selectedProduct ? selectedProduct.id : ""}
    className="product-sell__select"
  >
    <option value="">Выберите товар</option>
    {products.map((product) => (
      <option key={product.id} value={product.id}>
        {product.name} (Цена: {product.product_price}, Кол-во: {product.product_quantity})
      </option>
    ))}
  </select>
  {selectedProduct && (
    <>
      <input
        type="number"
        placeholder="Цена продажи"
        value={priceSelling}
        onChange={(e) => setPriceSelling(e.target.value)}
        className="product-sell__input"
      />
      <input
        type="date"
        value={dateSelling}
        onChange={(e) => setDateSelling(e.target.value)}
        className="product-sell__input"
      />
      <input
        type="number"
        placeholder="Количество для продажи"
        value={quantitySelling}
        onChange={(e) => setQuantitySelling(e.target.value)}
        className="product-sell__input"
      />
      <button onClick={handleSell} disabled={loading} className="product-sell__button">
        {loading ? "Продажа..." : "Продать"}
      </button>
    </>
  )}
  {message && <p className="product-sell__message">{message}</p>}
</div>

  );
};

export default ProductSell;
