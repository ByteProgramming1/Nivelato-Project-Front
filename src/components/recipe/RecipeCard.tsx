// Iconos de la librería de iconos para nuestro proyecto: React icons
import { PiBowlSteamBold } from "react-icons/pi"

/**
 * Podemos renombrar la importación de algo en react usando "as"
 * En esta caso lo usamos para que no haga conflicto el nombre del
 * componente y del tipo de sus props
*/
import type { RecipeCard as RecipeCardType } from "../../types/recipes/RecipeCard"
import { FaListCheck } from "react-icons/fa6"

/**
 * Componente "atómico": representa UNA sola receta.
 * Recibe toda la info por props (no maneja estado propio) y
 * simplemente se encarga de mostrarla con el markup/estilos
 * definidos en RecipeCard.css.
 *
 * Al tipar las props con "RecipeCardType" (que viene de un archivo
 * de types), TypeScript nos avisa en el momento si nos olvidamos de
 * pasar alguna prop obligatoria, o si le pasamos el tipo de dato
 * equivocado (ej: un string donde va un number)
 */
const RecipeCard = (props : RecipeCardType) => {
    return (
        // key va acá porque este <div> es el elemento que se repite
        // en el .map() de RecipeList; React la necesita para identificar
        // cada card individualmente y renderizar la lista de forma eficiente
        <div className="recipe-card" key={props.id}>

            {/* Bloque de la imagen de la receta */}
            <div className="recipe-card-img">
                {/* El "alt" usa el título de la receta: además de ser
                    buena práctica de accesibilidad (para lectores de
                    pantalla), se muestra si la imagen no llega a cargar */}
                <img src={props.image} alt={props.title} />
            </div>

            {/* Bloque de texto: título, autor y descripción */}
            <div className="recipe-card-txt">
                <h1>{props.title}</h1>
                <h2>{props.author}</h2>
                <p>{props.description}</p>
            </div>

            {/* Pie de la card: acá mostramos datos "rápidos" de la
                receta (cantidad de ingredientes y de pasos), cada
                uno con su ícono correspondiente */}
            <div className="recipe-card-btm">
                <div className="recipe-card-btm-item">
                    {/* size={17} ajusta el tamaño del ícono en px,
                        independiente del font-size del texto */}
                    <PiBowlSteamBold size={17} />
                    {props.ingredients} Ingredientes
                </div>
                <div className="recipe-card-btm-item">
                    <FaListCheck />
                    {/* Ojo acá: está usando props.ingredients de nuevo.
                        Como el texto dice "Pasos", probablemente esto
                        debería ser props.steps */}
                    {props.ingredients} Pasos
                </div>
            </div>
        </div>
    )
}

export default RecipeCard