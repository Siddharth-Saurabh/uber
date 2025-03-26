import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserLogout() {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then((response) => {
            if (response.status === 200) {
                localStorage.removeItem('token');
                navigate('/login');
            }
        })
        .catch((error) => {
            console.error("Logout failed:", error);
            navigate('/login'); // Ensure user is redirected even if request fails
        });
    }, [navigate, token]);

    return <div>Logging out...</div>;
}

export default UserLogout;
