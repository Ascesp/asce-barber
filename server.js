const express = require("express");
const path = require("path");
const app = express();

// Railway asigna el puerto automáticamente
const PORT = process.env.PORT || 8080;

// Servir archivos estáticos (CSS, imágenes, JS)
app.use(express.static(path.join(__dirname)));

// Servir index.html en la raíz
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Iniciar servidor
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));
