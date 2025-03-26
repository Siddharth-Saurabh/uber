import React, { useContext, useEffect, useState } from 'react';
import { CaptainDataContext } from '../context/captainContext'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true; // Prevents setting state if unmounted

        if (!token) {
            navigate('/captain-login');
            return;
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(response => {
            if (isMounted && response.status === 200) {
                setCaptain(response.data.captain);
                setIsLoading(false);
            }
        })
        .catch(err => {
            console.error("Error fetching captain data:", err);
            localStorage.removeItem('token');
            navigate('/captain-login');
        });

        return () => { isMounted = false; }; // Cleanup on unmount
    }, [token, navigate, setCaptain]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default CaptainProtectWrapper;
