import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import {useStoreActions } from "easy-peasy";

const InputName = () => {
  const saveName = useStoreActions((action) => action.input.setName);
  const setLoggedIn = useStoreActions((action) => action.input.setIsLoggedIn);
  const [name, setName] = useState("");

  const login = () => {
    setLoggedIn(true);
    saveName(name);
  };

  return (
    <div className="input_parent">
      <div className="input_container">
        <h2 className="input_heading">Hello</h2>
        <Input
          className="input_element"
          value={name}
          placeholder="Name"
          onInput={(e) => setName(e.target.value)}
        />
        <Button
          //   isLoading
          //   loadingText="loading"
          onClick={login}
          colorScheme="teal"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default InputName;
