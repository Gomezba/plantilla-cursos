# Plantilla para Elaboración de Cursos con Pug

Esta plantilla proporciona una estructura básica para la elaboración de cursos utilizando el motor de plantillas Pug.

## Uso

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/plantilla-curso-pug.git
   ```

2. Instalar Dependencias
   Para instalar las dependencias con versiones exactas, utiliza el siguiente comando:

npm i -E

3. Configuración del Archivo
   En el archivo de configuración (config), encontrarás una matriz como la siguiente:

const pages = [
['pagina.html', 'texto link'],
['pagina.html', 'texto link']
];
Donde el primer valor es el nombre de la página y el segundo valor es el texto del enlace para crear el menú.

1. Variable pageActive
   Asegúrate de incluir la variable pageActive dentro del bloque del menú. Es crucial declararla con el nombre de la página para indicar cuál página está activa.

1. Submenús para Páginas Específicas
   Si alguna página necesita un submenú, agrega lo siguiente en el bloque de contenido:

const linksSubmenu = [
['nombreLink1', 'ID de article1'],
['nombreLink2', 'ID de article2']
];

Utiliza la función submenu() para generar el submenú
+submenu(linksSubmenu);

article#1

4. Si desdeas incluir la funcionalidad de boton para abrir un pdf, necesitas agregar el script en el bloque head de la siguiente forma

   append head  
   script(src="../../public/js/btn-code.js" defer)
