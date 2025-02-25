# Tic Tac Toe Game

A simple Tic Tac Toe game built with React and Tailwind CSS. This project demonstrates the use of modern React tools and best practices, including functional components, hooks, and component composition.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)

## Features

- **Interactive Gameplay:** Players take turns marking the board until a win condition is met.
- **Dynamic Winner Detection:** Automatically checks for winning combinations after each move.
- **Responsive UI:** Styled with Tailwind CSS for a clean, responsive design.
- **Reset Functionality:** Allows players to reset the board and start a new game.

## Technologies Used

- **React Functional Components:**  
  The application is built using React functional components for a modern and declarative approach to UI development.

- **React Hooks:**

  - **`useState`:** Manages local component state for the current player, game board state, and winner.
  - **`useEffect`:** Executes side effects, such as checking for a winner whenever the game state changes.

- **JSX (JavaScript XML):**  
  JSX is used throughout the project to create a clean and intuitive component structure.

- **Component Composition:**  
  The project is broken down into small, reusable components:

  - **`TicTacToe`:** The main component that holds the game logic.
  - **`Board`:** Renders the grid of game tiles by mapping over the game state.
  - **`Tile`:** Represents each individual game cell.

- **Event Handling:**  
  Click events are handled on tiles and buttons to manage game interactions.

- **Conditional Rendering:**  
  The winner announcement modal is conditionally rendered only when a winner is detected.

- **Array Mapping:**  
  The `Board` component uses the array `map` function to dynamically generate `Tile` components based on the game state.

- **Tailwind CSS:**  
  Utility-first CSS framework used for styling components with responsive design and a modern aesthetic.
