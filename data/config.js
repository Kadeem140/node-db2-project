const knex = require("knex")
const knexfile = require("../knexfile")

//initate a connection to the database
//so we can import it into otherr files
module.exports = knex(knexfile)
