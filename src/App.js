import "./App.css";
import { useEffect } from "react";
import { petIncrement, petDecrement, getUsers } from "./redux/actions/pets";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const petCounter = useSelector((state) => state.petCounter);
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => dispatch(getUsers()), []);

  if (loading) {
    return "loading";
  }

  if (error) {
    return "error";
  }

  return (
    <div className="App">
      <h1>React Redux</h1>
      {users && users.map((user) => <h3 key={user.id}>{user.name}</h3>)}
      <button onClick={() => dispatch(petIncrement(5))}>Add pet</button>
      <button onClick={() => dispatch(petDecrement())}>Remove pet</button>
      <p>Pet Counter {petCounter}</p>
    </div>
  );
}

export default App;
