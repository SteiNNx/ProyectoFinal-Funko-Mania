# _:clipboard:Pauta de Evaluación_

## _Hito :one:_
### _Instrucciones_

> El primer paso es definir la temática de la aplicación y crear el directorio y estructura de archivos a
trabajar.
> 
> Se debe inicializar un repositorio en Git y además crear un archivo README.md con el siguiente
contenido:
> 1. Descripción del proyecto: Descripción breve, propósito de la aplicación y usuarios a los que
apunta
> 2. Guía de estilos: Una breve guía de estilos que indique tipografías utilizadas (recomendado
utilizar desde Google fonts), tamaños de texto, colores seleccionados y que elementos harán
uso de ellas.
> 3. Guía de instalación del proyecto: Indicar los requisitos necesarios, si se utiliza Webpack o
Parcel, si es necesario instalar dependencias extra dentro de un directorio (Por ejemplo, para las
Cloud Functions). Registrar paso a paso el proceso de instalación.
> 4. Rutas de acceso: Indicar la ruta en donde puede ser encontrada la aplicación
>
> Para la primera entrega, completar el archivo README.md con la mayor información posible. Agregar
los pasos faltantes a medida que el proyecto se va desarrollando.
>
> La aplicación debe utilizar Vue, Vue router y Vuex, además, se debe utilizar una librería de
componentes para el desarrollo de la interfaz, esta puede ser Buefy, element UI, Bootstrap-Vue, etc.
Teniendo el entorno preparado, se procederá a trabajar en el maquetado de las vistas de la
aplicación.
> 
> La aplicación debe presentar como mínimo 3 vistas que representan un flujo básico de interacción. Se
deben agregar funcionalidades y/o vistas extra según la aplicación a desarrollar.
> 1. Pantalla de Login
> 2. Pantalla principal: En esta vista se mostrarán los datos obtenidos de la API o se enviará
información a la misma para obtener un resultado (Por ejemplo, en el caso de un acortador de
enlaces). El usuario deberá poder marcar datos como favoritos o guardar registro de sus
acciones en esta pantalla.
> 3. Pantalla de favoritos: Aquí se listarán los favoritos marcados por el usuario o datos que haya
guardado, pudiendo además, eliminarlos.
>
> Además, se debe incluir de forma obligatoria un componente para el menú de navegación que será
reutilizado en cada vista.
>
> Para esta etapa, se deberán crear los componentes padre que representan cada vista y sus
respectivos componentes hijos, utilizando SFC (Single File Components). Solo se trabajará con datos
demo para la maquetación pero sí se debe hacer uso del renderizado de listas (v-for).
>
> Tener en consideración que en hitos posteriores se pedirá la comunicación entre padres-hijos a través
de props o eventos según corresponda. Estructurar la aplicación en base a aquello.
>
> La aplicación debe ser responsiva y la navegación deberá ser manejada por Vue router.


- :heavy_check_mark: Creación del archivo README.md `(0.5 puntos)`
- :heavy_check_mark: Instalación de las dependencias necesarias. `(0.5 puntos)`
- :heavy_check_mark: Creación de las 3 vistas principales. `(2 puntos)`
- :heavy_check_mark: Creación y uso de un componente reutilizable para el menú. `(0.5 puntos)`
- :heavy_check_mark: Estructura de aplicación en base a SFC. `(2 puntos)`
- :heavy_check_mark: Utilización de renderizado de listas. `(0.5 puntos)`
- :heavy_check_mark: Diseño consistente entre cada vista, respetando guía de estilos. `(0.5 puntos)`
- :heavy_check_mark: Navegación basada en Vue router. `(1 punto)`
- :heavy_check_mark: Uso de librería de componentes para el desarrollo de la interfaz. `(1.5 puntos)`
- :heavy_check_mark: Interfaz responsiva. `(1 punto)`

## _Hito :two:_

### _Instrucciones_

> En esta etapa se deberán realizar las conexiones a la API para la obtención de datos o
procesamiento de los mismos utilizando axios o fetch.
> 
> Se debe utilizar Vuex para mantener los datos en el estado, cuando sea posible, evitando realizar
peticiones innecesarias a la API cada vez que se navega por las diferentes vistas.
>
> Además, se debe crear la interacción entre componentes padre e hijos mediante paso de props o
emisión de eventos, según corresponda.
> 
> El usuario deberá poder realizar una acción en la vista principal (visualización de datos, envío de
datos a una API para su procesamiento, etc.) y deberá tener la posibilidad de marcar algún resultado
como favorito o guardarlo para uso posterior.
> 
> En la siguiente vista, el usuario deberá poder visualizar la información guardada y tener la posibilidad
de eliminar alguna de ellas.
>
> Como aún no hay conexión con una base de datos para la persistencia de los mismos, la información
que el usuario desee almacenar será guardada en Vuex. Lo mismo para el rescate y renderizado de
los datos almacenados por el usuario en la vista "favoritos". Estos datos serán obtenidos, y
eliminados cuando el usuario lo requiera, desde Vuex.
> 
> Cabe mencionar que se describe el funcionamiento mínimo necesario que deberá tener la aplicación.
> 
> Se deberán agregar otras características y funcionalidades según sea necesario y según temática del
proyecto. Por ejemplo, se podría agregar una barra de búsqueda, un filtro para ordenar resultados por
fecha, filtro para ordenar resultados de forma alfabética, etc,
> 
> Al finalizar esta etapa, se deberá contar con una aplicación cuya interfaz es completamente funcional.

- :heavy_check_mark: Conexión con una API usando una librería. `(1 punto)`
- :heavy_check_mark: Almacenamiento de datos en Vuex. `(0.5 puntos)`
- :heavy_check_mark: Modificación del estado en Vuex. `(0.5 puntos)`
- :heavy_check_mark: Comunicación entre componentes mediante props o eventos. `(1 punto)`
- :heavy_check_mark: Definición de variables y métodos necesarios. `(2 puntos)`
- :heavy_check_mark: Contiene las funcionalidades básicas descritas. `(3 puntos)`
- :heavy_check_mark: Agrega funcionalidades extra a las mínimas necesarias. `(2 puntos)`

## _Hito :three:_

### _Instrucciones_

> Para el back end de la aplicación se utilizará Firebase, una plataforma que puede ser considerada como "Back end as a Service".
> 
> El primer paso para esta etapa es crear un nuevo proyecto en Firebase. Serán utilizados los servicios
de autenticación, cloud functions y Firestore para la base de datos. Es importante recordar que será necesario tener instalada el CLI de FIrebase en el equipo.
>
> Se deberá conectar la pantalla de login al servicio de Firebase para autenticar a los usuarios usando correo y contraseña. Se debe persistir de alguna forma (Ej. Vuex, cookies, etc.) el estado del usuario
(logueado/no logueado).
>
> A continuación, se modificará la navegación de la aplicación para que responda al estado del usuario. La información de la sesión deberá ser persistida en el navegador, de tal forma que si el usuario está
logueado, ingrese directamente a la vista principal, de lo contrario, el usuario deberá ser redirigido a la pantalla de login.
> 
> Se deberá incluir una opción para cerrar sesión que modifique el estado del usuario y lo lleve a la pantalla de login.
> 
> En la sección recursos se encuentra un diagrama de flujo que explica el sistema de navegación y enlaces a documentación para trabajo avanzado con Vue-router y trabajo con Cookies.
> 
> Se deberán crear al menos 2 usuarios distintos. Se recomienda usar correos de prueba para esto. Los datos generados por cada usuario deberán ser almacenados en documentos distintos en la base de datos.
> 
> Usando Cloud functions se deberán definir como mínimo 2 rutas, una que permita al usuario guardar/actualizar datos en la base y otra que permita al usuario recuperar dichos datos. La aplicación deberá estar conectada a las rutas definidas utilizando alguna librería como Axios.
> 
> Para la revisión de este Hito, además del código, se deberán entregar las claves de acceso de los dos usuarios creados para pruebas para verificar el funcionamiento de la aplicación.

- :heavy_check_mark: Implementación del servicio de autenticación de Firebase. `(2.5 puntos)`
- :heavy_check_mark: Persistencia del estado de autenticación del usuario. `(1.5 puntos)`
- :heavy_check_mark: Manejo de rutas según estado de autenticación. `(2.5 puntos)`
- :heavy_check_mark: Opción de cerrar sesión. `(0.25 puntos)`
- :heavy_check_mark: Creación de 2 usuarios. `(0.25 puntos)`
- :heavy_check_mark: Creación de una ruta para recuperar datos desde la base de datos. `(1 punto)`
- :heavy_check_mark: Creación de una ruta para persistir o actualizar datos en la base de datos. `(1 punto)`
- :heavy_check_mark: Conexión de la aplicación con las rutas creadas. `(1 punto)`

## _Hito :four:_

### _Instrucciones_

> Teniendo la aplicación ya desarrollada y conectada al back end, se deberán escribir test que permitan probar la aplicación simulando las acciones que realizaría un usuario real, por ejemplo, loguearse,
marcar un elemento como favorito, eliminar un elemento, etc.
>
> La aplicación deberá superar con éxito todos los test programados y se revisará que los test escritos realmente contemplen todo el  funcionamiento de la aplicación.
> 
> Una vez finalizado el proceso de pruebas, se empaquetará la aplicación para su paso a producción.
> 
> Esta será alojada en un servicio de hosting a elección. Dentro de las opciones sugeridas se encuentran Firebase hosting, GIthub Pages y Netlify.
> 
> Además del código fuente del proyecto, se deberá adjuntar el enlace a la aplicación terminada.

- :heavy_check_mark: Escritura de tests para probar la aplicación completa. `(4 puntos)`
- :heavy_check_mark: Los test escritos abarcan todo el funcionamiento de la aplicación. `(2 puntos)`
- :heavy_check_mark: La aplicación pasa todos los test escritos. `(2 puntos)`
- :heavy_check_mark: Alojamiento de la aplicación en un servicio de Hosting. `(2 puntos)`