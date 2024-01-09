import { randomWords } from "./random-words";
/**
 * Generates a square board for the memory game.
 * The board will have a total of size x size squares.
 * 
 * @param size The length of one side of the square board. Must be an even number
 *             and greater than or equal to 2, as the total number of squares must be even.
 * @throws Will throw an error if the size is less than 2 or if the total number of squares is odd.
 * @returns A two-dimensional array representing the square board.
 */
export function generateMemoryBoard(size: number) {
  const totalSquares = size * size;

  if (size < 2) {
    throw new Error("Size must be greater than or equal to 2.");
  }
  if (totalSquares % 2 !== 0) {
    throw new Error("Total number of squares must be even.");
  }

  const requiredWords = totalSquares / 2;
  const words = [];
  for (let i = 0; i < requiredWords; i++) {
    const randomWordIndex = getRandomNumberInRange(0, randomWords.length);
    words.push(randomWords[randomWordIndex]);
    words.push(randomWords[randomWordIndex]);
  }
  
  shuffleArray(words);
  let board = [];
  for (let i = 0; i < size; i++) {
    board[i] = words.slice(i * size, (i + 1) * size);
  }

  return board;
}

function getRandomNumberInRange(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}