import Featured from "./components/featured/Featured";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import MailList from "./components/maillist/MailList";
import PropertyList from "./components/propertylist/PropertyList";
import Tickets from "./components/tickets/Tickets";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import List from "./pages/list/List";


function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" Component={Home}></Route>
      <Route path="/attractions" Component={Featured}></Route>
      <Route path="/attractions" Component={PropertyList}></Route>
      <Route path="/tickets" Component={Tickets}></Route>
      <Route path="/info" Component={MailList}></Route>
      <Route path="/login" Component={Login}></Route>
      <Route path="/register" Component={Signup}></Route> 
      <Route path="/list" Component={List}></Route> 
    </Routes>
      
    </>

  );
}

export default App;
