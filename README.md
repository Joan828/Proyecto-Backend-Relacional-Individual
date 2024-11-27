## Proyecto Backend Relacional (individual)
Mi proyecto trata sobre un ecommerce de venta de coches. En este proyecto tiene usuarios que pueden hacer uno o varios pedidos, con uno o varios productos. A su vez, los productos pueden ir en unos o en varios pedidos. Y por último los productos tienen una categoría y las categorias pueden estar en varios productos.

## Diagrama de la BBDD

![Diagrama BBDD Proyecto](https://github.com/user-attachments/assets/f14b7904-9a90-4a03-939e-12507105e9c7)

## Proyecto en Visual
Tenemos las carpetas: 

  - Config
  
    Aquí tenenmos la configuración de nuestra BBDD
    ![Config](https://github.com/user-attachments/assets/ac421866-04f6-440e-afb8-73607aa3333b)

  - Controllers

    Aquí tenemos los Controllers de Categorias, Pedidos, Productos y Usuarios
  
    ![Controllers](https://github.com/user-attachments/assets/cf5ddc3e-7003-4b9f-b00f-caeab8ca2ca4)

  - Middlewares

    Aquí están los dos middlewares que he usado en este proyecto, el authentication (para autenticar los usuarios antes de realizar ciertas acciones) y el errors (para mostrar los errors de manera      más ordenada)

  
  - Migrations

    Aquí están todas las migracioines a la BBDD
  
  - Models

    En los modelos tenemos los datos y el tipo de los campos de cada tabla además de sus relaciones con otras tablas.
  
  - Node_modules

    Esta carpeta no se tiene que subir porque pesa mucho y podemos descargar lo que hay dentro con las dependencias del proyecto (en el package.json)
  
  - Routes

    Aquí guardamos las rutas de los endpoints y la llamada a las funciones de cada controller que se ejecuta una sentencia SQL
  
    ![Routes](https://github.com/user-attachments/assets/a3d45af8-799f-400e-bf11-6382dcf1dd96)

  - Seeders

    Aquí guardamos sentencias para cargar usuarios en la base de datos para hacer pruebas

  ## Pruebas en Postman

  En Postman hice muchas pruebas, aquí tenemos un ejemplo de ver todos los usuarios

  ![Ver Usuarios Postman](https://github.com/user-attachments/assets/e86b523c-5dad-418e-8157-b5983fb5471f)

