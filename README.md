# _ElAromaMagico_ - Daniel-Ulloa-MISW-4104-parcial-angular

**202512**

**MISW-4104**

**Evaluación Práctica Angular**


<a name="_hlk118349792"></a>**Instrucciones generales**

1. Cree un proyecto nuevo en Angular
1. Suba el proyecto a un repositorio de GitHub

**MUY IMPORTANTE**: Durante el desarrollo de la evaluación no olvide ir salvando los cambios periódicamente en el repositorio de Github. 

**Enunciado de la evaluación**

**Punto No. 1 (70%)**

Se debe desarrollar una aplicación que permita mostrar variedades de café disponibles en una tienda de café. En particular, la aplicación debe tener:

- Un módulo para cafés (10%)
- Una clase Cafe con todos los atributos que le permita manejar los datos de una variedad de café (20%)
- Un servicio que utiliza http para obtener de esta URL un conjunto de datos de cafés (20%). 

  <https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json> 

- Un componente de listar café que presentará en una tabla de Bootstrap los datos del café (*nombre, tipo* y *región*) (20%).

La vista debe hacerse con el selector del componente y el resultado final debe verse lo más parecido a la Fig. 1.

` `![Interfaz de usuario gráfica, Sitio web

Descripción generada automáticamente](Aspose.Words.744a2d20-c6bf-476c-be49-e86317088989.001.png)

Figura 1. Despliegue del listado de los cafés



**Punto No. 2 (10%)**

Modifique el componente de listar para incluir dos párrafos que muestren el número de variedades de café por tipo proporcionadas por el listado (la tienda ofrece café *de origen* y café *blend*). Este número debe ser calculado ya que no se conoce a priori. 

El resultado debe verse lo más parecido a la Fig. 2: 

![Interfaz de usuario gráfica, Sitio web

Descripción generada automáticamente](Aspose.Words.744a2d20-c6bf-476c-be49-e86317088989.002.png)


Figura 2. Modificación del componente para listar cafés



**Punto No. 3 (20%)**

Realice la prueba del componente. Para esto, en la prueba cree un listado de 3 cafés y verifique que la tabla se crea correctamente con tres filas más el encabezado. 


**Mockup**

En el siguiente enlace puede consultar el mockup que le servirá como referencia para diseñar la página:

<https://www.figma.com/file/oOXgfRDcN1tP5BN9Bc1Ujw/Monitoria-MISW---Mockups-parcial-1C?node-id=3%3A135> 


<a name="_hlk118349814"></a>**Instrucciones para la entrega de la evaluación**

1\. Haga *commit* y *push* a su repositorio personal.  

2\. Haga un [*release*](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) con la etiqueta 1.0.0 y el título ParcialMISW4104. 

3\. Suba como respuesta a la actividad de Coursera el archivo .zip del *release* y la URL de su repositorio. 

4\. Posterior a la entrega de la evaluación **NO** puede modificar el repositorio. **Si se presenta alguna modificación después de la hora de entrega, por mínima que sea, la evaluación será anulada**.
||||
| :- | :-: | -: |



---
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
