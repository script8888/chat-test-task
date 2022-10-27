import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const Chat = () => {
  const [userMessage, setUserMessage] = useState("");

  return (
    <div className="chat_parent">
      <div className="chat_container">
        <div className="chat_message_container">
          <div className="chat_messageGrandParent">
              <div
                className="chat_messageParent"
              >
                <div className="chat_message_user">name</div>
                <div className="chat_message_text">user</div>
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
          <Button colorScheme="teal" size="sm">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
