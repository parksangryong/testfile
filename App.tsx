import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Test1 } from './src/Screen/Test1';
import { Test2 } from './src/Screen/Test2';
import { Test3 } from './src/Screen/Test3';
import { Test4 } from './src/Screen/Test4';
import { QueryClient, QueryClientProvider } from 'react-query';
import Toast from 'react-native-toast-message';
import { Test5 } from './src/Screen/Test5';
import { Test6 } from './src/Screen/Test6';
import toastConfig from './src/Sub/toast';

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
