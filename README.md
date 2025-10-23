# Vision Pro React NativeScript Mobile App

A React NativeScript application demonstrating navigation and UI patterns optimized for Vision Pro and mobile platforms.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/gemsteamservices-web/vision-pro-react-nativescript-mob)

## 🚀 Features

- React-based NativeScript application
- Type-safe navigation with TypeScript
- Tailwind CSS styling
- Screen navigation with parameter passing
- Clean, maintainable code structure
- **WebContainer support** for browser-based development and execution
- **n8n integration** for workflow automation

## 📦 Installation

```bash
npm install
```

## 🐳 Docker

Build and run the application using Docker:

```bash
# Build the Docker image
docker build -t vision-pro-react-nativescript .

# Run the container
docker run vision-pro-react-nativescript
```

## 🛠️ Development Scripts

- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Automatically fix linting issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

### WebContainer Scripts

- `npm run webcontainer:start` - Start the application in WebContainer mode
- `npm run webcontainer:dev` - Run development mode with WebContainer support
- `npm run webcontainer:build` - Build the application for WebContainer environment

## 📁 Project Structure

```
src/
├── app.ts              # Application entry point
├── constants.ts        # Shared constants and configuration (including n8n)
├── NavigationParamList.ts  # Type definitions for navigation
├── components/
│   ├── MainStack.tsx   # Main navigation stack
│   ├── ScreenOne.tsx   # First screen component
│   ├── ScreenTwo.tsx   # Second screen component
│   └── N8nScreen.tsx   # n8n integration screen
├── utils/
│   ├── environment.ts  # Environment detection for WebContainer
│   ├── n8n.ts          # n8n integration utilities
│   └── index.ts        # Utility exports
└── fonts/              # Custom fonts
```

## 🎨 Code Quality

This project uses:
- **TypeScript** with strict mode for type safety
- **ESLint** for code linting
- **Prettier** for consistent code formatting
- **Tailwind CSS** for utility-first styling

## 📱 Screens

### Screen One
- Displays a welcome message
- Alert button demonstration
- Environment information display
- Navigation to n8n Integration screen
- Navigation to Screen Two

### Screen Two
- Displays passed message parameter
- Back navigation functionality

### n8n Integration Screen
- Show n8n configuration
- Trigger n8n webhooks with POST requests
- Call n8n webhooks with GET requests
- Demonstrates workflow automation capabilities

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration with strict mode
- `.eslintrc.json` - ESLint rules and settings
- `.prettierrc.json` - Prettier formatting rules
- `tailwind.config.js` - Tailwind CSS configuration
- `.stackblitzrc` - StackBlitz configuration with WebContainer support
- `.webcontainerrc` - WebContainer-specific configuration
- `turbo.json` - Turbo build system configuration for optimized builds

## 🔗 n8n Integration

This application includes built-in support for n8n workflow automation, allowing you to trigger workflows and exchange data with your n8n instance.

### Configuration

Configure n8n by setting environment variables:

```bash
# Set your n8n webhook URL
export N8N_WEBHOOK_URL="https://your-n8n-instance.com/webhook"

# Set your n8n API endpoint (optional)
export N8N_API_ENDPOINT="https://your-n8n-instance.com/api/v1"
```

Or configure it directly in `src/constants.ts`:

```typescript
export const N8N_CONFIG = {
  WEBHOOK_URL: "https://your-n8n-instance.com/webhook",
  API_ENDPOINT: "https://your-n8n-instance.com/api/v1",
  REQUEST_TIMEOUT: 10000,
} as const;
```

### Usage

The n8n integration utilities are available in `src/utils/n8n.ts`:

```typescript
import { triggerN8nWebhook, callN8nWebhook, getN8nConfig } from './utils';

// Trigger a webhook with POST data
const result = await triggerN8nWebhook('my-webhook', {
  message: 'Hello from mobile app',
  timestamp: new Date().toISOString()
});

// Call a webhook with GET request
const response = await callN8nWebhook('my-webhook');

// Check n8n configuration
const config = getN8nConfig();
console.log('n8n configured:', config.isConfigured);
```

### Features

- **Webhook Triggers**: Send data to n8n workflows via POST requests
- **Webhook Calls**: Fetch data from n8n workflows via GET requests
- **Configuration Check**: Verify n8n setup status
- **Error Handling**: Comprehensive error handling for failed requests
- **Timeout Control**: Configurable request timeout (default: 10 seconds)

### n8n Integration Screen

Access the n8n Integration screen from the main menu to:
- View current n8n configuration
- Test webhook triggers with sample data
- Test webhook calls to retrieve data
- Debug n8n connectivity issues

## 🌐 WebContainer Support

This project supports running in WebContainer environments (like StackBlitz), which allows Node.js to run directly in the browser. The following configurations enable this:

### Configuration Files

- **`.stackblitzrc`**: Enables WebContainer mode and sets environment variables
- **`.webcontainerrc`**: Defines WebContainer-specific features and performance settings
- **`turbo.json`**: Optimizes build pipeline for WebContainer execution
- **`webpack.config.js`**: Includes WebContainer-aware optimizations

### Environment Detection

The project includes environment detection utilities in `src/utils/environment.ts`:

```typescript
import { isWebContainer, ENV_CONFIG } from './utils';

// Check if running in WebContainer
if (isWebContainer()) {
  console.log('Running in WebContainer mode');
}

// Access environment configuration
console.log(ENV_CONFIG.environmentType); // "webcontainer" | "native" | "preview"
```

### WebContainer Features

- **Optimized Builds**: Faster builds with disabled minification in development
- **Lazy Loading**: Efficient module loading for better performance
- **Memory Optimization**: Reduced memory footprint for browser execution
- **Cache Support**: Intelligent caching for faster rebuilds

## 📄 License

Private
