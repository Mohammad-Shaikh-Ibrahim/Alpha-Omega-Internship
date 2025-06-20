import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import AtomsCards from "./components/AtomCards";
import TemplatesCards from "./components/TemplatesCards";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
          <Header />
          <Section name="Atoms" />
          <AtomsCards />
          <Section name="Templates" />
          <TemplatesCards />
        </>
      ),
    },
  ],
  {
    basename: "/apple-pay", 
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
