import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from "./src/screens/Home";
import Settings from "./src/screens/Settings";
import Scanner from "./src/screens/Scanner";
import Wagon from "./src/screens/Wagon";
import SettingsProvider from "./src/providers/settings.provider";

const queryClient = new QueryClient();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

function ScannerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Scanner" component={Scanner} />
      <Stack.Screen name="Wagon" component={Wagon} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
          <SettingsProvider>
            <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                      return (
                        <Ionicons
                          name={
                            focused
                              ? 'ios-information-circle'
                              : 'ios-information-circle-outline'
                          }
                          size={size}
                          color={color}
                        />
                      );
                    } else if (route.name === 'Scanner') {
                      return (
                        <Ionicons
                          name={
                            focused
                                ? 'ios-barcode'
                                : 'ios-barcode-outline'
                        }
                          size={size}
                          color={color}
                        />
                      );
                    }
                  },
                  tabBarInactiveTintColor: 'gray',
                  tabBarActiveTintColor: 'tomato',
                })}>
                <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
                <Tab.Screen name="Scanner" component={ScannerStack} options={{ headerShown: false }} />
              </Tab.Navigator>
            </NavigationContainer>
          </SettingsProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
