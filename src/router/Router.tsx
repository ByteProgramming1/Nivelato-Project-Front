import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";

export const AppRouter = () => {
  return (
    // Inicializamos un router
    <BrowserRouter>
      {/*
        Añadimos las rutas, definiendo la ruta en el navegador
        y el componente a renderizar en esa ruta, ejemplo:
        <Route path="/recipes" element={<RecipesPage />}
      */}
      <Routes>
        {/* Ruta para homepage */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};