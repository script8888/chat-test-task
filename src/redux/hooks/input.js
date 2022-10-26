import { action } from "easy-peasy";

const input = {
  isLoggedIn: false,
  setIsLoggedIn: action((state, payload) => {
    state.isLoggedIn = payload;
  }),
  name: "",
  setName: action((state, payload) => {
    state.name = payload;
  }),
};

export default input;
