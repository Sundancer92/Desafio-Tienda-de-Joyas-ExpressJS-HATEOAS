const joyas = require("./data/joyas.js");

// * HEATEOAS
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

// * Filtro por categorias
const filtroPorCategoria = (category) => {
	// Utilizar el método “filter” para retornar solo las guitarras que tengan como
	// cuerpo el mismo declarado como parámetro en la función.
	return joyas.filter((j) => j.category === category);
};

// * Filtro por campos
const fieldsSelect = (joya, fields) => {
	for (propiedad in joya) {
		if (!fields.includes(propiedad)) {
			delete joya[propiedad];
		}
	}
	return { joya };
};

// * Ordenamiento por valor
const orderValues = (order) => {
	return order == "asc"
		? joyas.sort((a, b) => a.value - b.value)
		:order == "desc"
		? joyas.sort((a, b) => b.value - a.value)
		: false
}
module.exports = { filtroPorCategoria, HATEOASV1, HATEOASV2, fieldsSelect, orderValues };
