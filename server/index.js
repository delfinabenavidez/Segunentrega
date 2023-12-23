const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

const products = [
  {
    id: "C1056706",
    nombre: "NASA",
    marca: "Caramelo",
    tipo: "Remera",
    descripcion: "Remera de NASA",
    precio: 7000,
  },
  {
    id: "C1007312",
    nombre: "Remera de Navidad",
    marca: "Ho-ho",
    tipo: "Remera",
    descripcion: "Remera de navidad roja",
    precio: 7500,
  },
  {
    id: "A0082231",
    nombre: "Lentes de Sol",
    marca: "Ray Ban",
    tipo: "Accessorio",
    descripcion: "Anteojos de sol de excelente calidad",
    precio: 165000,
  },
  {
    id: "T2203421",
    nombre: "Cable para cargar",
    marca: "Anker",
    tipo: "Tecnologia",
    descripcion: "Cable para cargar celular",
    precio: 2200,
  },
  {
    id: "T2902231",
    nombre: "Cable HDMI",
    marca: "Samsung",
    tipo: "Tecnologia",
    descripcion: "Cable hdmi resistente",
    precio: 5000,
  },
];


app.get("/products", (req, res) => {
  res.json(products);
});


app.get("/products/id/:id", (req, res) => {
  const { id } = req.params;
  const _products = products.filter((p) => p.id === id);
  res.json(_products);
});


app.get("/products/tipo/:tipo", (req, res) => {
  const { tipo } = req.params;
  const _products = products.filter((p) => p.tipo === tipo);
  res.json(_products);
});

app.get("/products/nombre/:nombre", (req, res) => {
  const { nombre } = req.params;
  const _products = products.filter((p) => p.nombre === nombre);
  res.json(_products);
});


app.post("/products", (req, res) => {
  const { id, nombre, marca, tipo, descripcion, precio } = req.body;
  if (products.some((p) => p.id === id)) {
    res.status(403).json({ error: `Product with id ${id} already exists.` });
  }
  products.push({ id, nombre: nombre, marca, tipo, descripcion, precio });
  res.status(200).json({ id, nombre, marca, tipo, descripcion, precio });
});


app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, marca, tipo, descripcion, precio } = req.body;
  products.forEach((p) => {
    if (p.id === id) {
      p = {
        id,
        nombre: nombre,
        marca,
        tipo,
        descripcion,
        precio,
      };
    }
  });
});


app.delete("products/:id", (req, res) => {
  const { id } = req.params;
  products = products.filter((p) => p.id !== id);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
