# Curso práctico: cómo funciona un frontend moderno con React + TypeScript

#### Desarrollado por el semillero **ByteProgramming**

- Elián Eduardo Ibarra Contreras

> Esperamos que este proyecto les ayude a dar sus primeros pasos en el desarrollo frontend. El semillero siempre estará disponible para todo lo que deseen aprender, aportar y mejorar.

[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19+-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7+-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![React Query](https://img.shields.io/badge/React_Query-5+-FF4154?logo=reactquery&logoColor=white)](https://tanstack.com/query)
[![CSS](https://img.shields.io/badge/CSS-3+-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

Este repositorio **no es solo una aplicación de recetas**: es un mini-curso práctico para aprender, construyendo y explorando, cómo funciona un frontend moderno utilizando **React, Vite y TypeScript**.

A lo largo del recorrido aprenderás cómo se estructura un proyecto React, cómo se construyen interfaces reutilizables, cómo se manejan estados, cómo se navega entre páginas, cómo se consumen APIs REST, cómo se gestionan datos remotos, cómo se construyen formularios y cómo se implementa autenticación.

A diferencia de un curso tradicional en el que toda la aplicación se desarrolla desde cero durante las sesiones, aquí encontrarás una aplicación funcional que podrás explorar como si acabaras de entrar a un equipo de desarrollo.

La idea es que aprendas a **leer código existente, comprender por qué está organizado de determinada manera, modificarlo y extenderlo**, mientras resuelves pequeños retos que aumentan progresivamente de dificultad.

Este proyecto fue diseñado para consumir la API desarrollada en el siguiente repositorio:

👉 **Nivelato Project API**

https://github.com/ByteProgramming1/Nivelato-Project-API

Aunque ambos proyectos fueron creados para complementarse, **cada repositorio es completamente independiente**. Si deseas ejecutar la aplicación completa de manera local, puedes clonar ambos repositorios y seguir las instrucciones correspondientes en cada uno.

## Objetivos de aprendizaje

Al terminar el curso podrás:

- Comprender cómo se estructura un proyecto moderno con React y TypeScript.
- Construir interfaces reutilizables mediante componentes.
- Utilizar TypeScript para modelar los datos de una aplicación.
- Manejar estado local y efectos secundarios mediante Hooks.
- Navegar entre páginas utilizando React Router.
- Consumir una API REST utilizando Axios.
- Gestionar datos remotos mediante TanStack Query (React Query).
- Construir formularios dinámicos y realizar validaciones.
- Implementar autenticación basada en tokens.
- Manejar estados de carga, errores y estados vacíos.
- Leer, comprender y modificar una aplicación React existente.
- Resolver problemas y extender funcionalidades dentro de una base de código existente.

> Si todavía no sabes utilizar **Git** o **GitHub**, próximamente estaremos liberando otro minicurso dedicado a estas herramientas.

## Quickstart

```bash
# 1. Haz fork de este repositorio en GitHub y luego clónalo
git clone https://github.com/<tu-usuario>/Nivelato-Project-Frontend.git
cd Nivelato-Project-Frontend

# 2. Instala las dependencias
npm install

# 3. Copia las variables de entorno de ejemplo
copy .env.example .env

# 4. Ejecuta el proyecto
npm run dev
```

Antes de iniciar el frontend, asegúrate de tener una API compatible ejecutándose.

Puedes utilizar la API oficial del curso siguiendo las instrucciones del siguiente repositorio:

https://github.com/ByteProgramming1/Nivelato-Project-API

Una vez que el backend esté funcionando, configura la variable `VITE_API_URL` en tu archivo `.env` apuntando a la dirección correspondiente. Por ejemplo:

```env
VITE_API_URL=http://localhost:8080
```

Luego abre:

- **Frontend:** `http://localhost:5173`

Para conocer con mayor detalle la configuración inicial del proyecto, consulta la guía del **nivel 1**.

## El temario

El curso está organizado en **11 niveles**, con una dificultad que aumenta progresivamente.

Comienza por el **índice completo del curso** ubicado en `docs/curso/README.md`. Allí encontrarás el detalle de cada nivel, la teoría correspondiente, referencias a los archivos importantes y los retos propuestos.

| #  | Nivel                              | Dificultad      |
| -- | ---------------------------------- | --------------- |
| 0  | Introducción al frontend moderno   | 🟢 Solo lectura |
| 1  | Estructura del proyecto            | 🟢 Muy fácil    |
| 2  | Componentes y JSX                  | 🟢 Fácil        |
| 3  | Estado y Hooks                     | 🟡 Media        |
| 4  | React Router                       | 🟡 Media        |
| 5  | Consumo de APIs                    | 🟡 Media        |
| 6  | React Query                        | 🟠 Media-alta   |
| 7  | Formularios y validaciones         | 🟠 Media-alta   |
| 8  | Autenticación                      | 🔴 Alta         |
| 9  | Manejo de errores y UX             | 🟠 Media-alta   |
| 10 | Reto final                         | 🔴 Alta         |

## Cómo se evalúa tu avance

Cada nivel incluye una serie de retos y ejercicios diseñados para que explores el proyecto y pongas en práctica los conceptos aprendidos.

La idea **no es construir toda la aplicación desde cero**, sino aprender a leer código existente, comprender cómo está organizado y ser capaz de modificarlo o extenderlo de manera segura.

Este enfoque busca acercarte a una situación común dentro de un equipo de desarrollo: incorporarte a un proyecto que ya existe y tener que entender su código antes de comenzar a trabajar en él.

Los retos aumentan progresivamente de dificultad y están pensados para que cada nivel utilice los conocimientos adquiridos anteriormente.

## Estructura del repositorio

```text
src/
├── api/            Configuración de Axios y TanStack Query
├── assets/         Imágenes, iconos y recursos estáticos
├── components/     Componentes reutilizables
├── context/        Contextos de React
├── hooks/          Custom Hooks
├── pages/          Páginas asociadas a las rutas
├── router/         Configuración de React Router
├── services/       Comunicación con la API
├── types/          Interfaces y tipos de TypeScript
├── utils/          Funciones auxiliares
├── App.tsx
└── main.tsx

docs/
└── curso/
    ├── 00-introduccion-frontend-moderno/
    ├── 01-estructura-del-proyecto/
    ├── 02-componentes-y-jsx/
    ├── 03-estado-y-hooks/
    ├── 04-react-router/
    ├── 05-consumo-de-apis/
    ├── 06-react-query/
    ├── 07-formularios-y-validaciones/
    ├── 08-autenticacion/
    ├── 09-manejo-de-errores-y-ux/
    ├── 10-reto-final/
    └── README.md
```

> La estructura de `src/` puede evolucionar a medida que avanzas por los diferentes niveles. No es necesario comprender todas las carpetas desde el principio; cada una se irá introduciendo cuando sea necesaria.

## Preguntas frecuentes

**¿Tengo que hacer los niveles en orden?**

Sí. Cada nivel utiliza conceptos explicados en los anteriores, por lo que seguir el recorrido propuesto hará que el aprendizaje sea mucho más sencillo.

**¿Necesito desarrollar también el backend?**

No. Puedes utilizar la API del curso ya implementada o cualquier otra API compatible.

Sin embargo, si deseas comprender completamente cómo se comunican el frontend y el backend, te recomendamos realizar también el curso de **Nivelato Project API**.

**¿Puedo utilizar otra librería o framework?**

El curso está diseñado específicamente para **React + TypeScript**, por lo que los ejemplos y retos utilizan estas tecnologías.

Puedes experimentar con otras herramientas por tu cuenta, pero para seguir correctamente los ejercicios recomendamos utilizar el stack del curso.

**¿Necesito saber React antes de comenzar?**

No. El curso parte desde los fundamentos y aumenta progresivamente de dificultad.

Es recomendable tener conocimientos básicos de programación y, preferiblemente, familiaridad con HTML, CSS y JavaScript.

**Encontré un bug o tengo una idea para mejorar el proyecto.**

¡Excelente!

Puedes abrir un **Issue** o proponer un **Pull Request**. Todo aporte que ayude a mejorar el material es bienvenido.

Y si algo no funciona... revisa el código con calma, consulta la documentación, apóyate en la IA y, si todo falla... pregunta en el semillero.

*(Prometemos responder rápido jaja).*

## Contexto y créditos

Este curso fue desarrollado por **Elián Eduardo Ibarra Contreras** como material educativo para el semillero **ByteProgramming**.

La aplicación utiliza como caso de estudio un sistema de gestión de recetas y fue diseñada para consumir la API desarrollada en **Nivelato Project API**, permitiendo que ambos proyectos se complementen para ofrecer una experiencia de aprendizaje que cubre tanto el desarrollo backend como frontend.

El objetivo principal de este repositorio no es únicamente enseñar React. También busca ayudar a los estudiantes a desarrollar una habilidad fundamental en el desarrollo de software: **aprender a desenvolverse dentro de una base de código existente**.

A través de los diferentes niveles aprenderás progresivamente a comprender la estructura del proyecto, seguir el flujo de los datos, identificar dónde realizar cambios y construir nuevas funcionalidades sin necesidad de conocer todo el código desde el primer momento.

Esperamos que este material les sea de utilidad.

**¡Nos vemos en el semillero! 🚀**