# Angular WebCLI

## 📋 Task Overview

This is an Angular-based task that creates an interactive web terminal to demonstrate and practice Angular CLI commands. The application simulates a command-line interface in the browser where users can type Angular CLI commands and see realistic, animated output responses.

## ✨ Key Features

- **Interactive Command Input**: Users can type commands and press Enter to execute them
- **Animated Terminal Output**: Command results appear progressively with timed delays between lines
- **Command Reference Panel**: A persistent side panel shows all supported commands with descriptions
- **Auto-scrolling**: The terminal automatically scrolls to display new output as it appears
- **Clear Screen Functionality**: Users can clear the terminal using the `cls` command
- **Error Handling**: Unknown commands display appropriate error messages
- **Educational Explanations**: Each command includes explanations of what it does
- **Terminal Aesthetics**: Authentic terminal appearance with block cursor and classic styling

## 📝 Supported Commands

| Command | Description |
|---------|-------------|
| `ng new my-app` | Creates a new Angular application with complete project structure |
| `cd my-app` | Changes directory to the my-app folder |
| `cd childDir` | Changes directory to the childDir folder |
| `ng generate component my-comp` | Generates a new Angular component |
| `ng g c my-comp` | Shorthand for generating a component |
| `ng build` | Builds the Angular application for production |
| `ng serve` | Starts the development server |
| `ng test` | Runs unit tests |
| `cls` | Clears the terminal screen |

## 🎮 How It Works

1. Users type a command in the terminal input field
2. Pressing Enter executes the command
3. The command prompt displays with the entered command
4. Output appears line-by-line with 200ms delays between each line
5. After all output is displayed, an explanation and success message appear
6. The terminal automatically scrolls to keep the latest output visible
7. Users can refer to the side panel for available commands at any time
