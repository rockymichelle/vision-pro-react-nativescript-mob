/**
 * Environment detection utilities for WebContainer support
 */

/**
 * Checks if the application is running in a WebContainer environment
 * @returns {boolean} True if running in WebContainer, false otherwise
 */
export function isWebContainer(): boolean {
  if (typeof process !== "undefined" && process.env) {
    return process.env.WEBCONTAINER === "1";
  }
  return false;
}

/**
 * Checks if the application is running in StackBlitz
 * @returns {boolean} True if running in StackBlitz, false otherwise
 */
export function isStackBlitz(): boolean {
  if (typeof process !== "undefined" && process.env) {
    return (
      process.env.STACKBLITZ === "1" ||
      (typeof window !== "undefined" && window.location?.hostname?.includes("stackblitz"))
    );
  }
  return false;
}

/**
 * Gets the current environment type
 * @returns {"webcontainer" | "native" | "preview"} The current environment
 */
export function getEnvironmentType(): "webcontainer" | "native" | "preview" {
  if (isWebContainer()) {
    return "webcontainer";
  }
  if (isStackBlitz()) {
    return "preview";
  }
  return "native";
}

/**
 * Environment configuration object
 */
export const ENV_CONFIG = {
  isWebContainer: isWebContainer(),
  isStackBlitz: isStackBlitz(),
  environmentType: getEnvironmentType(),
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
} as const;
