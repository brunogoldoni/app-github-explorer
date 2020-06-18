import React, { useState } from 'react';

import { Keyboard, Alert } from 'react-native';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Form, Input, SubmitButton } from './styles';

const Main = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState('');

    const handleAddUser = async () => {
        let userData = users;

        try {
            const response = await api.get(`/users/${newUser}`);

            const data = {
                bio: response.data.bio,
                name: response.data.name,
                login: response.data.login,
                avatar: response.data.avatar_url,
            };

            userData.push(data);

            setUsers(userData);

            setNewUser('');
        } catch (err) {
            Alert.alert(
                'Ops... Algo deu errado!',
                'Verifique os dados e tente novamente.'
            );
        }

        Keyboard.dismiss();
    };

    return (
        <Container>
            <Form>
                <Input
                    value={newUser}
                    autoCorrect={false}
                    returnKeyType="send"
                    autoCapitalize="none"
                    onSubmitEditing={handleAddUser}
                    placeholder="Adicionar usuário"
                    onChangeText={(text) => setNewUser(text)}
                />
                <SubmitButton onPress={handleAddUser}>
                    <Icon name="add" size={20} color="#FFF" />
                </SubmitButton>
            </Form>
        </Container>
    );
};

export default Main;
