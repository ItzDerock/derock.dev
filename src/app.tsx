import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import SnakeLoading from "./components/SnakeLoading";
import Navbar from "./partials/Navbar";
import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Navbar />

          <Suspense fallback={<SnakeLoading />}>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
