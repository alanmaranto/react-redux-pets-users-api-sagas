import "./App.css";
import { petIncrement, petDecrement } from "./redux/actions/pets";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const petCounter = useSelector((state) => state.petCounter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>React Redux</h1>
      <button onClick={() => dispatch(petIncrement(5))}>Add pet</button>
      <button onClick={() => dispatch(petDecrement())}>Remove pet</button>
      <p>Pet Counter {petCounter}</p>
    </div>
  );
}

export default App;
