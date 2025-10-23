# WebContainer Integration Guide

This document provides detailed information about the WebContainer integration in this NativeScript React application.

## What is WebContainer?

WebContainer is a browser-based runtime that allows Node.js to run directly in the browser. It's the technology behind StackBlitz's instant dev experiences, enabling full-stack development without installing anything locally.

## Configuration Files

### `.stackblitzrc`

The main StackBlitz configuration file that enables WebContainer support:

```json
{
  "installDependencies": true,
  "compileTrigger": "save",
  "startCommand": "setup-nativescript-stackblitz && ns preview",
  "env": {
    "WEBCONTAINER": "1",
    "NODE_ENV": "development"
  },
  "webContainer": {
    "enabled": true,
    "autoInstallDependencies": true,
    "shell": {
      "workingDirectory": "/"
    }
  }
}
```

### `.webcontainerrc`

WebContainer-specific configuration for features and performance:

- **Node Version**: Specifies Node.js 18
- **File System**: Enables write operations and sync-on-save
- **Performance**: Caching, lazy loading, and memory optimization

### `turbo.json`

Build system configuration for optimized task execution:

- Defines build pipeline with proper dependencies
- Configures caching strategies
- Manages persistent tasks like dev servers

### `webpack.config.js`

Enhanced with WebContainer-specific optimizations:

- Disables minification in WebContainer mode for faster builds
- Configures code splitting for better performance
- Adjusts performance hints for browser environment

## Environment Detection

The project includes utilities to detect the runtime environment:

```typescript
import { isWebContainer, isStackBlitz, getEnvironmentType, ENV_CONFIG } from './utils/environment';

// Check if running in WebContainer
if (isWebContainer()) {
  console.log('Running in WebContainer mode');
}

// Check if running in StackBlitz (any mode)
if (isStackBlitz()) {
  console.log('Running in StackBlitz');
}

// Get environment type
const envType = getEnvironmentType(); // "webcontainer" | "native" | "preview"

// Use the configuration object
console.log(ENV_CONFIG);
// {
//   isWebContainer: boolean,
//   isStackBlitz: boolean,
//   environmentType: "webcontainer" | "native" | "preview",
//   isDevelopment: boolean,
//   isProduction: boolean
// }
```

## NPM Scripts

The project includes WebContainer-specific scripts:

```bash
# Start with WebContainer optimizations
npm run webcontainer:start

# Development mode with WebContainer
npm run webcontainer:dev

# Build for WebContainer environment
npm run webcontainer:build
```

## Features

### 1. Optimized Build Performance

- **Faster Builds**: Minification disabled in development for quicker rebuilds
- **Code Splitting**: Vendor chunks separated for better caching
- **No Performance Warnings**: Browser environment doesn't need bundle size warnings

### 2. Environment Awareness

The application can detect its runtime environment and adjust behavior accordingly:

```typescript
import { ENV_CONFIG } from './utils';

export function MyComponent() {
  if (ENV_CONFIG.isWebContainer) {
    // Special handling for WebContainer
    console.log('Optimizing for browser-based execution');
  }
  
  return <view>...</view>;
}
```

### 3. Demonstration UI

The main screen includes a button to display environment information, demonstrating the WebContainer detection in action.

## Best Practices

### 1. Conditional Logic

Use environment detection for conditional functionality:

```typescript
if (ENV_CONFIG.isWebContainer) {
  // Use browser-compatible APIs
} else {
  // Use native APIs
}
```

### 2. Performance Optimization

WebContainer environments benefit from:
- Smaller bundle sizes
- Lazy loading
- Efficient caching
- Minimal dependencies

### 3. Testing

Always test in both native and WebContainer environments to ensure compatibility.

## Troubleshooting

### Issue: Dependencies not installing

**Solution**: Check `.stackblitzrc` has `"autoInstallDependencies": true`

### Issue: Slow build times

**Solution**: Ensure `WEBCONTAINER=1` environment variable is set to enable optimizations

### Issue: Environment detection not working

**Solution**: Verify that environment variables are properly set in `.stackblitzrc`

## Advanced Configuration

### Custom Environment Variables

Add custom environment variables in `.stackblitzrc`:

```json
{
  "env": {
    "WEBCONTAINER": "1",
    "NODE_ENV": "development",
    "CUSTOM_VAR": "value"
  }
}
```

### Performance Tuning

Adjust webpack optimizations in `webpack.config.js` based on your needs:

```javascript
if (process.env.WEBCONTAINER === '1') {
  config.optimization = {
    // Custom optimization settings
  };
}
```

## Resources

- [StackBlitz WebContainer API Documentation](https://developer.stackblitz.com/platform/api/webcontainer-api)
- [NativeScript Documentation](https://docs.nativescript.org/)
- [Turbo Build System](https://turbo.build/)

## Support

For issues or questions about WebContainer integration, please check the project's issue tracker or refer to the main README.md.
