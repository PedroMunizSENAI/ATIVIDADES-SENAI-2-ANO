import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";
import Produto from "./components/Produtos";
import Estoque from "./pages/Estoque";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/estoque"
          element={
            <ProtectedRoute>
              <Estoque />
            </ProtectedRoute>
          }
        />

        <Route
          path="/produto/novo"
          element={
            <ProtectedRoute>
              <Produto />
            </ProtectedRoute>
          }
        />

        <Route
          path="/produto/:id"
          element={
            <ProtectedRoute>
              <Produto />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
