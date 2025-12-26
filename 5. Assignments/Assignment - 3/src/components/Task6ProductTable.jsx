const products = [
  { id: 1, name: 'Lenovo ThinkPad E14', price: 62000 },
  { id: 2, name: 'Boat Rockerz 450 Headphones', price: 2499 },
  { id: 3, name: 'Logitech K380 Wireless Keyboard', price: 2895 },
]

export function Task6ProductTable() {
  return (
    <div className="section">
      <h2>6. Electronics Price List (.map)</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


