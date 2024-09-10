import LogIn from "./pages/log-in";
import Home from "./pages/home";
import SignUp from "./pages/sign-up";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./context/auth-context";

const App = () => {
  const { authUser, isLoading } = useAuthContext();
if(isLoading) return null
  return (
    <div className="p-4 h-screen flex items-center">
      <Routes>
        <Route path="/" element={authUser?<Home />: <Navigate to= {"/login"}/>} />
        <Route path="/login" element={!authUser?<LogIn />:<Navigate to={"/"}/>} />
        <Route path="/signup" element={!authUser?<SignUp />: <Navigate to={"/"}} />
      </Routes>
    </div>
  );
};

export default App;
