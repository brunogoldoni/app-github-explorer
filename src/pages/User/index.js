import React, { useState, useEffect } from 'react';

import { useRoute } from '@react-navigation/native';

import api from '../../services/api';

import {
    Container,
    Header,
    Avatar,
    Name,
    Bio,
    Stars,
    Starred,
    OwnerAvatar,
    Info,
    Title,
    Author,
} from './styles';

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

    return (
        <Container>
            <Header>
                <Avatar source={{ uri: user.avatar }} />
                <Name>{user.name}</Name>
                <Bio>{user.bio}</Bio>
            </Header>

            <Stars
                data={stars}
                keyExtractor={(star) => String(stars.id)}
                renderItem={({ item }) => (
                    <Starred>
                        <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                        <Info>
                            <Title>{item.name}</Title>
                            <Author>{item.owner.login}</Author>
                        </Info>
                    </Starred>
                )}
            />
        </Container>
    );
};

export default User;
