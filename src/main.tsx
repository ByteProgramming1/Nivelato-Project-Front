import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Importamos los estilos globales, los que se van a usar en toda la app
import './assets/css/global.css'
import { AppRouter } from './router/Router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Router creado por nosotros donde definimos las rutas de nuestra app */}
    <AppRouter /> 
  </StrictMode>,
)
