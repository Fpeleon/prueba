import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "../Home";
import PokemonDetail from "../PokemonDetail";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/pokemon/:id",
      element: <PokemonDetail />,
    },
  ]);
  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
