import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Scanner from "../screens/Scanner";
import Wagon from "../screens/Wagon";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabParamList, StackParamList } from "../types/router.type";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

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

const Navigator: FC = () => {
  return (
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
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false, title: 'Home' }} />
        <Tab.Screen name="Scanner" component={ScannerStack} options={{ headerShown: false, title: 'Scanner' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
