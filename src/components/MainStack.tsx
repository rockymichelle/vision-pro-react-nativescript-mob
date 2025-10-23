import { BaseNavigationContainer } from "@react-navigation/core";
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { THEME } from "../constants";
import { N8nScreen } from "./N8nScreen";
import { ScreenOne } from "./ScreenOne";
import { ScreenTwo } from "./ScreenTwo";

const StackNavigator = stackNavigatorFactory();

/**
 * The main stack navigator for the whole app.
 */
export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="One"
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.HEADER_BACKGROUND,
        },
        headerShown: true,
      }}
    >
      <StackNavigator.Screen name="One" component={ScreenOne} />
      <StackNavigator.Screen name="Two" component={ScreenTwo} />
      <StackNavigator.Screen
        name="N8n"
        component={N8nScreen}
        options={{ title: "n8n Integration" }}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);
