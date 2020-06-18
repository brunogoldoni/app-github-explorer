import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Routes = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen
                    name="Usuários"
                    component={Main}
                    options={{
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
                />
                <Stack.Screen
                    name="User"
                    component={User}
                    options={{
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
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
