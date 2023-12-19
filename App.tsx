/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unstable-nested-components */
import HomePage from './android/app/src/Screens/HomePage';
import Cart from './android/app/src/Screens/Cart';
import Detail from './android/app/src/Screens/Detail';
import Profile from './android/app/src/Screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import UseQuery from './android/app/src/Screens/ReactQuery';
import AsyncStorageExamp from './android/app/src/Screens/asyStorage';
function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const queryClient = new QueryClient();
  const MyDrawer = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="BottomTab" component={BottomTab} />
        <Drawer.Screen name="Detail" component={Detail} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="HomePage" component={HomePage} />
        <Drawer.Screen name="Cart" component={Cart} />
        <Drawer.Screen name="reactQuery" component={UseQuery}/>
        <Drawer.Screen name="AsyncStorageExamp" component={AsyncStorageExamp}/>
      </Drawer.Navigator>
    );
  };

  const BottomTab = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                style={{height: 20, width: 20}}
                source={require('./android/app/src/Image/home.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                style={{height: 20, width: 20}}
                source={require('./android/app/src/Image/profile.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                style={{height: 20, width: 20}}
                source={require('./android/app/src/Image/cart.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
      <QueryClientProvider client={queryClient}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Drawer" component={MyDrawer} />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
          </QueryClientProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
export default App;
