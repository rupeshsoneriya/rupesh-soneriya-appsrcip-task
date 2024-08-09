import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/Cards.css";
import "../css/style.css";
import likeIcon from "../assets/productLikeIcon.svg";
import likedIcon from "../assets/productLikedIcon.svg"; 
const Cards = (isfilter = false) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [likedProducts, setLikedProducts] = useState([2]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Please check network connection");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const toggleLike = (id) => {
    setLikedProducts((prevLikedProducts) =>
      prevLikedProducts.includes(id)
        ? prevLikedProducts.filter((productId) => productId !== id)
        : [...prevLikedProducts, id]
    );
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="custom-container cards">
      <div className="custom-row">
        <div className="product-card">
          {products.length > 0 ? (
            products.map((item) => (
              <div key={item.id} className="card">
                <img src={item.image} alt={item.title} className="card-img" />
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <div>
                    <a href="#" className="card-btn">
                      Sign in
                    </a>
                    <a href="#" className="card-btn create-account">
                      or Create an account to see the pricing
                    </a>
                    <img
                      src={likedProducts.includes(item.id) ? likedIcon : likeIcon}
                      alt="Like Icon"
                      onClick={() => toggleLike(item.id)}
                      className="like-icon"
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
