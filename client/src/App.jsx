import Home from "./pages/home/Home";
import Topbar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Context } from "./context/Context";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>

        <Topbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/post/:id" element={<Single />} />

            <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        />
        <Route
          path="/login"
          element={user ? <Home /> : <Login />}
        />
        <Route
          path="/write"
          element={user ? <Write /> : <Login />}
        />
        <Route
          path="/settings"
          element={user ? <Settings /> : <Login />}
        />


        </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;