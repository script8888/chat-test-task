import { action } from "easy-peasy";

const chat = {
  messages: [],
  setMessages: action((state, payload) => {
    state.messages = payload;
  }),
};

export default chat;
