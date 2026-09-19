import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/CartSlice";
import "./App.css";

const plants = [
  // =========================
  // INDOOR PLANTS
  // =========================

  {
    id: 1,
    name: "Monstera Deliciosa",
    category: "Indoor Plants",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
    description:
      "A tropical plant with large, beautiful split leaves.",
  },

  {
    id: 2,
    name: "Snake Plant",
    category: "Indoor Plants",
    price: 25,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80",
    description:
      "A hardy indoor plant that is easy to care for.",
  },

  {
    id: 3,
    name: "Peace Lily",
    category: "Indoor Plants",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=800&q=80",
    description:
      "An elegant plant with beautiful white flowers.",
  },

  {
    id: 4,
    name: "ZZ Plant",
    category: "Indoor Plants",
    price: 28,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
    description:
      "A low-maintenance plant with glossy green leaves.",
  },

  {
    id: 5,
    name: "Rubber Plant",
    category: "Indoor Plants",
    price: 32,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80",
    description:
      "A striking indoor plant with large glossy leaves.",
  },

  {
    id: 6,
    name: "Calathea",
    category: "Indoor Plants",
    price: 29,
    image:
      "https://images.unsplash.com/photo-1597055181300-dc7e0c1e1c6b?auto=format&fit=crop&w=800&q=80",
    description:
      "A decorative tropical plant with patterned foliage.",
  },

  // =========================
  // SUCCULENTS
  // =========================

  {
    id: 7,
    name: "Aloe Vera",
    category: "Succulents",
    price: 18,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    description:
      "A useful succulent with thick leaves and easy care.",
  },

  {
    id: 8,
    name: "Echeveria",
    category: "Succulents",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80",
    description:
      "A compact rosette succulent with beautiful leaves.",
  },

  {
    id: 9,
    name: "Jade Plant",
    category: "Succulents",
    price: 22,
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80",
    description:
      "A popular succulent with thick rounded leaves.",
  },

  {
    id: 10,
    name: "Haworthia",
    category: "Succulents",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=800&q=80",
    description:
      "A small succulent perfect for desks and shelves.",
  },

  {
    id: 11,
    name: "String of Pearls",
    category: "Succulents",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80",
    description:
      "A trailing succulent with bead-like green leaves.",
  },

  {
    id: 12,
    name: "Zebra Haworthia",
    category: "Succulents",
    price: 19,
    image:
      "https://images.unsplash.com/photo-1519336056116-8f5f7b9c5c4b?auto=format&fit=crop&w=800&q=80",
    description:
      "A compact succulent with distinctive striped leaves.",
  },

  // =========================
  // FLOWERING PLANTS
  // =========================

  {
    id: 13,
    name: "Orchid",
    category: "Flowering Plants",
    price: 40,
    image:
      "https://images.unsplash.com/photo-1566907225476-3f3b6e2a1e1f?auto=format&fit=crop&w=800&q=80",
    description:
      "An elegant flowering plant with beautiful blooms.",
  },

  {
    id: 14,
    name: "African Violet",
    category: "Flowering Plants",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=800&q=80",
    description:
      "A compact plant known for colorful flowers.",
  },

  {
    id: 15,
    name: "Anthurium",
    category: "Flowering Plants",
    price: 34,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
    description:
      "A tropical flowering plant with vibrant blooms.",
  },

  {
    id: 16,
    name: "Begonia",
    category: "Flowering Plants",
    price: 23,
    image:
      "https://images.unsplash.com/photo-1597055181300-dc7e0c1e1c6b?auto=format&fit=crop&w=800&q=80",
    description:
      "A colorful flowering plant suitable for indoor spaces.",
  },

  {
    id: 17,
    name: "Geranium",
    category: "Flowering Plants",
    price: 21,
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    description:
      "A cheerful flowering plant with colorful blossoms.",
  },

  {
    id: 18,
    name: "Kalanchoe",
    category: "Flowering Plants",
    price: 26,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80",
    description:
      "A colorful succulent known for its long-lasting flowers.",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    "Indoor Plants",
    "Succulents",
    "Flowering Plants",
  ];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const isInCart = (plantId) => {
    return cartItems.some(
      (item) => item.id === plantId
    );
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          Paradise Nursery 🌿
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/plants">
            Plants
          </Link>

          <Link to="/cart" className="cart-link">
            🛒 Cart

            <span className="cart-count">
              {cartCount}
            </span>
          </Link>
        </div>
      </nav>

      <main className="products-page">
        <div className="page-heading">
          <h1>Our Plants</h1>

          <p>
            Find the perfect plant for your home.
          </p>
        </div>

        {categories.map((category) => {
          const categoryPlants = plants.filter(
            (plant) => plant.category === category
          );

          return (
            <section
              className="category-section"
              key={category}
            >
              <h2 className="category-title">
                {category}
              </h2>

              <div className="product-grid">
                {categoryPlants.map((plant) => (
                  <article
                    className="product-card"
                    key={plant.id}
                  >
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="product-image"
                    />

                    <div className="product-info">
                      <h3 className="product-name">
                        {plant.name}
                      </h3>

                      <p className="product-description">
                        {plant.description}
                      </p>

                      <div className="product-bottom">
                        <span className="product-price">
                          ${plant.price}
                        </span>

                        <button
                          className="add-button"
                          onClick={() =>
                            handleAddToCart(plant)
                          }
                          disabled={isInCart(plant.id)}
                        >
                          {isInCart(plant.id)
                            ? "Added"
                            : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}

export default ProductList;
