# 🧩 Reto — Crea la sección de recetas

Ahora que conoces la estructura del proyecto, es momento de utilizarla para extender la aplicación.

Actualmente tenemos una vista inicial. El equipo necesita comenzar a preparar una nueva sección para las recetas que posteriormente se conectará con la API.

Tu tarea será crear la **primera versión de la sección `/recipes`**.

> ⚠️ En este nivel nos interesa principalmente la **estructura del proyecto**. Todavía no necesitas crear componentes complejos ni consumir la API.

---

## ¿Qué debes construir?

Debes crear una nueva vista disponible en:

```text
/recipes
```

Por ahora la página puede contener únicamente una estructura sencilla:

```text
┌──────────────────────────────────────┐
│              Recetas                 │
│                                      │
│   Explora las recetas disponibles.   │
│                                      │
└──────────────────────────────────────┘
```

No necesitas construir todavía las tarjetas de recetas.

Eso lo haremos en el siguiente nivel.

---

## 1. Crea la página

Crea una nueva página para la sección de recetas:

```text
src/
└── pages/
    └── Recipes/
        └── RecipesPage.tsx
```

La página debe mostrar como mínimo:

* Un título.
* Una breve descripción.

Por ejemplo:

```text
Recetas

Explora nuestras recetas y descubre nuevas preparaciones.
```

El diseño queda completamente a tu elección.

---

## 2. Registra la ruta

Agrega la nueva ruta en:

```text
src/router/AppRouter.tsx
```

El recorrido debe quedar:

```text
/recipes
   ↓
RecipesPage
```

No crees un segundo router.

> 💡 `AppRouter` es el lugar centralizado para las rutas de la aplicación.

---

## 3. Agrega navegación desde Home

Desde la página inicial debe existir una forma de llegar a:

```text
/recipes
```

Utiliza `Link` de **React Router DOM**.

Por ahora no necesitas crear un Navbar ni modificar toda la navegación de la aplicación.

---

## Condiciones

1. Debes crear `pages/Recipes/RecipesPage.tsx`.
2. Debes agregar la ruta `/recipes` en `AppRouter`.
3. Debes poder navegar desde `Home` hacia `/recipes`.
4. Debes utilizar `Link` de React Router DOM para la navegación.
5. No debes modificar `main.tsx`.
6. No debes crear otro router.
7. Mantén la organización de carpetas del proyecto.

---

## ⭐ Reto adicional

Si quieres subir un poco la dificultad:

Agrega dentro de `RecipesPage` una sección que indique cuántas recetas estarán disponibles próximamente.

Por ejemplo:

```text
Recetas

Explora nuestras recetas y descubre nuevas preparaciones.

Próximamente:
6 recetas disponibles
```

No necesitas obtener este número desde una API. Puedes utilizar un valor fijo.

---

# 💡 Pistas

Si no sabes por dónde comenzar, piensa en el recorrido:

```text
URL
 ↓
AppRouter
 ↓
RecipesPage
```

Primero crea la página.

Después busca dónde están definidas las rutas.

Finalmente agrega una forma de navegar desde `Home`.

La pregunta principal de este reto es:

> **¿En qué archivo debería realizar cada cambio?**

---

## 🚀 Siguiente nivel

En el siguiente nivel tomaremos esta página que acabas de crear y comenzaremos a construir la interfaz de recetas.

Aprenderás:

* Componentes funcionales.
* JSX.
* Props.
* Tipado con TypeScript.
* Composición de componentes.
* Renderizado de listas.

👉 [**Nivel 2 — Componentes y TSX**](../02-componentes-tsx/README.md)
