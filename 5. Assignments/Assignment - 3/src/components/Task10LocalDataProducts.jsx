import localProducts from '../data/products.json'
import './cards.css'

export function Task10LocalDataProducts() {
  return (
    <div className="section">
      <h2>10. Local JSON Products</h2>
      <div className="card-grid">
        {localProducts.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p>Price: ₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}


