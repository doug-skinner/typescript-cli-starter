# TypeScript CLI Starter

A production-ready starter kit for building command-line tools with TypeScript and Commander.js. Skip the boilerplate and jump straight into building your CLI application.

## Features

- **TypeScript** - Full type safety and modern JavaScript features
- **Commander.js** - Powerful CLI argument parsing and command handling
- **Chalk** - Beautiful terminal styling and colors
- **Ora** - Elegant terminal spinners for loading states
- **Development Mode** - Fast iteration with tsx (no build step needed)
- **Production Ready** - Compiles to optimized JavaScript for distribution
- **Example Commands** - Working commands to demonstrate patterns and styling

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or your preferred package manager

## Getting Started

### Using This Template

1. **Clone or use as template:**

   ```bash
   git clone https://github.com/doug-skinner/typescript-cli-starter.git my-cli-tool
   cd my-cli-tool
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Customize the project:**
   - Update [package.json](package.json) with your project name, description, and details
   - Rename the CLI command in the `bin` field
   - Update the program name in [src/index.ts](src/index.ts)

4. **Start developing:**

   ```bash
   npm run dev hello World
   ```

## Usage

### Development Mode

Run commands without building (uses tsx):

```bash
npm run dev <command> [arguments]
```

Example:

```bash
npm run dev hello Alice
# Output: Hello, Alice!
```

### Production Mode

Build and run the compiled version:

```bash
npm run build
npm start hello Bob
# Output: Hello, Bob!
```

### Example Commands

The starter includes sample commands demonstrating chalk and ora:

**Hello command** - Simple styled greeting:

```bash
# Basic greeting with chalk styling
npm run dev hello
# Output: Hello, World! (in colors)

# Custom name
npm run dev hello Alice
# Output: Hello, Alice! (in colors)

# With loading spinner
npm run dev hello Alice --spinner
# Shows a spinner, then displays the greeting
```

**Demo command** - Full showcase of chalk colors and ora spinners:

```bash
npm run dev demo
# Displays all available colors and spinner states
```

## Available Scripts

- `npm run dev` - Run CLI in development mode with tsx (no build needed)
- `npm run build` - Compile TypeScript to JavaScript in dist/
- `npm start` - Run the built CLI from dist/
- `npm run watch` - Watch mode for TypeScript compilation
- `npm test` - Run tests (placeholder, needs setup)

## Project Structure

```text
typescript-cli-starter/
├── src/
│   └── index.ts          # Main CLI entry point
├── dist/                  # Compiled output (generated)
├── package.json           # Project configuration
├── tsconfig.json          # TypeScript configuration
└── README.md             # This file
```

## Adding New Commands

To add a new command, edit [src/index.ts](src/index.ts):

```typescript
program
  .command('my-command')
  .description('Description of your command')
  .option('-f, --flag', 'Optional flag')
  .argument('<required>', 'Required argument')
  .action((required, options) => {
    // Your command logic here
    console.log(chalk.blue(`Required: ${required}, Flag: ${options.flag}`));
  });
```

### Using Chalk and Ora

**Chalk** - Add colors and styles to your output:

```typescript
import chalk from 'chalk';

console.log(chalk.green('Success!'));
console.log(chalk.red.bold('Error!'));
console.log(chalk.blue(`Hello ${chalk.yellow('World')}!`));
```

**Ora** - Show loading spinners:

```typescript
import ora from 'ora';

const spinner = ora('Loading...').start();

setTimeout(() => {
  spinner.succeed('Done!');
  // or spinner.fail('Failed!');
  // or spinner.warn('Warning!');
  // or spinner.info('Info!');
}, 2000);
```

## TypeScript Configuration

The project uses strict TypeScript settings for maximum type safety. See [tsconfig.json](tsconfig.json) for the full configuration.

Key features:

- Strict mode enabled
- ES2020 target
- Source maps for debugging
- Declaration files generated

## Publishing Your CLI

1. Update [package.json](package.json) with your details
2. Build the project: `npm run build`
3. Test locally: `npm link`
4. Publish: `npm publish`

Users can then install your CLI globally:

```bash
npm install -g your-cli-name
your-cli-name hello
```

## Technologies Used

- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Commander.js](https://github.com/tj/commander.js) - CLI framework
- [Chalk](https://github.com/chalk/chalk) - Terminal string styling
- [Ora](https://github.com/sindresorhus/ora) - Elegant terminal spinners
- [tsx](https://github.com/esbuild-kit/tsx) - TypeScript execution for development

## License

ISC

## Contributing

Feel free to submit issues or pull requests to improve this starter kit.
