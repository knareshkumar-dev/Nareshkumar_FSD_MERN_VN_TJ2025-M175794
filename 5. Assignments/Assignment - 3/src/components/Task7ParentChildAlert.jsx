function ChildButton({ onAlert }) {
  return (
    <button onClick={onAlert}>Click me to trigger parent alert</button>
  )
}

export function Task7ParentChildAlert() {
  const showAlert = () => {
    alert('Hello from parent showAlert()!')
  }

  return (
    <div className="section">
      <h2>7. Parent to Child Callback</h2>
      <ChildButton onAlert={showAlert} />
    </div>
  )
}


