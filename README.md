# TypeScript CLI Starter

A production-ready starter kit for building command-line tools with TypeScript and Commander.js. Skip the boilerplate and jump straight into building your CLI application.

## Features

- **TypeScript** - Full type safety and modern JavaScript features
- **Commander.js** - Powerful CLI argument parsing and command handling
- **Development Mode** - Fast iteration with tsx (no build step needed)
- **Production Ready** - Compiles to optimized JavaScript for distribution
- **Example Command** - Working "hello" command to demonstrate the pattern

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

### Example Command

The starter includes a sample "hello" command:

```bash
# With default argument
npm run dev hello
# Output: Hello, World!

# With custom name
npm run dev hello Alice
# Output: Hello, Alice!
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
    console.log(`Required: ${required}, Flag: ${options.flag}`);
  });
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
- [tsx](https://github.com/esbuild-kit/tsx) - TypeScript execution for development

## License

ISC

## Contributing

Feel free to submit issues or pull requests to improve this starter kit.
