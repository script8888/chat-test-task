import { useStoreState } from "easy-peasy";
import InputName from "./Components/InputName";
import Chat from "./Components/Chat";
import "./styles/App.css";

const App = () => {
  const isLoggedIn = useStoreState((state) => state.input.isLoggedIn);

  return <>{!isLoggedIn ? <InputName /> : <Chat />}</>;
};

export default App;
