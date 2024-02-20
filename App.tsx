import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

//navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

//package
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//hooks
import Toast from 'react-native-toast-message';
import toastConfig from './src/Sub/toast';

//screens
import {
  Test1,
  Test2,
  Test3,
  Test4,
  Test5,
  Test6,
  Top1,
  Top2,
  Top3,
  Top4,
  Top5,
  Top6,
  Top7,
} from './src/Screen';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faComputerMouse,
  faFeatherPointed,
} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

const TopTab = () => {
  const insets = useSafeAreaInsets();

  return (
    <Top.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: insets.top,
        },
        tabBarShowLabel: false,
        tabBarIcon: () => {
          return <FontAwesomeIcon icon={faFeatherPointed} color="gray" />;
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'black',
        },
      }}
    >
      <Top.Screen name="Top1" children={Top1} />
      <Top.Screen name="Top2" children={Top2} />
      <Top.Screen name="Top3" children={Top3} />
      <Top.Screen name="Top4" children={Top4} />
      <Top.Screen name="Top5" children={Top5} />
      <Top.Screen name="Top6" children={Top6} />
      <Top.Screen name="Top7" children={Top7} />
    </Top.Navigator>
  );
};

const App = () => {
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
              paddingBottom: 25,
            },
            tabBarShowLabel: false,
            tabBarIcon: () => {
              return <FontAwesomeIcon icon={faComputerMouse} color="gray" />;
            },
            tabBarActiveBackgroundColor: '#ddd',
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
          <Tab.Screen name="screen7" component={TopTab} />
        </Tab.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </QueryClientProvider>
  );
};

export default App;
