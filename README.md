# Learn React Assignment

## 1. Introduction
This assignment consists of two components, each with a starting point located in the following files:
- `projects/part_1/CalculatorProject.tsx`
- `project/part_2/MemoryGameProject.tsx`  

Note that for styling and creating components, I **strongly** recommend using ChakraUI components. An example of their usage can be seen on the provided HomePage of the React App.

## 2. Getting Started
To begin working on the project, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine.
2. **Install Node and pnpm**: Ensure you have both Node.js and pnpm installed on your machine. (Note: pnpm is different from npm).
3. **Install Dependencies**: Run `pnpm install` in the root directory to install all required dependencies.
4. **Start the React Server**: Execute `pnpm run dev` to launch the React server. Once running, navigate to the displayed localhost URL in your browser to view the project.

## 3. Project 1: Calculator
Navigate to the 'Calculator' page using the navbar at the top of the React application. The starting point for this project is located at:
`ROOT/src/projects/part_1/CalculatorProject`

### Requirements for Project 1:
- Implement a white text field for numerical input, initialised with the value '0'.
- Place a "-" button to the left of this text field. Clicking this button should decrement the number in the input field by 1.
- Place a "+" button to the right of this text field. Clicking this button should increment the number in the input field by 1.
- Display a number below the input field representing the square of the number entered. For example, if '3' is entered, the number '9' should be displayed below.

## 4. Project 2: Memory Game
Navigate to the 'Memory Game' page using the navbar. The starting point for this project is located at:  
&nbsp;&nbsp;&nbsp;&nbsp;`ROOT/src/projects/part_2/MemoryGameProject`.  
The goal of this project is to implement a modified version of this memory game:  
https://webgamesonline.com/memory/  
with words instead of pictures.

### Requirements for Project 2:
- Initially, display an empty field and a 'Submit' button. Players must enter a number and press submit. The number squared must be even (e.g., 4 is valid as 4x4=16, but 3 is invalid as 3x3=9).
- Upon submitting a valid number, load the game.
- Generate an initial board state as a 2D array of words, where each word appears twice. The array's dimensions should be the input number by the input number. For example, with an input of 4, the board might look like:  
[  
&nbsp;&nbsp;&nbsp;&nbsp;["lively", "brake", "haircut", "stop"],  
&nbsp;&nbsp;&nbsp;&nbsp;["uneven", "action", "lively", "thoughtful"],  
&nbsp;&nbsp;&nbsp;&nbsp;["haircut", "brake", "uneven", "stop"],  
&nbsp;&nbsp;&nbsp;&nbsp;["action", "thoughtful", "lively", "uneven"]  
]  
- Each word appears exactly twice. You may use the provided function at  
`ROOT\src\helpers\memoryGameBoardGenerator.ts`  
to generate this board state.
- After generating the board state, start the game. Initially, players see a grid of words in squares with a "Ready" button. Pressing "Ready" hides the words, leaving the grid of squares.
- Players must then match pairs of boxes with identical words. If a player selects two boxes that do not match, the game ends, a new board state is generated, and the game restarts.
