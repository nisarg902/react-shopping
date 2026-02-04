import { useEffect, useState } from "react";

export default function ShoppingComponent() {

  const [categories, setCategories] = useState([]);
  const [products, setProduct] = useState([]);
  const [selectedstate, setSelectedstate] = useState("all");
  const [cartItem, setcartItem] = useState([]);

  // Load Categories
  function Loadcategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data));
  }

  // Load Products
  function LoadProduct(category = "all") {
    let url = "https://fakestoreapi.com/products";
    if (category !== "all") {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }
    fetch(url)
      .then(res => res.json())
      .then(data => setProduct(data));
  }

  useEffect(() => {
    Loadcategories();
    LoadProduct();
  }, []);

  useEffect(() => {
    LoadProduct(selectedstate);
  }, [selectedstate]);

  // Add To Cart with Qty
  function handleAddtocart(id) {
    setcartItem(prev => {
      const exists = prev.find(item => item.id === id);
      if (exists) {
        // Increase quantity
        return prev.map(item =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Add new item with qty 1
        const product = products.find(p => p.id === id);
        return [...prev, { ...product, qty: 1 }];
      }
    });
  }

  // Increment function
function incrementQty(id) {
  setcartItem(prev =>
    prev.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
  );
}

// Decrement function
function decrementQty(id) {
  setcartItem(prev =>
    prev
      .map(item =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter(item => item.qty > 0) // remove if qty is 0
  );
}

  // Remove item from cart
  function handleRemoveitem(id) {
    setcartItem(prev => prev.filter(item => item.id !== id));
  }

  // Calculate total
  const total = cartItem.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  return (
    <div>

      {/* Header */}
      <header className="bg-dark text-white p-3 mb-3 d-flex justify-content-between">
        <h4>🛒 Shopping Mart</h4>
        <h5>Cart 🛍️ {cartItem.length}</h5>
      </header>

      <section className="row">

        {/* Category */}
        <nav className="col-md-2 mb-3">
          <select
            className="form-select"
            value={selectedstate}
            onChange={(e) => setSelectedstate(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(category =>
              <option key={category} value={category}>{category}</option>
            )}
          </select>
        </nav>

        {/* Products */}
        <main className="col-md-6">
          <div className="row">
            {products.map(product =>
              <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    height="190"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <dl>
                      <dt>Title</dt>
                      <dd>{product.title}</dd>
                      <dt>Price</dt>
                      <dd>₹{product.price}</dd>
                      <dt>Rating</dt>
                      <dd>{product.rating.rate}</dd>
                    </dl>
                  </div>
                  <div className="card-footer">
                    <button
                      onClick={() => handleAddtocart(product.id)}
                      className="btn btn-danger w-100"
                    >
                      <span className="bi bi-cart4"></span> Add to cart
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Cart */}
        <aside className="col-md-4">
          <button className="btn btn-warning w-100 mb-3">
            <span className="bi bi-cart3"></span> [{cartItem.length}] Your cart items
          </button>

          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItem.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>₹{item.price.toFixed(2)}</td>
         <td className="d-flex align-items-center gap-2">
  <button
    className="btn btn-sm btn-secondary"
    onClick={() => decrementQty(item.id)}
  >
    -
  </button>
  <span className="badge bg-primary">{item.qty}</span>
  <button
    className="btn btn-sm btn-secondary"
    onClick={() => incrementQty(item.id)}
  >
    +
  </button>
</td>
                  <td>{item.qty}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemoveitem(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3"><b>Total</b></td>
                <td><b>₹{total.toFixed(2)}</b></td>
              </tr>
            </tfoot>
          </table>
        </aside>

      </section>
    </div>
  );
}
