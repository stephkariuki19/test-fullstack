import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const currentUser = true;
  return (
    <BrowserRouter>

        <Topbar />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/post/:id" element={<Single />} />

            <Route
          path="/register"
          element={currentUser ? <Home /> : <Register />}
        />
        <Route
          path="/login"
          element={currentUser ? <Home /> : <Login />}
        />
        <Route
          path="/write"
          element={currentUser ? <Write /> : <Login />}
        />
        <Route
          path="/settings"
          element={currentUser ? <Settings /> : <Login />}
        />


        </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;