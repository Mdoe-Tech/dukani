import * as React from "react";
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import TabStackNavigators, { TabsStackParams } from "./TabStackNavigators";
import DetailsScreen from "../screens/product/ProductDetails";
import { ImageSourcePropType } from "react-native";

export type AppStackNavigatorParams = {
  Tab: NavigatorScreenParams<TabsStackParams>,
  Details: {
    id: string;
    source:ImageSourcePropType;
    productName:string
  };
}
const RootStack = createNativeStackNavigator<AppStackNavigatorParams>();

export type RootStackScreenProps<T extends keyof AppStackNavigatorParams> =
  NativeStackScreenProps<AppStackNavigatorParams, T>;
const AppStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Tab"
        component={TabStackNavigators}
        options={{ headerShown: false }} />
      <RootStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerShown: false
        }}
      />
    </RootStack.Navigator>
  );
};
export default AppStackNavigator;
