# Typescript FiveM Resource Template

This is a simple TypeScript template designed for creating FiveM game resources, featuring esbuild for efficient compilation.

It allows you to structure your codebase into client, server, and common modules, ensuring a clear separation of concerns and reusability.

## Features

- Speedy compilation with esbuild. A '.yarn.installed' file is generated to ensure FXServer won't attempt to rebuild during start-up.
- Automatic build on file changes on dev mode (still requires module to be restarted).
- Automatic fxmanifest.lua file generation during build by leveraging the fxmanifest.json and package.json files.
- Logger helper class with different log levels for dev/prod environments (set 'env' metadata on fxmanifest.json).

## Prerequisites

Ensure you have at least Node v16.9.1 installed. LTS version is recommended.

It is also recommended to install **pnpm** over npm or yarn, but feel free to make usage of any package manager of personal preference.
```bash 
npm install -g pnpm
 ```
    
When using pnpm, files inside node_modules are cloned or hard linked from a single content-addressable storage, which makes it very efficient when managing resources that make use of the same dependencies.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/tfxhub/ts-fivem-template.git
    cd ts-fivem-template
    ```
2. Install dependencies:
    ```bash
    pnpm i
    ```
3. Run dev or build to generate files:
    ```bash
    pnpm dev
    // or
    pnpm build
    ```

## Usage

- **Development**: Run `pnpm dev` to start the development build with watch mode (automatic build on file changes).
- **Production Build**: Run `pnpm build` to compile your resources for production use, optimizing for performance.
- **Type Generation**: Run `pnpm types` to generate TS declaration files (.d.ts) inside ./types directory.
- **Clearing Build Files**: Use `pnpm clear` to remove all generated files, keeping your workspace clean when necessary.

### Directory Structure

- `src/client`: Client-side scripts with access to @citizenfx/client types.
- `src/server`: Server-side scripts with access to @citizenfx/server types.
- `src/common`: Common scripts that can be used on both client and server.
- `bin`: Contains scripts for managing build process and types generation.

## Contributing

Contributions are welcome! If you have a feature request, bug report, or a pull request, please feel free to contribute.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
