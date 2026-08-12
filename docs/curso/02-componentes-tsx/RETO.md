# 🧩 Reto — Construye la primera sección de recetas

Ahora que conoces la estructura del proyecto, es momento de utilizarla para extender la aplicación.

Hasta ahora la aplicación solamente cuenta con una vista inicial. El equipo necesita comenzar a construir la interfaz que posteriormente se conectará con la API de recetas.

Tu tarea será crear una **sección de recetas utilizando datos locales**.

> ⚠️ Todavía no debes consumir la API. En este nivel queremos concentrarnos únicamente en la estructura del frontend.

---

## ¿Qué debes construir?

Ya construiste una página para las recetas en:

```text
/recipes
```


Ahora bien, hay que mostrar todas las recetas: cada receta debe tener como mínimo:

* Título.
* Descripción.
* Tiempo de preparación.
* Cantidad de pasos
* Cantidad de ingredientes
* Una imagen.
* Autor

La interfaz puede ser similar a:

```text
┌─────────────────────────────────────────────┐
│                 Recetas                     │
│                                             │
│  ┌─────────────┐  ┌─────────────┐           │
│  │    Imagen   │  │    Imagen   │           │
│  │             │  │             │           │
│  │ Pizza       │  │ Pasta       │           │
│  │ Italiana    │  │ Carbonara   │           │
│  │ 40 minutos  │  │ 25 minutos  │           │
│  └─────────────┘  └─────────────┘           │
│                                             │
└─────────────────────────────────────────────┘
```

Para la construcción de la interfaz recuerda que si vas a definir colores comunes, añádelos en el archivo global:

```path
src/assets/css/global.css
```

Para verificar sintaxis, soporte y mejores prácticas de propiedades CSS, consulta la documentación oficial:

[👉 MDN Web Docs - Referencia CSS](https://developer.mozilla.org/es/docs/Web/CSS)

>⚠️ Importante: Recuerda importar siempre la hoja de estilos en el componente en el que deseas utilizarlos.

---


## Organización

No debes construir toda la interfaz dentro de `RecipesPage.tsx`.

La idea es comenzar a dividir la interfaz en responsabilidades.

Una posible estructura sería:

```text
src/
├── components/
│   └── recipe/
│       ├── RecipeCard.tsx
│       └── RecipeList.tsx
│
├── pages/
│   ├── Home/
│   │   └── HomePage.tsx
│   │
│   └── Recipes/
│       └── RecipesPage.tsx
│
├── router/
│   └── AppRouter.tsx
│
└── main.tsx
```

No tienes que utilizar exactamente estos nombres si consideras que existe una mejor organización, pero debes mantener una separación clara entre **páginas y componentes reutilizables**.

---

## Utiliza el tipo de receta

El proyecto ya cuenta con un tipo para representar la información de una receta:

```text
src/
└── types/
    └── recipes/
        └── RecipeCard.ts
```

Utiliza este tipo para trabajar con las recetas.
>💡 No vuelvas a definir la misma estructura dentro de cada componente.


---

## Datos

Por ahora puedes utilizar un arreglo local.

Por ejemplo:

```ts
const recipes = [
  {
    id: "1",
    title: "Pizza de pepperoni",
    description: "Pizza casera con queso y pepperoni.",
    time: 40,
    author: "Laura Martínez",
    ingredients: 4,
    steps: 5,
    image: "...",
  },
  {
    id: "2",
    title: "Pasta carbonara",
    description: "Pasta tradicional con una salsa cremosa.",
    time: 25,
    author: "Diego Hernández",
    ingredients: 3,
    steps: 8,
    image: "...",
  },
];
```

---

## Condiciones

1. Debes crear una nueva ruta `/recipes`.
2. Debes crear una página `RecipesPage`.
3. Debes crear al menos dos componentes reutilizables relacionados con las recetas.
4. `RecipeCard` debe recibir información mediante [props](https://www.reactjs.wiki/que-son-las-props-en-react).
5. Las recetas deben almacenarse inicialmente como datos locales.
6. No debes colocar toda la interfaz dentro de `RecipesPage.tsx`.
7. Debes utilizar `<Link>` de React Router DOM para navegar hacia la nueva sección.
8. Debes mantener la organización de carpetas utilizada por el proyecto.

---

## ⭐ Reto adicional :)

Si terminaste el reto principal y quieres subir un poco la dificultad:

Haz que `RecipeList` pueda recibir un arreglo vacío.

Cuando no existan recetas, en lugar de mostrar una lista vacía debería aparecer un mensaje como:

```text
No hay recetas disponibles.
```

Por ejemplo:

```text
recipes = []
        ↓
RecipeList
        ↓
"No hay recetas disponibles."
```

Esto te permitirá comenzar a pensar en diferentes estados de una interfaz, concepto que será importante en los siguientes niveles.

---

# 💡 Pistas

Si no sabes por dónde comenzar, piensa primero en el recorrido de la aplicación:

```text
URL
 ↓
AppRouter
 ↓
Recipes
 ↓
RecipeList
 ↓
RecipeCard
```

Después piensa qué información necesita cada componente.

Por ejemplo:

```text
Recipes
   │
   │ recipes
   ▼
RecipeList
   │
   │ recipe
   ▼
RecipeCard
```

No intentes resolver todo desde un único archivo.

La pregunta que debes hacerte es:

> **"¿Qué responsabilidad debería tener cada componente?"**

---

## Siguiente nivel

Ahora que ya sabes crear páginas, componentes y organizar información entre ellos, vamos a hacer que la interfaz pueda **responder a las acciones del usuario**.

En el siguiente nivel trabajaremos con:

* Estado.
* `useState`.
* Eventos.
* Renderizado condicional.
* Listas.
* `useEffect`.

👉 [**Nivel 2 — Estado y Hooks**](../03-estado-hooks/README.md)