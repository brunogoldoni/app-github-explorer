import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import User from '../pages/User';

const Routes = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerTitleStyle: {
                    flexGrow: 1,
                    textAlign: 'center',
                    alignSelf: 'center',
                },
                headerStyle: {
                    backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFF',
            }}
        >
            <Stack.Screen name="Usuários" component={Main} />
            <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
    );
};

export default Routes;
