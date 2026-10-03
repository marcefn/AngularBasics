# Angular Basics

Proyecto de práctica para aprender los fundamentos de Angular 19. Parte del
repositorio de [MikeMoralesDEV](https://github.com/MikeMoralesDEV/AngularBasics),
al que he añadido mis propias modificaciones.

## Tecnologías

- Angular 19 (componentes standalone)
- Angular Material (tema `azure-blue`)
- Formularios reactivos
- TypeScript
- ngx-logger

## Cómo ejecutarlo

Requisitos: Node.js 18.19+ o 20+ y Git.

```bash
git clone https://github.com/marcefn/AngularBasics.git
cd AngularBasics
npm install
npm start
```

Abre http://localhost:4200

## Páginas

| Ruta         | Descripción                                              |
| ------------ | -------------------------------------------------------- |
| `/Noticias`  | Componente de noticias (pendiente de contenido)          |
| `/Productos` | Tabla de productos con Material, datos desde un servicio |
| `/Ejemplo`   | Componente de ejemplo                                    |
| `/Contacto`  | Formulario reactivo con validaciones                     |

## Estructura

- `src/app/app.routes.ts`: definición de rutas
- `src/app/menu/`: barra de navegación con Material
- `src/app/productos/`: tabla de productos
- `src/app/contacto/`: formulario de contacto
- `src/app/producto.service.ts`, `producto.ts`: servicio y modelo de datos

## Cambios que he hecho sobre el original

- Nueva página de **Contacto** con formulario reactivo (nombre, email y
  mensaje) y validaciones con mensajes de error de Material.
- **Rediseño con Angular Material**: tema, barra superior, menú horizontal con
  enlace activo resaltado y contenido centrado en tarjetas.
- **Limpieza de avisos del compilador**: imports sin usar en `AppComponent`,
  `MenuComponent` y `ProductosComponent`.
- **Imágenes de Productos** con `NgOptimizedImage`: proporción corregida y
  `priority` solo en la primera fila.

## Lo que he aprendido

- Cada componente standalone importa solo lo que usa en su propia plantilla.
- Una página necesita tres enlaces: la ruta, el componente y el
  `<router-outlet />`. Si falta uno, no aparece.
- Un tema de Material hay que cargarlo en `angular.json`; instalar la librería
  no basta.
- Formularios reactivos: el modelo se define en el `.ts` y la plantilla solo se
  conecta con `formGroup` y `formControlName`.
- `NgOptimizedImage` avisa si la proporción de `width` y `height` no coincide
  con la imagen real y si falta `priority` en la imagen principal.
- Los avisos (`WARNING`) no son errores, pero merece la pena leerlos y limpiarlos.

## Pendiente

- Dar contenido y estilo a Noticias y Ejemplo
- Enviar el formulario de contacto a un servicio real con `HttpClient`

## Créditos y licencia

Proyecto original de MikeMoralesDEV. Se mantiene la licencia del repositorio
original.
