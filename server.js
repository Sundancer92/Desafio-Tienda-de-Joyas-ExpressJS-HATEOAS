const express = require("express");
const { forEach } = require("./data/joyas.js");
const joyas = require("./data/joyas.js");
const app = express();
app.listen(3000, () => console.log("Your app listening on port 3000"));

// Carpeta publica
app.use(express.static("public"));

// ? Funciones
const {
	filtroPorCategoria,
	HATEOASV1,
	HATEOASV2,
	fieldsSelect,
} = require("./funciones.js");

app.get("/MyPreciousSpa/apiV2/:id", (req, res) => {
	const id = req.params.id;
	const { fields } = req.query;
	const joya = joyas.find((j) => j.id == id);

	if (joya === undefined) {
		res.status(404).send({ error: "No se encontró la joya" });
	}
	if (fields) {
		res.json(fieldsSelect(joya, fields.split(",")));
	} else {
		res.status(404).send({ error: "No ingresaste campos para filtrar" });
	}
});

app.get("/MyPreciousSpa/apiV2/category/:tipo", (req, res) => {
	const tipo = req.params.tipo;
	res.send({
		joyas: filtroPorCategoria(tipo),
	});
});

app.get("/MyPreciousSpa/apiV1", (req, res) => {
	res.send({
		data: HATEOASV1(),
	});
});

app.get("/MyPreciousSpa/apiV2", (req, res) => {
	res.send({
		data: HATEOASV2(),
	});
});
