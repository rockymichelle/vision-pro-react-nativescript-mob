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

/**
 * n8n integration constants
 */
export const N8N_CONFIG = {
  // Default n8n webhook URL (can be overridden via environment variable)
  WEBHOOK_URL: process.env.N8N_WEBHOOK_URL || "https://your-n8n-instance.com/webhook",
  // Default n8n API endpoint (can be overridden via environment variable)
  API_ENDPOINT: process.env.N8N_API_ENDPOINT || "https://your-n8n-instance.com/api/v1",
  // Timeout for n8n requests in milliseconds
  REQUEST_TIMEOUT: 10000,
} as const;
