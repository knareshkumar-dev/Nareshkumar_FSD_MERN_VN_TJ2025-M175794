import { useState } from 'react'

const allProducts = [
  { id: 1, name: 'TV', category: 'Electronics' },
  { id: 2, name: 'Shirt', category: 'Clothes' },
  { id: 3, name: 'Laptop', category: 'Electronics' },
  { id: 4, name: 'Jeans', category: 'Clothes' },
]

export function Task8FilterableProducts() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Electronics', 'Clothes']
  const filtered =
    filter === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === filter)

  return (
    <div className="section">
      <h2>8. Filterable Products</h2>
      <div style={{ marginBottom: '0.5rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              marginRight: '0.5rem',
              fontWeight: filter === cat ? 'bold' : 'normal',
            }}
          >
            {cat}
          </button>
        ))}
      </div>
      <ul>
        {filtered.map((p) => (
          <li key={p.id}>
            {p.name} ({p.category})
          </li>
        ))}
      </ul>
    </div>
  )
}


