// Estilos para este componente
import "../../assets/css/components/recipe/RecipeList.css";

// Componente atómico para cada receta
import RecipeCard from "./RecipeCard";

/**
 * Lista de elementos estática (luego lo reemplazaremos
 * con las recetas que traigamos de la api)
 *
 * Nota: como esto todavía no viene tipado con RecipeCardType,
 * TypeScript no nos avisaría acá si a algún objeto le faltara
 * una propiedad o tuviera un typo. Cuando conectemos la API,
 * conviene tipar este array (o la respuesta del fetch) con
 * RecipeCardType[] para tener ese chequeo también acá
 */
const ITEMS = [
    {
        id: "1",
        title: "Pizza de pepperoni",
        description: "Pizza casera con queso mozzarella, salsa de tomate y pepperoni.",
        time: 40,
        image:
        "https://cdn.blog.paulinacocina.net/wp-content/uploads/2024/10/receta-pizza-de-pepperoni-facil-1729847335.jpg",
        author: "Laura Martínez",
        ingredients: 6,
        steps: 5,
    },
    {
        id: "2",
        title: "Pizza margarita",
        description: "Pizza clásica italiana con tomate, mozzarella y albahaca fresca.",
        time: 35,
        image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
        author: "Diego Hernández",
        ingredients: 5,
        steps: 6,
    },
    {
        id: "3",
        title: "Pizza hawaiana",
        description: "Pizza con jamón, piña, mozzarella y una deliciosa salsa de tomate.",
        time: 40,
        image:
        "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=900&q=80",
        author: "Sofía Rodríguez",
        ingredients: 7,
        steps: 6,
    },
    {
        id: "4",
        title: "Pizza cuatro quesos",
        description: "Pizza cremosa preparada con una combinación de cuatro quesos.",
        time: 45,
        image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
        author: "Andrés Gómez",
        ingredients: 7,
        steps: 5,
    },
    {
        id: "5",
        title: "Pizza de champiñones",
        description: "Pizza vegetariana con champiñones salteados, mozzarella y hierbas.",
        time: 40,
        // Ojo: esta imagen es la misma URL que la de "Pizza cuatro quesos"
        // (id "4"). Como es data estática de prueba no rompe nada, pero
        // cuando venga de la API cada receta debería traer su propia imagen
        image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
        author: "Camila Torres",
        ingredients: 8,
        steps: 7,
    },
    {
        id: "6",
        title: "Pizza BBQ de pollo",
        description: "Pizza con pollo, queso mozzarella, cebolla y salsa BBQ.",
        time: 45,
        image:
        "https://www.allrecipes.com/thmb/qZ7LKGV1_RYDCgYGSgfMn40nmks=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-24878-bbq-chicken-pizza-beauty-4x3-39cd80585ad04941914dca4bd82eae3d.jpg",
        author: "Mateo Sánchez",
        ingredients: 8,
        steps: 7,
    },
    {
        id: "7",
        title: "Pizza vegetariana",
        description: "Pizza llena de vegetales frescos, mozzarella y salsa de tomate.",
        time: 40,
        image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
        author: "Valentina López",
        ingredients: 9,
        steps: 6,
    },
    {
        id: "8",
        title: "Pizza de jamón y queso",
        description: "Pizza sencilla y deliciosa con jamón, mozzarella y salsa de tomate.",
        time: 35,
        // Misma URL de imagen que las recetas "4" y "5" (repetida
        // varias veces en este mock), otro detalle que se resuelve
        // solo al traer datos reales desde la API
        image:
        "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=80",
        author: "Sebastián Moreno",
        ingredients: 5,
        steps: 5,
    },
];

/**
 * Componente contenedor: recorre el array ITEMS y renderiza
 * una <RecipeCard /> por cada receta.
 *
 * Es el único lugar donde vive la data (por ahora estática, luego
 * vendrá de un fetch/hook a la API), así que RecipeCard queda
 * "tonto": solo recibe props y muestra, no sabe de dónde viene la data
 */
const RecipeList = () => {
    return (
        <section className="recipe-list">
            {ITEMS.map((recipe) => (
                /** El spread operator (...recipe) reparte cada propiedad
                 * del objeto "recipe" (title, image, author, etc.) como
                 * una prop individual del componente RecipeCard.
                 * La prop "key" va aparte porque React la usa internamente
                 * para identificar cada item de la lista, no se la pasamos
                 * a RecipeCard como parte de sus props "normales"
                 */
                <RecipeCard key={recipe.id} {...recipe} />
            ))}
        </section>
    )
}

export default RecipeList