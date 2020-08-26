//We tell Knex how to connect ot our DB
//Knexfile displays an object.

module.exports = {
    client: "sqlite3", //specifying the DBMS
    useNullAsDefault: true, // a flag(option) that's required for SQlite
    connection: {
        filename: "./data/car-dealer.db3", //location of our database file
    }
}