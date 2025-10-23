import { NativeScriptConfig } from '@nativescript/core';

export default {
  id: 'org.nativescript.app',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none',
    // Android VR configuration
    vr: {
      enabled: true,
      // ARCore and VR service support
      usesFeatures: [
        'android.hardware.vr.headtracking',
        'android.software.vr.mode',
      ],
    },
  },
  ios: {
    // Apple Vision Pro / visionOS configuration
    visionOS: {
      enabled: true,
      // Spatial computing capabilities
      immersiveSpaces: true,
      spatialAudio: true,
    },
  },
} as NativeScriptConfig;
