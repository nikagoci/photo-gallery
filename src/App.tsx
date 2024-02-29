import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import HistoryPage from "./pages/HistoryPage";
import Navbar from "./components/Navbar";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

function Root() {
  return (
    <>
      <Navbar />

      <div>
        <Outlet />
      </div>
    </>
  );
}
