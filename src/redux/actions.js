import { INCREMENT, DECREMENT, INPUT_TEXT } from "./types";


export function increase() {
  return {
    type: INCREMENT
  }
}

export function decrease() {
  return {
    type: DECREMENT
  }
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text
  }
}


