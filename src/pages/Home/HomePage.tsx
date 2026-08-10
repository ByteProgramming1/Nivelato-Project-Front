import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <main>
            <h1>Nivelato</h1>
            <p>Curso práctico de frontend con React y TypeScript.</p>
            <Link
                to="/hello"
                style={{
                    fontSize: 20,
                    textDecoration: "underline",
                    color: "blue"
                }}
            >
                Hello World
            </Link>

            <br/>
            <Link
                to="/recipes"
                style={{
                    fontSize: 20,
                    textDecoration: "underline",
                    color: "blue"
                }}
            >
                Ver recetas
            </Link>
        </main>
    )
}

export default HomePage