
exports.seed = async function(knex) {
  // clear all the rows in the table and reset it
  await knex("cars").truncate()

  //populate the table with some static data 
  await knex("cars").insert([
    {make: "Ford", model: "Fusion", price: 12000, vin: "3ER456FG1234", mileage: 50000, maxSpeed: 150},
    {make: "BMW", model: "X4", price: 25000, vin: "4KG654FG2468", mileage: 100000, maxSpeed: 170},
    {make: "Chevrolet", model: "Tahoe", price: 70000, vin: "5BF619FG820", mileage: 20000, maxSpeed: 190  }

  ])

};
