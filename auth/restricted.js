const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
	const token = req.headers.authorization

	if (!token)
		res.status(401).json({ message: "Not authorized, please login" })

	req.decodedToken = jwt.decode(token)

	next()
}
