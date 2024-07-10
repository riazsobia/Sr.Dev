# getCharactes, getSeries, getStories, getComics:

Estos helper tiene como finalidad hacer una petición al API https://developer.marvel.com/ y reciben un argumento denominado Params, el cual tiene como finalidad modificar lo que se pide, en caso de que se quieran añadir restricciones a la hora de hacer la petición, para hacer un uso correcto de este parámetro se recomienda leer la documentación de la API antes mencionada. 

Si la petición se hace correctamente, estos helpers retornaran un arreglo de objetos llamado "comics","series","stories" o "characters" los cuales contendrán propiedades extraídas de la API, si se desea extraer más propiedades de la API para ser implementadas en algun componente se recomienda leer la documentación para ver correctamente lo que retorna y evitar crasheos.

# getItemsByName 

Este helper recibe dos argumentos, "name" y "data", los cuales son el nombre que se desea buscar y el arreglo en el que se desea filtrar la información de acuerdo a su propiedad llamada title.

Si hay coincidencias, este helper retornara un nuevo arreglo con los objetos filtrados, de lo contrario retornara un arreglo vacío
 
