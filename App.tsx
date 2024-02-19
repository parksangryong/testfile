import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toast from 'react-native-toast-message';
import toastConfig from './src/Sub/toast';

import { Test1, Test2, Test3, Test4, Test5, Test6 } from './src/Screen';

const Tab = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function App() {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 5000);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarStyle: {
              height: 70,
            },
            tabBarShowLabel: false,
            tabBarIconStyle: {
              height: 70,
            },
          }}
        >
          <Tab.Screen
            name="screen1"
            component={Test1}
            options={{ unmountOnBlur: true }}
          />
          <Tab.Screen name="screen2" component={Test2} />
          <Tab.Screen name="screen3" component={Test3} />
          <Tab.Screen name="screen4" component={Test4} />
          <Tab.Screen name="screen5" component={Test5} />
          <Tab.Screen name="screen6" component={Test6} />
        </Tab.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </QueryClientProvider>
  );
}
