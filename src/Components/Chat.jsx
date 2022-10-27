import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useStoreState, useStoreActions } from "easy-peasy";

const Chat = () => {
  const name = useStoreState((action) => action.input.name);
  const messages = useStoreState((action) => action.chat.messages);
  const setMessage = useStoreActions((action) => action.chat.setMessages);

  const [userMessage, setUserMessage] = useState("");

  const createNewMessage = (e) => {
    e.preventDefault();

    const newText = {
      id: Math.random(),
      text: userMessage,
      name: name,
    };

    const newMessageArray = [...messages, newText];

    setMessage(newMessageArray);

    localStorage.setItem("messages", JSON.stringify(newMessageArray));

    setUserMessage("");
  };

  return (
    <div className="chat_parent">
      <div className="chat_container">
        <div className="chat_message_container">
          <div className="chat_messageGrandParent">
            {messages.map((data) => (
              <div
                key={data.id}
                className="chat_messageParent"
                style={{
                  alignSelf: data.name === name ? "flex-end" : "flex-start",
                  backgroundColor: data.name === name ? "green" : "firebrick",
                }}
              >
                <div className="chat_message_user">{data.name}</div>
                <div className="chat_message_text">{data.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="chat_inputParent">
          <Input
            className="input_element"
            value={userMessage}
            placeholder="message..."
            onInput={(e) => setUserMessage(e.target.value)}
          />
          <Button onClick={createNewMessage} colorScheme="teal" size="sm">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
