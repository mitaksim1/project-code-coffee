import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import './style.css';

export default function Dashboard() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const user_id = localStorage.getItem('user');

    api.get('dashboard', { headers: { user_id } }).then(response => {
      setCoffees(response.data);
    });
  }, []);

  return (
    <>
      <ul className="coffee_list">
        {coffees.map(coffee => (
          <li key={coffee.id}>
            <header
              style={{ backgroundImage: `url(${coffee.thumbnail_url})` }}
            />
            <strong>{coffee.company}</strong>
            <span>{coffee.date}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
