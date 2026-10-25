import { HomePage } from "@/pages/homePage";
import { CharacterPage } from "@/pages/characterPage";
import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters/:id" element={<CharacterPage />} />
    </Routes>
  );
};
