# Vision Pro React NativeScript Mobile App

A React NativeScript application demonstrating navigation and UI patterns optimized for Vision Pro and mobile platforms.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/gemsteamservices-web/vision-pro-react-nativescript-mob)

## 🚀 Features

- React-based NativeScript application
- Type-safe navigation with TypeScript
- Tailwind CSS styling
- Screen navigation with parameter passing
- **VR Integration** for Apple Vision Pro and Android VR
- Platform detection for VR capabilities
- Immersive VR experience screen
- Clean, maintainable code structure

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

## 📁 Project Structure

```
src/
├── app.ts              # Application entry point
├── constants.ts        # Shared constants and configuration
├── NavigationParamList.ts  # Type definitions for navigation
├── components/
│   ├── MainStack.tsx   # Main navigation stack
│   ├── ScreenOne.tsx   # First screen component
│   ├── ScreenTwo.tsx   # Second screen component
│   └── VRScreen.tsx    # VR experience screen
├── utils/
│   └── vrDetection.ts  # VR platform detection utilities
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
- Navigation to VR Experience screen
- Navigation to Screen Two

### Screen Two
- Displays passed message parameter
- Back navigation functionality

### VR Experience Screen
- **Apple Vision Pro Support**: Detects and enables visionOS capabilities
- **Android VR Support**: Detects and enables Android VR features
- Platform detection and display
- Toggle immersive VR mode
- Spatial audio and immersive space configuration
- Back navigation functionality

## 🥽 VR Integration

This application includes comprehensive VR support for both Apple and Android platforms:

### Apple Vision Pro (visionOS)
- Automatic detection of Apple Vision Pro devices
- Immersive space support for spatial computing
- Spatial audio configuration
- visionOS-specific UI optimizations

### Android VR
- Support for Android VR platforms (ARCore, Daydream)
- VR headtracking and mode capabilities
- Hardware feature detection
- VR service integration

### VR Detection Utilities
The app includes utilities in `src/utils/vrDetection.ts` for:
- Automatic platform detection (`detectVRPlatform()`)
- VR support checking (`isVRSupported()`)
- Platform-specific checks (`isAppleVisionPro()`, `isAndroidVR()`)

### VR Configuration
VR capabilities are configured in `nativescript.config.ts`:
- **Android**: VR mode and headtracking features
- **iOS/visionOS**: Immersive spaces and spatial audio

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration with strict mode
- `.eslintrc.json` - ESLint rules and settings
- `.prettierrc.json` - Prettier formatting rules
- `tailwind.config.js` - Tailwind CSS configuration

## 📄 License

Private
