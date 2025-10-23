# Vision Pro React NativeScript Mobile App

A React NativeScript application demonstrating navigation and UI patterns optimized for Vision Pro and mobile platforms.

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/gemsteamservices-web/vision-pro-react-nativescript-mob)

## 🚀 Features

- React-based NativeScript application
- Type-safe navigation with TypeScript
- Tailwind CSS styling
- Screen navigation with parameter passing
- Clean, maintainable code structure

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
- `Dockerfile` - Docker container configuration
- `.dockerignore` - Files to exclude from Docker builds

## 📄 License

Private
