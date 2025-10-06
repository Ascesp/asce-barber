const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080; // Muy importante

// Servir todos los archivos estáticos
app.use(express.static(path.join(__dirname)));

// Servir index.html en la raíz
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));
