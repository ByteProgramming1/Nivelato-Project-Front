import RecipeList from "../../components/recipe/RecipeList"

const RecipesPage = () => {
    return (
        <div>
            <h1>Recetas</h1>
            <h2>Explora las recetas disponibles!</h2>
            

            {/* Reto Adicional */}
            <p>Explora nuestras recetas y descubre nuevas preparaciones.</p>
            
            <br/>
            <h4>
                <b>Próximamente: </b>
                <br/>
                10 recetas disponibles
            </h4>

            {/* Componente de lista de recetas */}
            <RecipeList />
        </div>
    )
}

export default RecipesPage