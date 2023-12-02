import { Personaje } from "../models/Personaje.js"

export const getPersonajes = async (req, res) => {
    try {
        const personajes = await Personaje.findAll()
        res.json(personajes)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const createPersonajes = async (req, res) => {
    try {
        const { name, weapon, hp } = req.body

        const NewPersonaje = await Personaje.create({
            name,
            weapon,
            hp
        })

        res.json(NewPersonaje)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}