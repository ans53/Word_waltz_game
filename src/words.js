// words.js
const words = [
  "apple", "banana", "orange", "grape", "mango", "pineapple", "strawberry",
  "computer", "laptop", "keyboard", "monitor", "mouse", "printer",
  "river", "mountain", "forest", "desert", "ocean", "island",
  "sun", "moon", "star", "planet", "galaxy", "universe",
  "car", "bus", "train", "airplane", "bicycle", "motorcycle",
  "dog", "cat", "lion", "tiger", "elephant", "giraffe", "zebra",
  "book", "pen", "pencil", "paper", "notebook", "bag",
  "red", "blue", "green", "yellow", "black", "white", "purple",
  "happy", "sad", "angry", "excited", "scared", "surprised"
];

export function randomWords(){
    const randomIndex=Math.floor(Math.random()*words.length);
    return words[randomIndex]
}
