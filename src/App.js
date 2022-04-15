import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import { Route, Routes } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import NotFound from "./components/NotFound/NotFound";
import Inventory from "./components/Inventory/Inventory";
import About from "./components/About/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/home" element={<Shop></Shop>}></Route>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      {/* <Shop></Shop> */}
    </div>
  );
}

export default App;
