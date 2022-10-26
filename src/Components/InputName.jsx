import { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

const InputName = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <div>
        <h2 className="input_heading">Hello</h2>
        <Input
          value={name}
          placeholder="Name"
          onInput={(e) => setName(e.target.value)}
        />
        <Button
          //   isLoading
          //   loadingText="loading"
          colorScheme="blue"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default InputName;
