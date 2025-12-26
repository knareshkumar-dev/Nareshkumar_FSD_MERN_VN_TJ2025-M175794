import { useState } from 'react'
import axios from 'axios'

export function Task16CreatePost() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      await axios.post('https://dummyjson.com/posts/add', {
        title,
        body,
        userId: 1,
      })
      setStatus('Post Added!')
      setTitle('')
      setBody('')
    } catch (err) {
      setStatus('Error adding post')
    }
  }

  return (
    <div className="section">
      <h2>16. Create Post (Axios POST)</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="field">
          Title:{' '}
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className="field">
          Body:{' '}
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={3}
          />
        </label>
        <button type="submit">Add Post</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  )
}


