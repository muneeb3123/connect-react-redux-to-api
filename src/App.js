import UsersComponent from "./usersComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./users/userSlice";

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  return (
    <UsersComponent />
  );
}

export default App;
