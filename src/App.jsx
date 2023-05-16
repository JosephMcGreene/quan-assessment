import Header from "./components/Header";
import SelectionBox from "./components/SelectionBox";
import CircleDecoration from "./components/CircleDecoration";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <SelectionBox />
      <CircleDecoration diameter="200px" top="55%" left="-130px" />
      <CircleDecoration diameter="90px" top="25%" left="95%" />
    </>
  );
}
