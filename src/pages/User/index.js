import React, { useState, useEffect } from 'react';

import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import {
    Container,
    HeaderProfile,
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
    const navigation = useNavigation();

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
        <>
            <Header user={user.name}>
                <Icon
                    name="arrow-back"
                    size={26}
                    color="#FFF"
                    onPress={() => navigation.goBack()}
                />
            </Header>
            <Container>
                <HeaderProfile>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </HeaderProfile>

                <Stars
                    data={stars}
                    keyExtractor={(star) => String(star.id)}
                    renderItem={({ item }) => (
                        <Starred>
                            <OwnerAvatar
                                source={{ uri: item.owner.avatar_url }}
                            />
                            <Info>
                                <Title>{item.name}</Title>
                                <Author>{item.owner.login}</Author>
                            </Info>
                        </Starred>
                    )}
                />
            </Container>
        </>
    );
};

export default User;
