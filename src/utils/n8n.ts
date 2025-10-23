/**
 * n8n integration utilities for workflow automation
 */

import { Http } from "@nativescript/core";

import { N8N_CONFIG } from "../constants";

/**
 * Interface for n8n webhook payload
 */
export interface N8nWebhookPayload {
  [key: string]: unknown;
}

/**
 * Interface for n8n response
 */
export interface N8nResponse {
  success: boolean;
  data?: unknown;
  error?: string;
}

/**
 * Sends data to an n8n webhook
 * @param webhookPath - The webhook path or full URL
 * @param payload - The data to send to the webhook
 * @returns Promise with the response from n8n
 */
export async function triggerN8nWebhook(
  webhookPath: string,
  payload: N8nWebhookPayload
): Promise<N8nResponse> {
  try {
    // Determine if webhookPath is a full URL or just a path
    const webhookUrl = webhookPath.startsWith("http")
      ? webhookPath
      : `${N8N_CONFIG.WEBHOOK_URL}/${webhookPath}`;

    const response = await Http.request({
      url: webhookUrl,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      content: JSON.stringify(payload),
      timeout: N8N_CONFIG.REQUEST_TIMEOUT,
    });

    if (response.statusCode >= 200 && response.statusCode < 300) {
      return {
        success: true,
        data: response.content ? JSON.parse(response.content.toString()) : null,
      };
    } else {
      return {
        success: false,
        error: `HTTP ${response.statusCode}: ${response.content?.toString() || "Unknown error"}`,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Sends a GET request to an n8n webhook
 * @param webhookPath - The webhook path or full URL
 * @returns Promise with the response from n8n
 */
export async function callN8nWebhook(webhookPath: string): Promise<N8nResponse> {
  try {
    // Determine if webhookPath is a full URL or just a path
    const webhookUrl = webhookPath.startsWith("http")
      ? webhookPath
      : `${N8N_CONFIG.WEBHOOK_URL}/${webhookPath}`;

    const response = await Http.request({
      url: webhookUrl,
      method: "GET",
      timeout: N8N_CONFIG.REQUEST_TIMEOUT,
    });

    if (response.statusCode >= 200 && response.statusCode < 300) {
      return {
        success: true,
        data: response.content ? JSON.parse(response.content.toString()) : null,
      };
    } else {
      return {
        success: false,
        error: `HTTP ${response.statusCode}: ${response.content?.toString() || "Unknown error"}`,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Checks if n8n is configured with a valid webhook URL
 * @returns True if n8n webhook URL is configured, false otherwise
 */
export function isN8nConfigured(): boolean {
  return (
    N8N_CONFIG.WEBHOOK_URL !== "https://your-n8n-instance.com/webhook" &&
    N8N_CONFIG.WEBHOOK_URL.length > 0
  );
}

/**
 * Gets the current n8n configuration
 * @returns The current n8n configuration object
 */
export function getN8nConfig() {
  return {
    webhookUrl: N8N_CONFIG.WEBHOOK_URL,
    apiEndpoint: N8N_CONFIG.API_ENDPOINT,
    isConfigured: isN8nConfigured(),
  };
}
