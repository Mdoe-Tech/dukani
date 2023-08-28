import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

export type TabsStackParams = {
  Home: undefined;
  Settings: undefined;
  Cart:undefined
  Payment:undefined
};

const Tab = createBottomTabNavigator<TabsStackParams>();
const TabStackNavigators = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";
          if (Platform.OS === "ios") {
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Payment") {
              iconName = focused ? "ios-wallet" : "ios-wallet-outline";
            }
          } else {
            if (route.name === "Home") {
              iconName = focused ? "home-circle" : "home-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "account-settings" : "account-settings-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "shopping-cart" : "shopping-cart-outline";
            } else if (route.name === "Payment") {
              iconName = focused ? "wallet" : "wallet-outline";
            }
          }

          return Platform.OS === "ios" ? (
            <Ionicons name={iconName} size={30} color={color} />
          ) : (
            <MaterialCommunityIcons name={iconName} size={30} color={color} />
          );
        }
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Cart"
        component={SettingsScreen}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Payment"
        component={SettingsScreen}
        options={{
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStackNavigators;
