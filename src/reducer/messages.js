import { getMessages } from "../static-data";
import _ from "lodash";
import { SEND_MESSAGE, DELETE_MESSAGE } from "../constants/action-types";

export default function messages(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return sendMessage(state, action);
    case DELETE_MESSAGE:
      return deleteMessage(state, action);
    default:
      return state;
  }

}

function sendMessage(state, action) {
  const { message, userId } = action.payload;
  const allUserMsgs = state[userId];
  const number = +_.keys(allUserMsgs).pop() + 1;

  return {
    ...state,
    [userId]: {
      ...allUserMsgs,
      [number]: {
        number,
        text: message,
        is_user_msg: true
      }
    }
  };
}

function deleteMessage(state, action) {
  const { number, userId } = action.payload;
  const allUserMsgs = state[userId];
  delete allUserMsgs[number];

  return {
    ...state,
    [userId]: {
      ...allUserMsgs
    }
  };
}
