import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Posts from "./pages/Posts";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    Boolean(localStorage.getItem("Token"))
  );

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Posts onLogout={() => setIsLoggedIn(false)} />
            ) : (
              <Login onLogin={() => setIsLoggedIn(true)} />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
