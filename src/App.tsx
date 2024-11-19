import "./App.css";
import NavBar from "./components/NavBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { ReactNode } from "react";
import Login from "./pages/Login";
import { useIsLogin } from "./store/useLogin";

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  try {
    return <>{children}</>;
  } catch {
    return <div>Ha ocurrido un error</div>;
  }
};

function App() {
  const { isLogin } = useIsLogin();



  const Countries = lazy(() => import("./pages/Countries"));
  const Favoritos = lazy(() => import("./pages/Favoritos"));

  return (
    <>
      <Router>
        
        {isLogin ? (
          <NavBar/>
        ) : (
          <></>
        )}
        <Suspense fallback={<></>}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/countries" element={<Countries />} />
              <Route path="/favoritos" element={<Favoritos />} />
            </Routes>
          </ErrorBoundary>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
