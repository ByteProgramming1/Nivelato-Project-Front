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
        {/*
          Ruta para homepage donde:
          - path: ruta en el navegador
          - element: componente page que se renderizará en esa ruta
        */}
        <Route path="/" element={<HomePage />} />

        {/* Accede a la ruta "/hello" del navegador para ver esta página */}
        <Route path="/hello" element={<h1>Hello World!</h1>} />

        {/* Aquí puedes crear las rutas que necesites */}
        

      </Routes>
    </BrowserRouter>
  );
};