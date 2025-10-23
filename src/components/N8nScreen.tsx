import { Dialogs } from "@nativescript/core";
import { RouteProp } from "@react-navigation/core";
import * as React from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";

import { BUTTON_STYLES, BUTTON_WIDTH } from "../constants";
import { MainStackParamList } from "../NavigationParamList";
import { getN8nConfig, triggerN8nWebhook, callN8nWebhook } from "../utils";

type N8nScreenProps = {
  route: RouteProp<MainStackParamList, "N8n">;
  navigation: FrameNavigationProp<MainStackParamList, "N8n">;
};

/**
 * n8n integration screen for demonstrating workflow automation
 */
export function N8nScreen({ navigation }: N8nScreenProps) {
  const handleShowConfig = () => {
    const config = getN8nConfig();
    const configInfo = `n8n Configuration:\n\nWebhook URL: ${config.webhookUrl}\nAPI Endpoint: ${config.apiEndpoint}\nConfigured: ${config.isConfigured ? "Yes" : "No"}`;
    Dialogs.alert(configInfo);
  };

  const handleTriggerWebhook = async () => {
    try {
      const result = await triggerN8nWebhook("test-webhook", {
        source: "Vision Pro React NativeScript",
        timestamp: new Date().toISOString(),
        message: "Test webhook trigger from mobile app",
      });

      if (result.success) {
        Dialogs.alert({
          title: "Success",
          message: "n8n webhook triggered successfully!",
          okButtonText: "OK",
        });
      } else {
        Dialogs.alert({
          title: "Error",
          message: `Failed to trigger webhook: ${result.error}`,
          okButtonText: "OK",
        });
      }
    } catch (error) {
      Dialogs.alert({
        title: "Error",
        message: `Unexpected error: ${error instanceof Error ? error.message : "Unknown error"}`,
        okButtonText: "OK",
      });
    }
  };

  const handleCallWebhook = async () => {
    try {
      const result = await callN8nWebhook("test-webhook");

      if (result.success) {
        Dialogs.alert({
          title: "Success",
          message: `n8n webhook called successfully!\n\nResponse: ${JSON.stringify(result.data, null, 2)}`,
          okButtonText: "OK",
        });
      } else {
        Dialogs.alert({
          title: "Error",
          message: `Failed to call webhook: ${result.error}`,
          okButtonText: "OK",
        });
      }
    } catch (error) {
      Dialogs.alert({
        title: "Error",
        message: `Unexpected error: ${error instanceof Error ? error.message : "Unknown error"}`,
        okButtonText: "OK",
      });
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <gridLayout rows="*,auto,auto,auto,auto,auto,*,auto,100">
      <label row="1" className="text-3xl text-center font-bold">
        n8n Integration
      </label>
      <label row="2" className="text-xl text-center my-3 px-4">
        Connect to n8n workflow automation
      </label>
      <button
        row="3"
        className={BUTTON_STYLES.SECONDARY}
        width={BUTTON_WIDTH}
        onTap={handleShowConfig}
      >
        Show n8n Config
      </button>
      <button
        row="4"
        className={BUTTON_STYLES.SECONDARY}
        width={BUTTON_WIDTH}
        onTap={handleTriggerWebhook}
      >
        Trigger Webhook (POST)
      </button>
      <button
        row="5"
        className={BUTTON_STYLES.SECONDARY}
        width={BUTTON_WIDTH}
        onTap={handleCallWebhook}
      >
        Call Webhook (GET)
      </button>
      <button row="7" className={BUTTON_STYLES.SECONDARY} width={BUTTON_WIDTH} onTap={handleGoBack}>
        Go back
      </button>
    </gridLayout>
  );
}
