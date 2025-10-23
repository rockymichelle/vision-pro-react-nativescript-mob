import { RouteProp } from "@react-navigation/core";
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { BUTTON_STYLES, BUTTON_WIDTH, VR_CONFIG, VR_MESSAGES } from "../constants";
import { MainStackParamList } from "../NavigationParamList";
import {
  VRPlatform,
  detectVRPlatform,
  isAndroidVR,
  isAppleVisionPro,
} from "../utils/vrDetection";

type VRScreenProps = {
  route: RouteProp<MainStackParamList, "VRExperience">;
  navigation: FrameNavigationProp<MainStackParamList, "VRExperience">;
};

/**
 * VR Experience screen component for immersive VR experiences
 * Supports both Apple Vision Pro and Android VR platforms
 */
export function VRScreen({ navigation }: VRScreenProps) {
  const [vrPlatform, setVrPlatform] = React.useState<VRPlatform>(
    VRPlatform.NONE
  );
  const [isImmersiveMode, setIsImmersiveMode] = React.useState(false);

  React.useEffect(() => {
    const platform = detectVRPlatform();
    setVrPlatform(platform);
  }, []);

  const handleToggleImmersiveMode = () => {
    setIsImmersiveMode(!isImmersiveMode);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const getPlatformConfig = () => {
    if (isAppleVisionPro()) {
      return VR_CONFIG.APPLE_VISION_PRO;
    }
    if (isAndroidVR()) {
      return VR_CONFIG.ANDROID_VR;
    }
    return null;
  };

  const platformConfig = getPlatformConfig();
  const platformName = platformConfig?.DISPLAY_NAME || "Standard Mobile";

  return (
    <gridLayout rows="*,auto,auto,auto,auto,auto,*,auto,100">
      <label row="1" className="fas text-3xl text-center leading-8" height="40">
        &#xf06e; VR Experience
      </label>

      <label row="2" className="text-2xl text-center my-3">
        {VR_MESSAGES.VR_PLATFORM_DETECTED}
      </label>

      <label row="3" className="text-3xl font-bold text-center my-3">
        {platformName}
      </label>

      {vrPlatform !== VRPlatform.NONE ? (
        <>
          <label row="4" className="text-xl text-center my-2">
            {isImmersiveMode
              ? VR_MESSAGES.VR_ENABLED
              : VR_MESSAGES.VR_DISABLED}
          </label>

          <button
            row="5"
            className={BUTTON_STYLES.PRIMARY}
            width={BUTTON_WIDTH}
            onTap={handleToggleImmersiveMode}
          >
            {isImmersiveMode
              ? VR_MESSAGES.EXIT_VR
              : VR_MESSAGES.ENTER_VR}
          </button>
        </>
      ) : (
        <label row="4" className="text-xl text-center my-2">
          VR not supported on this device
        </label>
      )}

      <button
        row="7"
        className={BUTTON_STYLES.SECONDARY}
        width={BUTTON_WIDTH}
        onTap={handleGoBack}
      >
        Go back
      </button>
    </gridLayout>
  );
}
