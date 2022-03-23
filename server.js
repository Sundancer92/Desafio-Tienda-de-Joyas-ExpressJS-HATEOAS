const express = require("express");
const joyas = require("./data/joyas.js");
const app = express();
app.listen(3000, () => console.log("Your app listening on port 3000"));

// Carpeta publica
app.use(express.static("public"));

// HEATEOAS
const HATEOASV1 = () =>
	joyas.map((j) => {
		return {
			id: j.id,
			name: j.name,
			model: j.model,
			category: j.category,
			metal: j.metal,
			cadena: j.cadena,
			medida: j.medida,
			value: j.value,
			stock: j.stock,
		};
	});

const HATEOASV2 = () =>
	joyas.map((j) => {
		return {
			id: j.id,
			nombre: j.name,
			modelo: j.model,
			categoria: j.category,
			aleacion: j.metal,
			cadena: j.cadena,
			talla: j.medida,
			precio: j.value,
			disponibles: j.stock,
		};
	});

app.get("/MyPreciousSpa/apiV1/joyas", (req, res) => {
	res.send({
		data: HATEOASV1(),
	});
});

app.get("/MyPreciousSpa/apiV2/joyas", (req, res) => {
	res.send({
		data: HATEOASV2(),
	});
});
