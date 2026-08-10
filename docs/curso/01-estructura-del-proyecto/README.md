# Nivel 1 — Estructura del proyecto

> 🟢 **Dificultad:** Muy fácil
> 🔎 **Modalidad:** Exploración + práctica

En el nivel anterior conociste qué es un frontend moderno y qué papel cumplen **React, TypeScript y Vite**.

Ahora aprenderás algo fundamental para trabajar en un proyecto real:

> **¿Dónde está cada cosa y dónde debería hacer un cambio?**

La aplicación de recetas ya tiene una estructura definida. Tu objetivo en este nivel es **explorarla, entender sus responsabilidades y aprender a moverte dentro del proyecto**.

---

## 🎯 Objetivos

Al terminar este nivel deberías poder:

* Identificar las principales carpetas de `src/`.
* Diferenciar entre **páginas, componentes y servicios**.
* Entender el recorrido básico de una aplicación React.
* Saber dónde colocar código nuevo.
* Comprender por qué separar responsabilidades facilita el mantenimiento.

---

# 1. Estructura del proyecto

Durante el curso iremos construyendo progresivamente una estructura similar a:

```text
src/
├── assets/
├── components/
├── context/
├── hooks/
├── pages/
├── router/
├── services/
├── types/
├── utils/
└── main.tsx
```

No todas estas carpetas tienen que existir desde el principio.

> 💡 **Las carpetas aparecerán a medida que la aplicación necesite nuevas responsabilidades.**

---

# 2. El punto de entrada

La aplicación comienza en:

```text
src/main.tsx
```

El recorrido inicial es:

```text
index.html
    ↓
main.tsx
    ↓
AppRouter
    ↓
Page
```

Nuestro `main.tsx` inicializa React y renderiza directamente el router:

```tsx
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>
);
```

### 🔎 Explora

Busca `main.tsx` y responde:

> **¿Qué elemento del HTML utiliza React como punto de montaje?**

---

# 3. Router y páginas

La navegación se encuentra en:

```text
src/router/
└── AppRouter.tsx
```

`AppRouter` decide qué página mostrar dependiendo de la URL.

Por ejemplo:

```text
"/"
 ↓
Home
```

El recorrido es:

```text
main.tsx
    ↓
AppRouter
    ↓
Route
    ↓
Page
```

Las páginas representan las vistas principales:

```text
src/pages/
├── Home/
│   └── HomePage.tsx
└── Recipes/
    └── RecipesPage.tsx
```

Por ejemplo:

```text
/recipes
   ↓
RecipesPage
```

> **Página ≠ componente.**
> Una página representa normalmente una vista asociada a una ruta. Un componente representa una pieza reutilizable de esa vista.

---

# 4. Componentes

Los componentes son piezas reutilizables de la interfaz.

Por ejemplo:

```text
src/components/
├── Navbar/
├── Button/
└── recipe/
    └── RecipeCard.tsx
```

Una página puede combinar diferentes componentes:

```text
RecipesPage
    ↓
RecipeList
    ↓
RecipeCard
    ↓
RecipeCard
    ↓
RecipeCard
```

La idea es evitar repetir código y dividir interfaces grandes en piezas más fáciles de mantener.

En los siguientes niveles trabajaremos mucho más con **JSX, props y TypeScript**.

---

# 5. Las demás carpetas

No necesitas aprenderlas en profundidad todavía. Solo debes reconocer para qué servirán:

| Carpeta       | Responsabilidad                  |
| ------------- | -------------------------------- |
| `assets/`     | Imágenes, iconos y estilos       |
| `components/` | Componentes reutilizables        |
| `context/`    | Estado global                    |
| `hooks/`      | Custom Hooks                     |
| `pages/`      | Vistas asociadas a rutas         |
| `router/`     | Navegación                       |
| `services/`   | Comunicación con la API          |
| `types/`      | Tipos e interfaces de TypeScript |
| `utils/`      | Funciones auxiliares             |

Más adelante veremos cada una cuando realmente la necesitemos.

Por ejemplo, los servicios relacionados con recetas terminarán teniendo una estructura como:

```text
services/
└── recipe/
    ├── api.ts
    ├── queries/
    └── mutations/
```

No necesitas crear todo esto todavía.

---

# 🔎 Exploración

Antes de realizar el reto, recorre el proyecto y responde:

1. ¿Desde qué archivo comienza la aplicación?
2. ¿Qué componente se renderiza directamente desde `main.tsx`?
3. ¿Dónde está definido `AppRouter`?
4. ¿Dónde está definida la ruta `/`?
5. ¿Qué página se muestra en `/`?
6. ¿Dónde colocarías un componente reutilizable?
7. ¿Dónde colocarías una interfaz `Recipe`?
8. ¿Dónde colocarías una función para formatear una fecha?
9. ¿Dónde colocarías una función que realiza un `GET /api/recipes`?

No hay una única estructura válida para todos los proyectos React.

Esta es simplemente **la convención que utilizaremos durante este curso**.

## 🧩 Reto

Ahora que conoces la estructura del proyecto, es momento de ponerla en práctica.

👉 [**Abrir el reto del Nivel 1**](./RETO.md)