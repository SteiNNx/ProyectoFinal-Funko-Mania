# _:clipboard:Pauta de Evaluación_

## _Hito :one:_
### _Detalle_

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