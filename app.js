import express from "express";

import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'src', 'views'));

app.get("/", async (req, res) => {
  res.render("generate")
});

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});