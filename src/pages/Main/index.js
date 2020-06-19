import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Keyboard, Alert, ActivityIndicator } from 'react-native';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
    Container,
    Form,
    Input,
    SubmitButton,
    List,
    User,
    Avatar,
    Name,
    Bio,
    ProfileButton,
    ProfileButtonText,
} from './styles';

const Main = () => {
    const navigation = useNavigation();
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState('');
    const [loading, setLoading] = useState(false);

    const handleAddUser = async () => {
        let userData = users;

        setLoading(true);

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
            if (err.message === 'Request failed with status code 403') {
                Alert.alert(
                    'Ops... Algo deu errado.',
                    'Limite de solicitação excedido.'
                );
            } else {
                Alert.alert(
                    'Ops... Algo deu errado!',
                    'Verifique os dados e tente novamente.'
                );
            }

            setLoading(false);
        }

        setLoading(false);

        Keyboard.dismiss();
    };

    handleNavigate = (user) => {
        navigation.navigate('User', { user });
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
                <SubmitButton loading={loading} onPress={handleAddUser}>
                    {loading ? (
                        <ActivityIndicator color="#FFF" />
                    ) : (
                        <Icon name="add" size={20} color="#FFF" />
                    )}
                </SubmitButton>
            </Form>

            <List
                data={users}
                keyExtractor={(user) => user.login}
                renderItem={({ item }) => (
                    <User>
                        <Avatar source={{ uri: item.avatar }} />
                        <Name>{item.name}</Name>
                        <Bio>{item.bio}</Bio>

                        <ProfileButton onPress={() => handleNavigate(item)}>
                            <ProfileButtonText>Ver Perfil</ProfileButtonText>
                        </ProfileButton>
                    </User>
                )}
            />
        </Container>
    );
};

export default Main;
