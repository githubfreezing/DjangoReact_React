import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    {/*fetch('http://localhost:8000/items/')*/}
    fetch('https://djangoreact-django.onrender.com/items/')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;