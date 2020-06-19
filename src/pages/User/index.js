import React, { useState, useEffect } from 'react';

import { useRoute } from '@react-navigation/native';

import api from '../../services/api';

import { Container } from './styles';

const User = () => {
    const route = useRoute();
    const user = route.params.user;

    const [stars, setStars] = useState();

    const getStars = async () => {
        try {
            const response = await api.get(`/users/${user.login}/starred`);

            setStars(response.data);
        } catch (err) {}
    };

    useEffect(() => {
        getStars();
    }, []);

    return <Container />;
};

export default User;
