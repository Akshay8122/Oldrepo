import "./App.css";
import store from "./redux/store";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
