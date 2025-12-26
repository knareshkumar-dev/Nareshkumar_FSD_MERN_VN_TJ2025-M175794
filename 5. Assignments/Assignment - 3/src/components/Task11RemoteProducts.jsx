import { useEffect, useState } from 'react'

export function Task11RemoteProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch('https://dummyjson.com/products')
        if (!res.ok) {
          throw new Error('Network error')
        }
        const data = await res.json()
        setProducts(data.products || [])
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="section">
      <h2>11–12. Remote Products with Loading & Error</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error loading data</p>}
      {!loading && !error && (
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              {p.title} – ₹{p.price} ({p.brand})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


