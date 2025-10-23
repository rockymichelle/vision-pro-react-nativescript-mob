import { RouteProp } from "@react-navigation/core";
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { BUTTON_STYLES, BUTTON_WIDTH } from "../constants";
import { MainStackParamList } from "../NavigationParamList";

type ScreenTwoProps = {
  route: RouteProp<MainStackParamList, "Two">;
  navigation: FrameNavigationProp<MainStackParamList, "Two">;
};

/**
 * Second screen component that displays a message passed from navigation
 */
export function ScreenTwo({ navigation, route }: ScreenTwoProps) {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <gridLayout rows="*,auto,auto,*,auto,100">
      <label row="1" className="text-3xl text-center">
        You're viewing screen two!
      </label>
      <label row="2" className="text-3xl text-center my-5">
        Message: {route.params.message}
      </label>
      <button row="4" className={BUTTON_STYLES.SECONDARY} width={BUTTON_WIDTH} onTap={handleGoBack}>
        Go back
      </button>
    </gridLayout>
  );
}
