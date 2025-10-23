# Contributing Guidelines

Thank you for your interest in contributing to the Vision Pro React NativeScript Mobile App!

## Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/btkcodedev/vision-pro-react-nativescript-mob.git
   cd vision-pro-react-nativescript-mob
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Code Quality Standards

This project enforces code quality through automated tools. Please ensure your changes pass all checks before submitting.

### Before Committing

Run the following commands to ensure code quality:

```bash
# Check TypeScript types
npm run type-check

# Check code formatting
npm run format:check

# Check linting rules
npm run lint
```

### Auto-fix Issues

```bash
# Auto-format code
npm run format

# Auto-fix linting issues
npm run lint:fix
```

## Code Style Guidelines

### TypeScript
- Use TypeScript strict mode
- Define proper types for all props and state
- Avoid using `any` type
- Use `const` instead of `let` when possible

### Component Structure
```typescript
import { /* imports */ } from "library";

// Type definitions
type ComponentProps = {
  // props
};

/**
 * Component description
 */
export function Component({ prop1, prop2 }: ComponentProps) {
  // Event handlers
  const handleEvent = () => {
    // logic
  };

  // Render
  return (
    // JSX
  );
}
```

### Constants
- Extract magic strings and numbers to `src/constants.ts`
- Use `as const` for constant objects
- Group related constants together

### Formatting
- Use double quotes for strings
- 2 spaces for indentation
- Semicolons required
- Line length: 100 characters max

## File Organization

```
src/
├── components/         # React components
│   ├── Component.tsx  # Component implementation
├── constants.ts       # Shared constants
├── NavigationParamList.ts  # Navigation types
└── app.ts            # Entry point
```

## Commit Messages

Follow conventional commit format:

```
type(scope): subject

body (optional)
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build process or auxiliary tool changes

**Examples:**
```
feat(navigation): add new screen component
fix(button): correct typo in className
docs(readme): update installation instructions
```

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes following the code style guidelines
3. Run all quality checks (type-check, lint, format)
4. Commit your changes with clear commit messages
5. Push to your branch and create a Pull Request
6. Address any review comments

## Questions?

If you have questions, please open an issue for discussion.
