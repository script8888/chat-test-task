import { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import InputName from "./Components/InputName";
import Chat from "./Components/Chat";
import "./styles/App.css";

const App = () => {
  const isLoggedIn = useStoreState((state) => state.input.isLoggedIn);
  const setMessage = useStoreActions((action) => action.chat.setMessages);
  const chats = useStoreState((state) => state.chat.messages);

  useEffect(() => {
    const messages = localStorage.messages
      ? JSON.parse(localStorage.messages)
      : null;

    if (messages) {
      setMessage(messages);
    } else {
      localStorage.setItem("messages", JSON.stringify([]));
      setMessage([]);
    }

    const checkStorage = () => {
      if (JSON.parse(localStorage.messages).length > chats.length) {
        setMessage(JSON.parse(localStorage.messages));
      }
    };

    window.addEventListener("storage", checkStorage);
  }, []);

  return <>{!isLoggedIn ? <InputName /> : <Chat />}</>;
};

export default App;
