import LogIn from "./pages/log-in";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
