import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

//navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//package
import { QueryClient, QueryClientProvider } from 'react-query';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { AppVersionCheck } from './src/Sub/DeepLink';

//hooks
import Toast from 'react-native-toast-message';
import toastConfig from './src/Sub/toast';

//screens
import {
  Header,
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
  Videos,
} from './src/Screen';
import { VTest1, VTest2, VTest3 } from './src/Screen/bottom2';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faComputerMouse,
  faFeatherPointed,
} from '@fortawesome/free-solid-svg-icons';
import { faTRex } from '@fortawesome/pro-regular-svg-icons';

//bottomSheet
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import BottomSheets from './src/Sub/BottomSheets';

const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

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
        swipeEnabled: false,
      }}
    >
      <Top.Screen name="Top1" component={Top1} />
      <Top.Screen name="Top2" component={Top2} />
      <Top.Screen name="Top3" component={Top3} />
      <Top.Screen name="Top4" component={Top4} />
      <Top.Screen name="Top5" component={Top5} />
      <Top.Screen name="Top6" component={Top6} />
      <Top.Screen name="Top7" component={Top7} />
    </Top.Navigator>
  );
};

const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 25 : 0,
        },
        tabBarShowLabel: false,
        tabBarIcon: () => {
          return <FontAwesomeIcon icon={faComputerMouse} color="gray" />;
        },
        tabBarActiveBackgroundColor: '#ddd',
      }}
    >
      <Tab.Screen name="screen1" component={Test1} />
      <Tab.Screen name="screen2" component={Test2} />
      <Tab.Screen name="screen3" component={Test3} />
      <Tab.Screen name="screen4" component={Test4} />
      <Tab.Screen name="screen5" component={Test5} />
      <Tab.Screen name="screen6" component={Test6} />
      <Tab.Screen name="screen7" component={TopTab} />
    </Tab.Navigator>
  );
};

const Bottom2 = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 25 : 0,
        },
        tabBarShowLabel: false,
        tabBarIcon: () => {
          return <FontAwesomeIcon icon={faTRex} color="black" size={25} />;
        },
        tabBarActiveBackgroundColor: '#eee',
      }}
    >
      <Tab.Screen name="vtest1" component={VTest1} />
      <Tab.Screen name="vtest2" component={VTest2} />
      <Tab.Screen name="vtest3" component={VTest3} />
    </Tab.Navigator>
  );
};

const App = () => {
  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 5000);
  }, []);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="bottom"
                component={Bottom}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="video"
                component={Videos}
                options={{
                  header: () => {
                    return <Header />;
                  },
                }}
              />
              <Stack.Screen
                name="bottom2"
                component={Bottom2}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <Toast config={toastConfig} />
        </QueryClientProvider>
        <BottomSheets />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default App;
