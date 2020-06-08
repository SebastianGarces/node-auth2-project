const router = require("express").Router()
const Users = require("./users-model")

router.get("/", (req, res) => {
	const department = req.decodedToken.department

	Users.findBy({department: department})
		.then(users => res.json(users))
		.catch(error => res.send(error))
})

router.get("/all", (req, res) => {

	Users.find()
		.then(users => res.json(users))
		.catch(error => res.send(error))
})

module.exports = router
