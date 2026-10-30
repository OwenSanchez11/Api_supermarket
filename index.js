const express = require('express');
const bodyParser = require('body-parser');

const usuarioRoutes = require('./src/routes/usuarioRoutes');
const rolRoutes = require('./src/routes/rolRoutes')
const ventasRoutes = require('./src/routes/ventasRoutes');
const categoriasRoutes = require('./src/routes/categoriasRoutes');
const productosRoutes = require('./src/routes/productosRoutes');
const inventarioRoutes = require('./src/routes/inventarioRoutes');
const detallesProductosRoutes = require('./src/routes/detallesProductosRoutes');
const detallesVentasRoutes = require('./src/routes/detallesVentasRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

//  Rutas 

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/rol', rolRoutes)
app.use('/api/ventas', ventasRoutes);
app.use('/api/categorias', categoriasRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/inventario', inventarioRoutes);
app.use('/api/detalles-productos', detallesProductosRoutes);
app.use('/api/detalles-ventas', detallesVentasRoutes);

// iniciar servidor

app.listen(port, () => {
    console.log(`Servidor iniciado en:` + port);
});
