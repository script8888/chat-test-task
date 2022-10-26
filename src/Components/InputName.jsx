import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const InputName = () => {
  const [name, setName] = useState("");

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
          colorScheme="teal"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default InputName;
