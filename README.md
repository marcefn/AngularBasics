# Angular Basics

Proyecto de práctica para aprender los fundamentos de Angular 19.
Basado en el repositorio de [MikeMoralesDEV](https://github.com/MikeMoralesDEV/AngularBasics),
con mis propias modificaciones.

## Tecnologías

- Angular 19 (componentes standalone)
- Angular Material
- TypeScript
- ngx-logger

## Cómo ejecutarlo

Requisitos: Node.js 18.19+ o 20+ y Git.

    git clone https://github.com/marcefn/AngularBasics.git
    cd AngularBasics
    npm install
    npm start

Abre http://localhost:4200

## Rutas disponibles

| Ruta       | Descripción                     |
| ---------- | ------------------------------- |
| /Menu      | Menú de navegación              |
| /Noticias  | Componente de noticias          |
| /Productos | Tabla de productos con servicio |
| /Ejemplo   | Componente de ejemplo           |

## Estructura

- `src/app/app.routes.ts`: definición de rutas
- `src/app/producto.service.ts`: servicio con los datos de productos
- `src/app/producto.ts` y `categoria.ts`: modelos

## Lo que he aprendido

- Cómo funcionan los componentes standalone y su lista de `imports`
- Routing con `RouterLink` y `RouterOutlet`
- Separar datos y lógica en servicios
- (añade aquí lo que vayas aprendiendo)

## Cambios que he hecho

- Limpiados los imports sin usar
- (añade aquí tus cambios)

## Créditos y licencia

Proyecto original de MikeMoralesDEV, licencia MIT.
