import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SocialMedia from "./components/SocialMedia";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notfound from "./pages/Notfound";
import { useAuthContext } from "./hooks/useAuthContext";
import ProtectedRoute from "./utils/PrivateRoutes";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <>
      {authIsReady && (
        <div className="flex flex-col justify-between h-screen">
          <NavBar></NavBar>
          <div className="w-full grow">
            <Routes>
              <Route element={<ProtectedRoute user={user} />}>
                <Route path="/" element={<Home user={user} />} />
                <Route path="*" element={<Notfound />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
            </Routes>
          </div>
          <div className="col-span-2 mt-3  ">
            <SocialMedia />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
