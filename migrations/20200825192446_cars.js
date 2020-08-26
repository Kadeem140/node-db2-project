
exports.up = async function(knex) {
   await knex.schema.createTable("cars", (table) => {
        //translates to "id" INTERGER NOT NULL UNIQUE PRIMARY KEY
        table.increments("id")
        //translates to "make" NOT NULL 
        table.text("make").notNull()
        //translates to "model" NOT NULL 
        table.text("model").notNull()
        //translates to "price" INTERGER NOT NULL
        table.integer("price").notNull()
        //translates to "vin" NOT NULL UNIQUE
        table.text("vin").notNull().unique()
        //translates to "mileage" NOT NULL
        table.integer("mileage").notNull()
        //translates to "max-speed" NOT NULL 
        table.integer("maxSpeed").notNull() 
   })
};

//id, price ,make, model, vin, carType, mileage, max-speed
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
