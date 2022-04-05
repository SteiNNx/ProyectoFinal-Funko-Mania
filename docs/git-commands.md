Comandos Básicos 
================
Esta es una pequeña guía de comandos git. Si necesitas más información puedes visitar los sitios de [git](https://git-scm.com/) y [github](https://github.com/joshnh/Git-Commands)

##### Iniciar proyecto con git

* Descargar una copia del repositorio

	```
	$ project > git clone [repo] [carpeta local]
	```


##### Conectarse a un repositorio remoto
* Si ya tienes un proyecto y necesitas incluirte en el repositorio

```
$ project > git remote add origin [url]
```

* Cambiarlo por un servidor nuevo

```
$ project > git remote -set-url origin [url]
```

* Ver repositorios remotos enlazados

```
$ project > git remote -v
```


##### Trabajando con Archivos
* Agregar archivos

```
$ project > git add [archivo]
```

* Agregar todo

```
$ project > git add . 
```

* Publicar una entrega 

```
$ project > git commit -m “mi comentario” archivos
```

* Como ver mis cambios locales 
 
```
$ project > git status
$ project > git status [archivo o carpeta]
```

* Sincronizar mi copia 

```
$ project > git push
```


##### Comparar cambios
- Locales con mi último envío

```
$ project > git diff
$ project > git diff [caroeta o archivo]
```

- Entre diferentes branches 

```
$ project > git diff [mi branch] [otro branch]
```

* Ver cambios globales 

```
$ project > git log
```

* ver cambios de un archivo 

```
$ project > git log [archivo]
```


##### Configuraciones git
Mis datos globales

```
$ project > git config —global user.name “USER_NAME”
$ project > git config —global user.email “name_email@domain.cl”
```

Solo para mi proyecto

```
$ project > git config —local user.name “USER_NAME”
$ project > git config —local user.email “name_email@domain.cl”
```

Configuraciones en Git
Configurar parámetros globales

```
$ project > git config [--global] [setting] 
```

Solo para mi proyecto

```
$ project > git config --local [setting]
```
