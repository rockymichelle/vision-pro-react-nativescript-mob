/**
 * Common constants used throughout the application
 */

export const THEME = {
  HEADER_BACKGROUND: "white",
} as const;

export const BUTTON_STYLES = {
  PRIMARY: "rounded-full text-3xl p-5 my-5",
  SECONDARY: "rounded-full text-2xl p-5",
} as const;

export const BUTTON_WIDTH = 300;

export const MESSAGES = {
  ALERT_TAPPED: "Tapped!",
  DEFAULT_MESSAGE: "Hello, world!",
} as const;

/**
 * VR-specific configuration constants
 */
export const VR_CONFIG = {
  APPLE_VISION_PRO: {
    DISPLAY_NAME: "Apple Vision Pro",
    IMMERSIVE_MODE_ENABLED: true,
    SPATIAL_AUDIO_ENABLED: true,
  },
  ANDROID_VR: {
    DISPLAY_NAME: "Android VR",
    IMMERSIVE_MODE_ENABLED: true,
    SPATIAL_AUDIO_ENABLED: true,
  },
} as const;

export const VR_MESSAGES = {
  VR_ENABLED: "VR Mode Enabled",
  VR_DISABLED: "VR Mode Not Available",
  ENTER_VR: "Enter VR Experience",
  EXIT_VR: "Exit VR Experience",
  VR_PLATFORM_DETECTED: "VR Platform Detected:",
} as const;
