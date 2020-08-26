const express = require("express")
const db = require("../data/config")

const router = express.Router()

//GET ALL CARS
router.get("/cars", async (req, res, next) => {
	try {
		res.json(await db("cars"))
	} catch(err) {
		next(err)
	}
})

//GET CAR BY ID
router.get("/cars/:id", async (req, res, next) => {
	try {
		const { id } = req.params
		const fruit = await db("cars").where({ id }).first()
		
		res.json(fruit)
	} catch(err) {
		next(err)
	}
})

//CREATE A NEW CAR
router.post("/cars", async (req, res, next) => {
	try {
		const [id] = await db("cars").insert({
            make: req.body.make,
            model: req.body.model,
            price: req.body.price,
            vin: req.body.vin,
            mileage: req.body.mileage,
            maxSpeed:req.body.maxSpeed
        })
        //id, price ,make, model, vin, mileage, max-speed
		const newCar = await db("cars").where({ id }).first()

		res.status(201).json(newFruit)
	} catch(err) {
		next(err)
	}
})

//EDIT CAR
router.put("/cars/:id", async (req, res, next) => {
    try {
        await db("cars")
        .update({
            make: req.body.make,
            model: req.body.model,
            price: req.body.price,
            vin: req.body.vin,
            mileage: req.body.mileage,
            maxSpeed:req.body.maxSpeed
        })
        .where("id", req.params.id)

        const cars = await db("cars")
        .where("id", req.params.id)
        .first()

        res.json(cars)
    } catch(err) {
        next(err)
    }
})

// Delete car
router.delete("/cars/:id", async (req, res, next) => {
    try {
        await db("cars")
        .where("id", req.params.id)
        .del()

        res.status(204).end()
    } catch(err) {
        next(err)
    }
})

module.exports = router