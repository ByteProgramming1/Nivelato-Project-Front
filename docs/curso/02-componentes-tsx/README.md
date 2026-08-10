# Nivel 2 — Componentes, JSX y Props

> 🟢 **Dificultad:** Fácil
> 🛠️ **Modalidad:** Teoría + práctica

En el nivel anterior aprendiste a **orientarte dentro del proyecto**: identificaste páginas, componentes, rutas y las responsabilidades de las principales carpetas.

Ahora vamos a dar el siguiente paso:

> **¿Cómo construimos una interfaz utilizando componentes reutilizables?**

En este nivel aprenderás a dividir una interfaz en piezas pequeñas, pasar información entre ellas y utilizar TypeScript para asegurarnos de que los datos tengan la estructura esperada.

---

## 🎯 Objetivos

Al terminar este nivel deberías poder:

* Crear componentes utilizando **JSX**.
* Entender la diferencia entre HTML y JSX.
* Crear componentes reutilizables.
* Pasar información mediante **props**.
* Tipar props utilizando TypeScript.
* Componer componentes para construir interfaces más grandes.
* Utilizar `.map()` para renderizar listas.
* Reutilizar tipos definidos en `types/`.

---

# 1. ¿Qué es un componente?

Un [componente]("https://es.legacy.reactjs.org/docs/components-and-props.html") es una pieza de la interfaz que podemos reutilizar.

Por ejemplo, una tarjeta de receta:

```tsx
const RecipeCard = () => {
    return (
        <article>
            <h2>Pizza de pepperoni</h2>
            <p>Pizza casera con queso y pepperoni.</p>
        </article>
    );
}

export default RecipeCard;
```

Podemos utilizarla dentro de otra interfaz:

```tsx
const RecipesPage = () => {
    return (
        <section>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </section>
    );
}

export default RecipesPage;
```

Esto nos permite dividir interfaces grandes en piezas más pequeñas.

---

# 2. JSX

JSX es la sintaxis que utilizamos normalmente para describir la interfaz dentro de los componentes React.

Por ejemplo:

```tsx
export default function Welcome() {
    return (
        <section>
            <h1>Bienvenido</h1>
            <p>Explora nuestras recetas.</p>
        </section>
    );
}
```

Aunque parece HTML, JSX forma parte de JavaScript/TypeScript.

Por eso podemos utilizar expresiones:

```tsx
const name = "Pizza";

return <h2>{name}</h2>;
```

Las expresiones dentro de `{}` son evaluadas por JavaScript.

---

# 3. JSX no es HTML

Aunque JSX se parece mucho a HTML, existen algunas diferencias importantes.

Por ejemplo, para asignar clases de estilos en JSX utilizamos:

```tsx
className
```

en lugar de:

```html
class
```

También debemos cerrar los elementos:

```tsx
<img src="..." alt="Pizza" />
```

y podemos utilizar expresiones de JavaScript:

```tsx
<p>{recipe.name}</p>
```

No necesitas memorizar todas las diferencias todavía. Las iremos encontrando mientras construimos componentes.

---

# 4. Props

Los componentes necesitan una forma de recibir información.

Para eso utilizamos **props**.

Por ejemplo, en lugar de crear una tarjeta que siempre muestre Pizza:

```tsx
export default function RecipeCard() {
    return <h2>Pizza de pepperoni</h2>;
}
```

podemos hacer que reciba una receta:

```tsx
export default function RecipeCard({ recipe }) {
    return <h2>{recipe.name}</h2>;
}
```

Y utilizarla así:

```tsx
<RecipeCard recipe={pizza} />
```

Podemos pensar en las props como información que un componente recibe desde su componente padre:

```text
RecipesPage
     │
     │ recipe
     ▼
RecipeCard
```

> 💡 Un componente debería recibir la información que necesita en lugar de depender de datos escritos directamente dentro de él.

---

# 5. Props con TypeScript

Como estamos utilizando TypeScript, podemos definir qué información espera recibir nuestro componente.

El proyecto ya cuenta con un tipo para las recetas:

```text
src/
└── types/
    └── recipes/
        └── RecipeCard.ts
```

Por ejemplo:

```ts
export type RecipeCard = {
    id: string;
    name: string;
    description: string;
    time: number;
    type: string;
    image: string;
};
```

Podemos utilizar este tipo en nuestro componente:

```tsx
import type { RecipeCard } from "../../types/recipes/RecipeCard";

export function RecipeCard({ recipe }: RecipeCard) {
    return (
        <article>
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
        </article>
    );
}
```

Ahora TypeScript puede ayudarnos a detectar errores.

Por ejemplo, esto produciría un problema:

```tsx
<RecipeCard recipe="Pizza" />
```

porque el componente espera una receta, no un `string`.

---

# 6. Composición

Los componentes pueden utilizar otros componentes.

Podemos construir una interfaz siguiendo una jerarquía:

```text
RecipesPage
     ↓
RecipeList
     ↓
RecipeCard
```

Por ejemplo:

```tsx
export default function RecipesPage() {
    return (
        <section>
            <RecipeList />
        </section>
    );
}
```

Y:

```tsx
export default function RecipeList() {
    return (
        <div>
            <RecipeCard />
            <RecipeCard />
        </div>
    );
}
```

Esta técnica se conoce como **composición de componentes**.

En lugar de construir una interfaz enorme dentro de un solo archivo, la dividimos en piezas con responsabilidades más claras.

---

# 7. Renderizar listas

Cuando tenemos varios elementos, normalmente no queremos escribir:

```tsx
<>
    <RecipeCard recipe={recipe1} />
    <RecipeCard recipe={recipe2} />
    <RecipeCard recipe={recipe3} />
</>
```

Podemos utilizar `map()`:

```tsx
recipes.map((recipe) => (
    <RecipeCard
        key={recipe.id}
        recipe={recipe}
    />
));
```

El resultado será:

```text
recipes
   ↓
 map()
   ↓
RecipeCard
RecipeCard
RecipeCard
```

El método `map()` permite transformar cada elemento de un arreglo en un elemento de la interfaz.

> 💡 En este curso utilizaremos `map()` constantemente para construir listas dinámicas.

---

# 8. La responsabilidad de cada componente

Una buena separación podría ser:

```text
RecipesPage
    │
    │ contiene/prepara los datos
    ▼
RecipeList
    │
    │ recorre las recetas
    ▼
RecipeCard
    │
    │ muestra una receta
    ▼
Interfaz
```

Cada componente tiene una responsabilidad diferente.

### `RecipesPage`

Representa la página completa.

### `RecipeList`

Se encarga de trabajar con la lista de recetas.

### `RecipeCard`

Se encarga de representar una receta individual.

Esto permite que cada componente sea más fácil de entender y mantener.

---

# 🔎 Explora antes del reto

Antes de comenzar, revisa nuevamente:

```text
src/
├── components/
├── pages/
└── types/
```

Busca el tipo:

```text
types/recipes/RecipeCard.ts
```

y observa qué información representa.

Después piensa:

> ¿Qué información necesita `RecipeCard` para poder mostrar una receta?

> ¿Quién debería proporcionarle esa información?

> ¿Quién debería encargarse de recorrer la lista?

## 🧩 Reto

Ahora que conoces el funcionamiento de los componentes en React, es momento de ponerla en práctica.

👉 [**Abrir el reto del Nivel 2**](./RETO.md)