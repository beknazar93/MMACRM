import React, { useState } from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductsList";
import ProductSell from "./ProductSell";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("add");

  return (
    <div className="product-tabs">
      <div className="product-tabs__nav">
        <button
          className={activeTab === "list" ? "active" : ""}
          onClick={() => setActiveTab("list")}
        >
          Список продуктов
        </button>
        <button
          className={activeTab === "add" ? "active" : ""}
          onClick={() => setActiveTab("add")}
        >
          Добавить продукт
        </button>
        <button
          className={activeTab === "sell" ? "active" : ""}
          onClick={() => setActiveTab("sell")}
        >
          Продать продукт
        </button>
      </div>
      <div className="product-tabs__content">
        {activeTab === "add" && <AddProduct />}
        {activeTab === "list" && <ProductList />}
        {activeTab === "sell" && <ProductSell />}
      </div>
    </div>
  );
};

export default ProductTabs;
