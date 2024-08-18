import React from "react";
import Home from "./home_page/Home"
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App()
{
  const user=true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Navigate to="/register"/>}/>
      </Routes>
      <Routes>
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/"/>}/>
      </Routes>
      <Routes>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/"/>}/>
      </Routes>
      {user && (<>
        <Routes>
          <Route path="/movies" element={<Home type="movies" />}/>
        </Routes>
        <Routes>
          <Route path="/series" element={<Home type="series" />}/>
        </Routes>
        <Routes>
          <Route path="/watch" element={<Watch />}/>
        </Routes>
      </>)
      }
    </Router>
  );
}

export default App;