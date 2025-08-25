# Typescript FiveM Resource Template

This is a simple TypeScript template designed for creating FiveM game resources, featuring esbuild for efficient compilation.

It allows you to structure your codebase into client, server, and common modules, ensuring a clear separation of concerns and reusability.

## Features

- **Speedy compilation with esbuild**. A '.yarn.installed' file is generated to ensure FXServer won't attempt to rebuild during start-up.
- **Type-safe FiveM natives** with [@nativewrappers/fivem](https://github.com/nativewrappers/fivem) - provides full TypeScript support, IntelliSense, and runtime safety for all FiveM and GTA V native functions.
- **Automatic fxmanifest.lua file generation** during build by leveraging the fxmanifest.json and package.json files.
- **Automatic build on file changes** on dev mode (still requires module to be restarted).
- **Logger helper class** with different log levels for dev/prod environments (set 'env' metadata on fxmanifest.json).

## Code Quality & Development Tools

### Biome.js Linter & Formatter
This template uses [Biome.js](https://biomejs.dev) as the linter and formatter, providing fast and reliable code quality enforcement with zero configuration.

**Recommended**: Install the Biome VS Code extension for seamless integration:
- Open VS Code
- Go to Extensions (Ctrl+Shift+X)
- Search for "Biome" and install the official extension by Biome
- The extension will automatically format and lint your code as you type

## Prerequisites

Ensure you have at least Node v22.10.0 installed.

This template uses **Bun** as the package manager and runtime. Bun is a fast all-in-one JavaScript runtime with a native bundler, test runner, and package manager.

For installation guide, visit [bun.sh](https://bun.sh/docs/installation).

## Installation

1. Clone the repository:
```bash
    git clone https://github.com/tfxhub/ts-fivem-template.git
    cd ts-fivem-template
```
2. Install dependencies:
```bash
    bun install
```
3. Run dev or build to generate files:
```bash
    bun dev
    // or
    bun build
```

## Usage

- **Development**: Run `bun dev` to start the development build with watch mode (automatic build on file changes).
- **Production Build**: Run `bun run build` to compile your resources for production use, optimizing for performance.
- **Type Generation**: Run `bun types` to generate TS declaration files (.d.ts) inside ./types directory.
- **Clearing Build Files**: Use `bun clear` to remove all generated files, keeping your workspace clean when necessary.
- **Linting**: Run `bun lint` to check and auto-fix code style issues.
- **Formatting**: Run `bun format` to format your code according to the project's style guide.

### Directory Structure

- `src/client`: Client-side scripts with access to @citizenfx/client types.
- `src/server`: Server-side scripts with access to @citizenfx/server types.
- `src/common`: Common scripts that can be used on both client and server.
- `bin`: Contains scripts for managing build process and types generation.

## Contributing

Contributions are welcome! If you have a feature request, bug report, or a pull request, please feel free to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
