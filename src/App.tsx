import { Suspense } from "react";
import AppRoutes from "./components/routes/AppRoutes";
import Spinner from "./components/library/spinner";
import "./App.css";

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <AppRoutes />
    </Suspense>
  );
};

export default App;
