import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SigninScreen from 'screens/auth/signin/SigninScreen';
import {ThemeProvider} from '@rneui/themed';
import {mainTheme} from './config/theme';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={mainTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signin">
          <Stack.Screen
            name="Landing"
            options={{
              title: '',
              headerShown: false,
            }}
            component={SigninScreen}
          />
          <Stack.Screen
            name="Signin"
            options={{
              title: '',
              headerShown: false,
            }}
            component={SigninScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
