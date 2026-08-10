# Nivel 0 — Introducción al frontend moderno

> 🟢 **Dificultad:** Solo lectura
> 📖 **Modalidad:** Exploración y teoría

Bienvenido al primer nivel del curso.

Antes de comenzar a modificar el proyecto, es importante entender qué estamos construyendo, qué papel cumple un frontend y cómo encajan las diferentes tecnologías que utilizaremos durante el recorrido.

En este nivel **no tienes que modificar código ni completar ningún reto**. La idea es que conozcas el contexto general del proyecto y puedas comenzar los siguientes niveles entendiendo qué estás viendo.

---

## ¿Qué es el frontend?

Cuando utilizamos una aplicación web normalmente existen dos grandes partes que trabajan juntas:

```text
┌─────────────────────┐
│       FRONTEND      │
│                     │
│  Lo que el usuario  │
│      visualiza      │
└──────────┬──────────┘
           │
           │ HTTP
           │
           ▼
┌─────────────────────┐
│       BACKEND       │
│                     │
│   Lógica, datos,    │
│   autenticación...  │
└─────────────────────┘
```

El **frontend** es la parte de una aplicación con la que interactúa directamente el usuario.

Se encarga, entre otras cosas, de:

* Mostrar información.
* Crear interfaces gráficas.
* Responder a las acciones del usuario.
* Navegar entre diferentes páginas.
* Validar información antes de enviarla.
* Consumir APIs.
* Mantener ciertos estados de la aplicación.
* Mostrar estados de carga y errores.

En este proyecto, el frontend será la interfaz de una aplicación de gestión de recetas.

---

## ¿Qué tecnologías utilizaremos?

Este proyecto utiliza varias tecnologías que cumplen diferentes responsabilidades.

### HTML

HTML define la estructura y el significado del contenido de una página.

Por ejemplo:

```html
<h1>Pizza de pepperoni</h1>
<p>Una receta clásica...</p>
```

En React normalmente trabajaremos con **JSX**, que nos permite escribir estructuras similares directamente dentro de nuestros componentes.

---

### CSS

CSS se encarga de la presentación visual de la aplicación:

* Colores.
* Tipografías.
* Espaciado.
* Tamaños.
* Posicionamiento.
* Animaciones.
* Diseño responsive.

En este proyecto los estilos se encuentran principalmente dentro de:

```text
src/assets/css/
```

No necesitas dominar CSS para comenzar el curso, pero sí es importante reconocer qué responsabilidad tiene.

---

### JavaScript

JavaScript permite agregar comportamiento a las páginas.

Por ejemplo:

```javascript
const recipes = ["Pizza", "Hamburguesa", "Pasta"];

const total = recipes.length;
```

En una aplicación real, JavaScript puede encargarse de responder a eventos, realizar cálculos, modificar estados y comunicarse con servidores.

---

### TypeScript

Durante este curso utilizaremos **TypeScript** en lugar de JavaScript directamente.

TypeScript agrega un sistema de tipos sobre JavaScript que nos permite describir qué tipo de información esperamos manejar.

Por ejemplo:

```ts
interface Recipe {
    id: string;
    name: string;
    description: string;
}
```

Esto permite que nuestro código tenga más información sobre la estructura de los datos con los que trabaja.

En el proyecto encontrarás estos tipos principalmente dentro de:

```text
src/types/
```

No necesitas conocer TypeScript completamente antes de comenzar. Durante los siguientes niveles iremos viendo cómo se utiliza dentro de React.

---

## ¿Qué es React?

**React** es una biblioteca de JavaScript utilizada para construir interfaces de usuario.

Una de sus ideas principales es dividir la interfaz en **componentes reutilizables**.

Por ejemplo, una aplicación de recetas podría tener:

```text
App
│
├── Navbar
│
├── RecipeList
│   ├── RecipeCard
│   ├── RecipeCard
│   └── RecipeCard
│
└── Footer
```

En lugar de construir toda la interfaz como una única pieza de código, podemos dividirla en partes pequeñas que tengan responsabilidades específicas.

Durante el curso aprenderás a crear, utilizar y combinar estos componentes.

---

## ¿Qué es Vite?

**Vite** es la herramienta que utilizaremos para crear y ejecutar nuestro proyecto frontend durante el desarrollo.

Se encarga de proporcionar, entre otras cosas:

* Servidor de desarrollo.
* Recarga rápida de cambios.
* Configuración del proyecto.
* Proceso de construcción para producción.

Cuando ejecutas:

```bash
npm run dev
```

Vite inicia el servidor de desarrollo y permite acceder a nuestra aplicación desde el navegador.

Por ejemplo:

```text
http://localhost:5173
```

No necesitas profundizar en cómo funciona Vite internamente. Por ahora basta con entender que es la herramienta que nos permite desarrollar y construir nuestra aplicación.

---

## ¿Cómo funciona una aplicación React?

Una aplicación React comienza normalmente en un punto de entrada.

En nuestro proyecto:

```text
src/main.tsx
```

Este archivo inicia la aplicación y monta React sobre el documento HTML.

Podemos pensar en el recorrido inicial de esta manera:

```text
index.html
     │
     ▼
main.tsx
     │
     ▼
App.tsx
     │
     ▼
Router
     │
     ▼
Page
     │
     ▼
Components
```

Durante los siguientes niveles iremos recorriendo este flujo con mayor profundidad.

---

## ¿Cómo se comunica el frontend con el backend?

Nuestro frontend no almacena todos los datos de las recetas directamente.

Para obtener o modificar información utiliza una **API REST**.

El flujo general es:

```text
Usuario
   │
   │ interactúa
   ▼
React
   │
   │ petición HTTP
   ▼
API REST
   │
   ▼
Base de datos
```

Por ejemplo, cuando queremos obtener recetas:

```text
Frontend
   │
   │ GET /api/recipes
   ▼
API
   │
   ▼
Recetas
```

Y la API devuelve información que nuestro frontend puede utilizar para construir la interfaz.

---

## El backend de este curso

Este proyecto está diseñado para trabajar junto con:

**[Nivelato Project API](https://github.com/ByteProgramming1/Nivelato-Project-API)**

El backend proporciona los endpoints que utilizaremos para trabajar con las recetas, usuarios y demás información de la aplicación.

Los dos repositorios son independientes:

```text
┌──────────────────────────────┐
│ Nivelato Project Frontend    │
│ React + TypeScript + Vite    │
└──────────────┬───────────────┘
               │
               │ HTTP
               ▼
┌──────────────────────────────┐
│ Nivelato Project API         │
│ REST API                     │
└──────────────────────────────┘
```

Para ejecutar la aplicación completa localmente tendrás que tener ambos proyectos funcionando.

La documentación de la API se encuentra en su propio repositorio.

---

## ¿Qué significa "frontend moderno"?

Durante el curso utilizaremos diferentes herramientas que son comunes en proyectos frontend actuales:

```text
React
  │
  ├── TypeScript
  │
  ├── React Router
  │
  ├── Axios
  │
  ├── TanStack Query
  │
  └── CSS
```

Cada una resuelve un problema diferente.

| Tecnología     | Responsabilidad            |
| -------------- | -------------------------- |
| React          | Construcción de interfaces |
| TypeScript     | Tipado estático            |
| Vite           | Desarrollo y construcción  |
| React Router DOM  | Navegación                 |
| Axios          | Comunicación HTTP          |
| TanStack Query | Gestión de datos remotos   |
| CSS            | Estilos y presentación     |

No necesitas aprender todas estas tecnologías antes de continuar.

Precisamente **los siguientes niveles están diseñados para introducirlas progresivamente**.

---

## ¿Cómo aprenderemos?

Este curso no pretende que memorices cada API de React ni que copies código de ejemplos.

La aplicación ya está construida y contiene diferentes piezas que iremos explorando.

La metodología será:

```text
Explorar
   ↓
Comprender
   ↓
Modificar
   ↓
Extender
   ↓
Resolver
```

En los primeros niveles aprenderás a encontrar dónde ocurre cada cosa.

Después comenzarás a modificar funcionalidades existentes.

Finalmente tendrás que implementar funcionalidades nuevas utilizando los patrones que aprendiste durante el recorrido.

---

## La idea del proyecto

Imagina que acabas de ingresar a un equipo de desarrollo.

El equipo ya tiene una aplicación funcionando y te entregan el repositorio.

Tu primera tarea no sería comenzar a escribir código inmediatamente.

Primero tendrías que responder preguntas como:

* ¿Dónde empieza la aplicación?
* ¿Dónde están las páginas?
* ¿Dónde están los componentes?
* ¿Cómo se obtienen los datos?
* ¿Dónde se hacen las peticiones HTTP?
* ¿Cómo se manejan los usuarios?
* ¿Cómo se navega entre páginas?
* ¿Dónde debería agregar una nueva funcionalidad?

Ese es precisamente el objetivo de este curso.

> **No queremos que aprendas solamente a escribir React. Queremos que aprendas a trabajar dentro de un proyecto React que ya existe.**

---

## ¿Qué sigue?

En el siguiente nivel comenzaremos a explorar la estructura real del proyecto.

Aprenderás qué responsabilidad tiene cada carpeta de `src/`, cómo se relacionan entre sí y cómo encontrar rápidamente el código que necesitas modificar.

No hay ningún reto en este nivel.

Cuando hayas terminado de leer y tengas claro el recorrido general de una aplicación frontend, puedes continuar con:

**[Nivel 1 — Estructura del proyecto](../01-estructura-del-proyecto/README.md)**
