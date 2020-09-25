import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import './style.css';

export default function Dashboard() {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        async function loadCoffees() {
        
            const user_id = localStorage.getItem('user');
        
            const response = await api.get('/dashboard', {
                headers: { user_id }
            });

            setCoffees(response.data);
            console.log(response.data);
        }
        loadCoffees();
          
    }, []);

    return (
        <>
            <ul className="coffee_list">
                {coffees.map(coffee => (
                    <li key= {coffee.id}>
                        <header style={{ backgroundImage: `url(${coffee.thumbnail_url})` }} />
                        <strong>{coffee.company}</strong>
                        <span>{coffee.date}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}