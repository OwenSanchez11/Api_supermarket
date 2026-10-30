# API de gestión de supermercado

API REST construida con Node.js, Express y MySQL para administrar usuarios, roles, ventas, productos, categorías e inventario.

## Requisitos

- Node.js y npm.
- MySQL en ejecución y accesible desde la máquina donde corre la API.
- Una base de datos MySQL llamada `supermarket`, con las tablas y columnas que utilizan los modelos del proyecto.

> El repositorio no incluye un archivo SQL para crear la base de datos. Debes tener el esquema preparado antes de iniciar la API.

## Instalación

Desde una terminal, entra en la carpeta `API` e instala las dependencias:

```bash
cd API
npm install
```

## Variables de entorno

Crea un archivo `API/.env` con los datos de conexión a MySQL:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_clave
DB_NAME=supermarket
DB_PORT=3306
```

## Ejecución

Desde la carpeta `API`, ejecuta:

```bash
node index.js
```

La API escucha en `http://localhost:3000`. MySQL debe estar iniciado y aceptar conexiones en el host y puerto configurados, en caso de no ser así, la aplicación no podrá arrancar correctamente.

## Endpoints

Todas las respuestas y solicitudes con cuerpo usan JSON. En las rutas con `:id`, reemplaza `:id` por el identificador del registro.

| Recurso | Método | Ruta |
| --- | --- | --- |
| Usuarios | GET | `/api/usuarios/getUsuarios` |
| Usuario por ID | GET | `/api/usuarios/getUsuariosById/:id` |
| Crear usuario | POST | `/api/usuarios/postUsuario` |
| Actualizar usuario | PUT | `/api/usuarios/putUsuario/:id` |
| Eliminar usuario | DELETE | `/api/usuarios/deleteUsuario/:id` |
| Roles | GET | `/api/rol/getRol` |
| Rol por ID | GET | `/api/rol/getRolById/:id` |
| Crear rol | POST | `/api/rol/postRol` |
| Actualizar rol | PUT | `/api/rol/putRol/:id` |
| Eliminar rol | DELETE | `/api/rol/deleteRol/:id` |
| Ventas | GET | `/api/ventas/getVentas` |
| Venta por ID | GET | `/api/ventas/getVentaById/:id` |
| Crear venta | POST | `/api/ventas/postVenta` |
| Actualizar venta | PUT | `/api/ventas/putVenta/:id` |
| Eliminar venta | DELETE | `/api/ventas/deleteVenta/:id` |
| Categorías | GET | `/api/categorias/getCategorias` |
| Categoría por ID | GET | `/api/categorias/getCategoriaById/:id` |
| Crear categoría | POST | `/api/categorias/postCategoria` |
| Actualizar categoría | PUT | `/api/categorias/putCategoria/:id` |
| Eliminar categoría | DELETE | `/api/categorias/deleteCategoria/:id` |
| Productos | GET | `/api/productos/getProductos` |
| Producto por ID | GET | `/api/productos/getProductoById/:id` |
| Crear producto | POST | `/api/productos/postProducto` |
| Actualizar producto | PUT | `/api/productos/putProducto/:id` |
| Eliminar producto | DELETE | `/api/productos/deleteProducto/:id` |
| Inventario | GET | `/api/inventario/getInventario` |
| Inventario por ID | GET | `/api/inventario/getInventarioById/:id` |
| Crear registro de inventario | POST | `/api/inventario/postInventario` |
| Actualizar registro de inventario | PUT | `/api/inventario/putInventario/:id` |
| Eliminar registro de inventario | DELETE | `/api/inventario/deleteInventario/:id` |
| Detalles de productos | GET | `/api/detalles-productos/getDetallesProductos` |
| Detalle de producto por ID | GET | `/api/detalles-productos/getDetalleProductoById/:id` |
| Crear detalle de producto | POST | `/api/detalles-productos/postDetalleProducto` |
| Actualizar detalle de producto | PUT | `/api/detalles-productos/putDetalleProducto/:id` |
| Eliminar detalle de producto | DELETE | `/api/detalles-productos/deleteDetalleProducto/:id` |
| Detalles de ventas | GET | `/api/detalles-ventas/getDetallesVentas` |
| Detalle de venta por ID | GET | `/api/detalles-ventas/getDetalleVentaById/:id` |
| Crear detalle de venta | POST | `/api/detalles-ventas/postDetalleVenta` |
| Actualizar detalle de venta | PUT | `/api/detalles-ventas/putDetalleVenta/:id` |
| Eliminar detalle de venta | DELETE | `/api/detalles-ventas/deleteDetalleVenta/:id` |

Para las operaciones POST y PUT, envía un cuerpo JSON con los campos que espera el recurso. Por ejemplo, para crear una categoría:

```json
{
  "nombre": "Abarrotes",
  "descripcion": "Productos de despensa"
}
```
