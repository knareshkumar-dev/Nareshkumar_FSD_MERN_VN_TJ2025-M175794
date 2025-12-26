import { Link, Outlet } from 'react-router-dom'

export function Products() {
  return (
    <div>
      <h1>Campus Store</h1>
      <p>
        Browse items students commonly buy during the semester, such as laptops,
        headphones, lab coats, and casual wear for college events.
      </p>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="electronics" style={{ marginRight: '1rem' }}>
          Electronics
        </Link>
        <Link to="fashion">Fashion</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export function Electronics() {
  return (
    <div>
      <h2>Electronics</h2>
      <ul>
        <li>Dell Inspiron 15 – Everyday laptop for coding labs</li>
        <li>Noise Cancelling Headphones – Focus during online lectures</li>
        <li>Wireless Mouse – Comfortable for long project sessions</li>
      </ul>
    </div>
  )
}

export function Fashion() {
  return (
    <div>
      <h2>Fashion</h2>
      <ul>
        <li>College Hoodie – Official merchandise with institute logo</li>
        <li>Formal Shirt &amp; Trousers – For presentations and placements</li>
        <li>Casual T‑shirt – Perfect for cultural events and fests</li>
      </ul>
    </div>
  )
}


