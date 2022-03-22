import {
  INCREMENT,
  DECREMENT,
  INPUT_TEXT,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE
} from "./types";

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

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: {
      text,
      id
    }
  }
}

export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: {
      text,
      id
    }
  }
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id
  }
}