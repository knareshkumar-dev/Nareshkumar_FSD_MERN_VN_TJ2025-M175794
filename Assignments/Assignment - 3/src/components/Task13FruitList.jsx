import { useState } from 'react'

export function Task13FruitList() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Mango'])
  const [newFruit, setNewFruit] = useState('')

  const handleAdd = (e) => {
    e.preventDefault()
    if (!newFruit.trim()) return
    setFruits((prev) => [...prev, newFruit.trim()])
    setNewFruit('')
  }

  const handleDelete = (name) => {
    setFruits((prev) => prev.filter((f) => f !== name))
  }

  return (
    <div className="section">
      <h2>13–14. Fruit List (Add & Delete)</h2>
      <form onSubmit={handleAdd} className="form">
        <label className="field">
          New Fruit:{' '}
          <input
            value={newFruit}
            onChange={(e) => setNewFruit(e.target.value)}
            placeholder="e.g. Orange"
          />
        </label>
        <button type="submit">Add Fruit</button>
      </form>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>
            {fruit}{' '}
            <button type="button" onClick={() => handleDelete(fruit)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}


