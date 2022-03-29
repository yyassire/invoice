import "./app.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./Pages/home/Home";
import Login from "./Pages/Login/Login";
import CreateInvoice from "./Pages/createInvoice/CreateInvoice";
import InvoiceDetail from "./Pages/invoiceDetail/InvoiceDetail";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(localStorage.getItem("user") || null);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/new-invoice"
          element={user ? <CreateInvoice /> : <Navigate to="/login" />}
        />
        <Route
          path="/invoice/:id"
          element={user ? <InvoiceDetail /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
