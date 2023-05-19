import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from '@rneui/themed';
import {QueryClient, QueryClientProvider} from 'react-query';

import {mainTheme} from './config/theme';
import SigninScreen from './screens/auth/SigninScreen';
import SigninFormScreen from './screens/auth/SigninFormScreen';
import SignupFormScreen from './screens/auth/SignupFormScreen';
import {RecoilRoot} from 'recoil';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={mainTheme}>
        <RecoilRoot>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Signin">
              {/* <Stack.Screen
            name="Landing"
            options={{
              title: '',
              headerShown: false,
            }}
            component={SigninScreen}
          /> */}
              <Stack.Screen
                name="Signin"
                options={{
                  title: '',
                  headerShown: false,
                }}
                component={SigninScreen}
              />
              <Stack.Screen
                name="SigninForm"
                options={{
                  title: '로그인',
                  headerShadowVisible: false,
                  headerTitleAlign: 'center',
                }}
                component={SigninFormScreen}
              />
              <Stack.Screen
                name="SignupForm"
                options={{
                  title: '회원가입',
                  headerShadowVisible: false,
                  headerTitleAlign: 'center',
                }}
                component={SignupFormScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </RecoilRoot>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
