import { Device, isAndroid, isIOS } from "@nativescript/core";

/**
 * VR platform types supported by the application
 */
export enum VRPlatform {
  APPLE_VISION_PRO = "AppleVisionPro",
  ANDROID_VR = "AndroidVR",
  NONE = "None",
}

/**
 * Detects if the current device supports VR capabilities
 * @returns The VR platform type
 */
export function detectVRPlatform(): VRPlatform {
  if (isIOS) {
    // Check if running on visionOS (Apple Vision Pro)
    // visionOS identifies as iOS but with specific device characteristics
    const deviceType = Device.deviceType;
    const osVersion = Device.osVersion;

    // Vision Pro detection: visionOS typically has specific identifiers
    // This is a simplified check; real implementation may need more specific detection
    if (deviceType === "Tablet" || osVersion.startsWith("1.")) {
      return VRPlatform.APPLE_VISION_PRO;
    }
  }

  if (isAndroid) {
    // Check for Android VR capabilities (ARCore, Daydream, etc.)
    // This would require checking for VR services availability
    // Simplified check for Android VR support
    return VRPlatform.ANDROID_VR;
  }

  return VRPlatform.NONE;
}

/**
 * Checks if VR is supported on the current platform
 * @returns true if VR is supported, false otherwise
 */
export function isVRSupported(): boolean {
  return detectVRPlatform() !== VRPlatform.NONE;
}

/**
 * Checks if running on Apple Vision Pro
 * @returns true if on Vision Pro, false otherwise
 */
export function isAppleVisionPro(): boolean {
  return detectVRPlatform() === VRPlatform.APPLE_VISION_PRO;
}

/**
 * Checks if running on Android VR
 * @returns true if on Android VR, false otherwise
 */
export function isAndroidVR(): boolean {
  return detectVRPlatform() === VRPlatform.ANDROID_VR;
}
