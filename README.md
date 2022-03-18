# Backend API-express

## Descripción general

Este proyecto es realizado para la cuarta entrega del BootCamp de desarrollador FullStack
impartido por GeeksHubs Academy. Dicho proyecto está realizado por el alumno **David Sánchez Ariza**
y su idea con él es crear de forma muy simple una API de peliculas y usuarios con todas las
funciones de un CRUD en ambas entidades, además de sacar adelante el ejercicio propuesto en el curso.

## Estado del proyecto

La API es totalmente operativa y funcional, con una base de datos en remoto, implementada con
MongoDB Atlas, además de estar desplegado el proyecto con la herramienta Heroku en esta dirección web:
(https://api-peliculas-david.herokuapp.com/).
La idea es seguir añadiendole funcionalidad a la API a través de un front y poder utilizar dicha
aplicacion como consulta de películas, algo parecido o similar a "JustWatch", pero con usuarios
registrados y algunos usuarios denominados "admin" para que puedan subir películas, dar de alta a nuevos
usuarios, modificarlos etc.
Dicho proyecto siempre estará abierto a posibles cambios, tanto en estructura como en diseño,
pudiendo sufrir modificaciones para su mejora a lo largo del curso y posteriores meses.
Si alguien tuviera cualquier tipo de sugernecia o idea acerca de ello no habría problema en
contactar conmigo para ponerlo en común y realizar los cambios sugeridos tras tratarlo y comentarlo.

### Requisitos para la visualización del proyecto y cómo ejecutar el juego

Para poder utilizar la API por ahora precisaremos de un servicio que sea capaz de hacer peticiones
a nuestra API, a la hora del desarrollo nosotros utilizamos _Postman_ y no tuvimos ningún tipo de
problemas. Además de ello necesitaremos la dirección http a la que realizaremos nuestras peticiones
que en este caso es: _https://api-peliculas-david.herokuapp.com_.

A la hora de consumir la api tendremos tres posibles rutas una vez que el admin nos haya generado un
usuario dentro de la base de datos para poder movernos por la API y mandar las peticiones:

- /peliculas : para obtener la información de las películas
- /usuarios : para obtener la información de los usuarios
  - /auth : para la obtención de un token para poder acceder al resto de peticiones

Lo primero que debemos realizar una vez que sabemos que tenemos un usuario es obtener nuestro token
de identificación que se nos facilitará haciendo un POST al endpoint de /usuarios/auth introduciiendo en
el header de nuestra peticion nuestro email de usuario y nuestra contraseña. Una vez hecho esto debemos
de copiar el token que la aplicación nos devuelva e introducirlo en el header de cada petición que
queramos realizar a la API, haciendo de esta manera que ésta pueda reconocernos y nos devuelva lo que
deseamos de la misma, ya sea obtener información, crearla, modificarla o borrarla.

Como usuarios tendremos 2 roles diferentes con los cuales podremos acceder a diferentes acciones dentro
de la API:

- Admin : tendremos acceso al CRUD completo de usuarios como de películas
- Cliente : solo tendremos acceso a la obtención de información tanto como de usuarios como de películas

Todos los nuevos usuarios estarán por defecto como clientes y solo el administrador del sistema, en este
caso yo como creador de la API, podrá generar usuarios con el rol de "admin" para que puedan gestionar los
diferentes usuarios y las diferentes películas.

Dentro de cada una de las colecciones que tenemos podemos realizar las siguientes acciones:

- Obtener la información de todas las películas o usuarios a través del comando GET.
- Filtrar dichas películas o usuarios con el comando GET y los query params que introduzcamos en la ruta,
  que podrían ser titulo, genero y actores para las películas, o nombre e email para los usuarios.
- Obtener la información de una sola película o usuario en concreto a través de su ID único y personal con
  el comando GET y poniendo el ID en el endpoint.
- Crear nuevas películas o usuarios con toda su información con el comando POST (solo los usuarios con el
  rol "admin").
- Modificar cualquier parte de cualquier película o usuario a través de su ID con el comando PATCH y
  utilizando el ID de dicha película o usuario en el endpoint (solo los usuarios con el rol "admin").
- Borrar cualquier película o usuario a través de su ID con el comando DELETE y utilizando el ID único en
  el endpoint correspondiente (solo los usuarios con el rol "admin").

### Tecnologías utilizadas en el desarrollo

Para el desarrollo de este proyecto se ha utilizado el lenguaje de progamación _JavaScript_, además de un
framework de dicho lenguaje llamado _NODE JS_, y dentro de éste hemos utilizado las siguientes librerias:
_Express_, _Nodemon_ (solo para desarrollo), _Mongoose_, _jsonwebtoken_ y _dotenv_.

Para el despliegue de nuestra aplicación hemos utilizado la web de _HEROKU_ especializada en el despliegue
y producciónn de este tipo de aplicaciones.

Para la base de datos remota nos hemos decantado por la base de datos de _Mongo DB Atlas_ que es la más
utilizada en consonancia con nuestra librería seleccionada _Mongoose_.

### Fallos Reconocidos

Hasta ahora no se han encontrado fallos en el proyecto ya que la funcionalidad es muy limitada y en
cierto modo es todo muy sencillo. A pesar de ello si se encuentra algún tipo de error tanto
funcional como de sintaxis dentro de la página no dude en ponerse en contacto con el autor del
proyecto para poder subsanarlo cuanto antes.

#### Derechos de autor

Este proyecto ha sido realizado por **David Sánchez Ariza** durante el curso de Desarrollador Full Stack
impartido por GeeksHubs academy en Madrid a fecha de febrero de 2022.
En el proyecto han colaborado páginas de uso público como [W3Schools](https://www.w3schools.com/)
o [Developer Mozilla](https://developer.mozilla.org/es/), además de la utilización de todas la documentación
oficial de cada una de las librerias utilizadas así como el conocimiento aportado e impartido por los
distintos profesores del bootcamp.
