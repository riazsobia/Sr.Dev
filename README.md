# Prueba tecnica Frontend Acreditta

--Enunciado

Utilizando el API de https://developer.marvel.com/ debes construir una aplicación que retorne
la siguiente información:
● Generar una mini app que extraiga la información de los siguientes tópicos::
    ○ Personajes
    ○ Comics
    ○ Series
    ○ Historias
El objetivo es que el aplicativo permite buscar en cada uno de los tópicos, mostrar información
relacionada a los mismos

# Realizacion

Para la realización de este challenge se utilizaron las siguientes librerías


"react": "^18.0.0",
"react-dom": "^18.0.0",
"react-redux": "^8.0.0",
"react-router-dom": "^6.3.0",
"react-scripts": "5.0.1",
"redux": "^4.2.0",
"Animate.css":"^4.0"
"query-string":"7.1.1"

# Anotaciones

Redux se usó únicamente de manera demostrativa puesto que no se creó una base de datos ni se desarrolló un meren por que al ser una prueba enfocada en el frontend no vi necesario hacerlo, si se deseara conectar a una base de datos solo tendrían que hacerse algunas modificaciones pequeñas dado que el core de redux y la forma de trabajas con Private Routes y Public Routes ya está estructurada

# Ejecucion

Si se desea iniciar el proyecto se deberá hacer npm install para reconstruir las librerias, una vez reconstruidas con un simple npm start

# Documentacion extendida

En cada uno de los componentes se encuentra un archivo README.md que explicara a fondo cómo funcionan y como se podrían modificar en caso de que así lo deseen

de la misma forma también se encontrara documentación en los helpers y en los custom hooks

Si no se encuentra un archivo README.MD entonces la documentación se hizo en forma de anotaciones

# Deploy

El deploy se hizo en netlify y se puede acceder siguiendo el siguiente enlace : https://marvel-challenge-app.netlify.app
