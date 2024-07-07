import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { checkUserStatus } from "./firebase";

import NewsFeed from "./components/NewsFeed";
import Login from "./components/Login";
import Signup from "./components/Signup";

import GlobalStyle from "./styled-components/GlobalStyle";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = checkUserStatus(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path="/login"
            element={user ? <Navigate to="/news" /> : <Login />}
          />
          <Route
            path="/signup"
            element={user ? <Navigate to="/news" /> : <Signup />}
          />
          <Route
            path="/news"
            element={user ? <NewsFeed /> : <Navigate to="/login" />}
          />
          <Route
            path="/"
            element={user ? <Navigate to="/news" /> : <Login />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
