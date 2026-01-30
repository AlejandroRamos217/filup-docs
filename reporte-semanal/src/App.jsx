import { useState } from "react";
import Layout from "./components/layout/Layout";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/dashboard/Login";
import { AnimatePresence } from "framer-motion";


const App = () => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("auth") === "true"
  );

  return (
    <AnimatePresence mode="wait">
      {!isAuth ? (
        <Login key="login" onLogin={() => setIsAuth(true)} />
      ) : (
        <Layout key="app">
          <Dashboard />
        </Layout>
      )}
    </AnimatePresence>
  );
};


export default App;