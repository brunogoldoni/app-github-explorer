import React from 'react';

import PropTypes from 'prop-types';

// import { useRoute } from '@react-navigation/native';

import { Container } from './styles';

const User = ({ navigation }) => {
    // const route = useRoute();

    console.tron.log('PARAMS', navigation);

    return <Container></Container>;
};

export default User;

User.PropTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
