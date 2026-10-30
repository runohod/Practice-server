import { HomePage } from "@/pages/homePage";
import { CharacterPage } from "@/pages/characterPage";
import { Route, Routes } from "react-router-dom";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/characters/:id", element: <CharacterPage /> },
];

export const AppRoutes = () => {
  return <Routes>{routes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)}</Routes>;
};

