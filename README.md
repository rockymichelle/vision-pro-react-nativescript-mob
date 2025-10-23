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

## 📦 Installation

```bash
npm install
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
├── constants.ts        # Shared constants and configuration
├── NavigationParamList.ts  # Type definitions for navigation
├── components/
│   ├── MainStack.tsx   # Main navigation stack
│   ├── ScreenOne.tsx   # First screen component
│   └── ScreenTwo.tsx   # Second screen component
├── utils/
│   ├── environment.ts  # Environment detection for WebContainer
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
- Navigation to Screen Two

### Screen Two
- Displays passed message parameter
- Back navigation functionality

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration with strict mode
- `.eslintrc.json` - ESLint rules and settings
- `.prettierrc.json` - Prettier formatting rules
- `tailwind.config.js` - Tailwind CSS configuration
- `.stackblitzrc` - StackBlitz configuration with WebContainer support
- `.webcontainerrc` - WebContainer-specific configuration
- `turbo.json` - Turbo build system configuration for optimized builds

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
