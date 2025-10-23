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
 * WebContainer-related constants
 */
export const WEBCONTAINER = {
  ENABLED: process.env.WEBCONTAINER === "1",
  NODE_VERSION: "18",
  ENVIRONMENT: process.env.NODE_ENV || "development",
} as const;
