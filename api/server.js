const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const userRouter = require("../users/users.router")
const authRouter = require("../auth/auth-router")
const restricted = require("../auth/restricted")

const server = express()

// global middleware
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/users", restricted, userRouter)
server.use("/api/auth", authRouter)

module.exports = server
