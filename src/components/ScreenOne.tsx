import { Dialogs } from "@nativescript/core";
import { RouteProp } from "@react-navigation/core";
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { BUTTON_STYLES, BUTTON_WIDTH, MESSAGES } from "../constants";
import { MainStackParamList } from "../NavigationParamList";
import { ENV_CONFIG } from "../utils";

type ScreenOneProps = {
  route: RouteProp<MainStackParamList, "One">;
  navigation: FrameNavigationProp<MainStackParamList, "One">;
};

/**
 * First screen component with alert and navigation functionality
 */
export function ScreenOne({ navigation }: ScreenOneProps) {
  const handleAlertTap = () => {
    Dialogs.alert(MESSAGES.ALERT_TAPPED);
  };

  const handleNavigateToTwo = () => {
    navigation.navigate("Two", { message: MESSAGES.DEFAULT_MESSAGE });
  };

  const handleShowEnvironment = () => {
    const envInfo = `Environment: ${ENV_CONFIG.environmentType}\nWebContainer: ${ENV_CONFIG.isWebContainer}\nStackBlitz: ${ENV_CONFIG.isStackBlitz}`;
    Dialogs.alert(envInfo);
  };

  return (
    <gridLayout rows="*,auto,auto,auto,*,auto,100">
      <label row="1" className="fas text-3xl text-center leading-8" height="40">
        &#xf135; You're viewing screen one!
      </label>
      <button row="2" className={BUTTON_STYLES.PRIMARY} width={BUTTON_WIDTH} onTap={handleAlertTap}>
        Tap me for an alert
      </button>
      <button
        row="3"
        className={BUTTON_STYLES.SECONDARY}
        width={BUTTON_WIDTH}
        onTap={handleShowEnvironment}
      >
        Show Environment Info
      </button>
      <button
        row="5"
        className={BUTTON_STYLES.SECONDARY}
        width={BUTTON_WIDTH}
        onTap={handleNavigateToTwo}
      >
        Go to next screen
      </button>
    </gridLayout>
  );
}
