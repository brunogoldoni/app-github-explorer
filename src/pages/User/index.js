import React from 'react';

import { useRoute } from '@react-navigation/native';

import { Container } from './styles';

const User = () => {
    const route = useRoute();

    const user = route.params.user;

    console.tron.log('USER', user);

    return <Container />;
};

export default User;
