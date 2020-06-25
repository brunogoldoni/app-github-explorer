import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import User from '../pages/User';

const Routes = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
    );
};

export default Routes;
