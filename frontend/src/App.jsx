import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Footer} from "./Routs/index";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
