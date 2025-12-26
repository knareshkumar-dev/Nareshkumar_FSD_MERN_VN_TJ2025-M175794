import { useEffect, useState } from 'react'
import axios from 'axios'

const PAGE_SIZE = 5

export function Task18PaginatedUsers() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(0)
  const [status, setStatus] = useState('Loading...')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setStatus('Loading...')
        const res = await axios.get(
          'https://dummyjson.com/users?limit=20&select=firstName,lastName,email',
        )
        setUsers(res.data.users || [])
        setStatus('')
      } catch (err) {
        setStatus('Error loading users')
      }
    }
    fetchUsers()
  }, [])

  const start = page * PAGE_SIZE
  const visible = users.slice(start, start + PAGE_SIZE)
  const totalPages = Math.ceil(users.length / PAGE_SIZE)

  return (
    <div className="section">
      <h2>18. Paginated Users</h2>
      {status && <p>{status}</p>}
      {!status && (
        <>
          <ul>
            {visible.map((u) => (
              <li key={u.email}>
                {u.firstName} {u.lastName} – {u.email}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '0.5rem' }}>
            <button
              onClick={() => setPage((p) => p - 1)}
              disabled={page === 0}
            >
              Prev
            </button>
            <span style={{ margin: '0 0.5rem' }}>
              Page {page + 1} of {totalPages || 1}
            </span>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={page + 1 >= totalPages}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}


