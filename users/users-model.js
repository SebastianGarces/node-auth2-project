const db = require("../data/db-config")

module.exports = {
	add,
	find,
	findBy,
	findById,
}

async function add(user) {
	const [id] = await db("users").insert(user, "id")

	return findById(id)
}

function find() {
	return db("users").select("id", "username", "department")
}

function findBy(filter) {
	return db("users").where(filter)
}

function findById(id) {
	return db("users").where({ id }).first()
}