import Search from "./components/Search";
import Container from "./components/Container";
import Logo from "./components/Logo";
import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionFetchImagesList } from "./actions/data";

//main entry point
function App() {

  // react hook for dispatch action
  const dispatch = useDispatch();

  // value from reducer
  const search = useSelector((state) => state.searchValue);
  const page = useSelector((state) => state.page);
  // when the component is mounted
  useEffect(() => {
    dispatch(actionFetchImagesList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page]);

  return (
    <div className="App min-h-screen bg-blue-900">
      <Logo />
      <Search />
      <Container />
    </div>
  );
}

export default App;
